import {
  Directive,
  ElementRef,
  AfterViewInit,
  HostListener,
  OnDestroy,
  inject,
} from '@angular/core';

@Directive({
  selector: '[appFitText]',
  standalone: true,
})
export class ResizeLabelDirective implements AfterViewInit, OnDestroy {
  #nativeElement = inject(ElementRef).nativeElement;
  readonly minFontSize = 10;
  readonly maxFontSize = 500;

  #textChangeObserver = new MutationObserver(() => {
    this.adjustFontSize();
  });

  // could use the resizeObserver too like the textChangeObserver but this is another approach
  @HostListener('window:resize')
  onResize(): void {
    this.adjustFontSize();
  }

  ngAfterViewInit(): void {
    this.adjustFontSize();
    this.#textChangeObserver.observe(this.#nativeElement, {
      characterData: true,
      subtree: true,
    });
  }

  ngOnDestroy(): void {
    this.#textChangeObserver.disconnect();
  }

  adjustFontSize() {
    const element = this.#nativeElement;
    const parentWidth = element.parentElement.offsetWidth;
    let fontSize = parseInt(getComputedStyle(element).fontSize, 10);

    while (element.scrollWidth > parentWidth && fontSize > this.minFontSize) {
      fontSize--;
      element.style.fontSize = `${fontSize}px`;
    }

    while (element.scrollWidth <= parentWidth && fontSize < this.maxFontSize) {
      fontSize++;
      element.style.fontSize = `${fontSize}px`;
    }

    element.style.fontSize = `${fontSize - 1}px`;
  }
}

/**
   * approach that I originally wanted to do: Use signals so I can set the fontSize in the HTML, 
   * the problem is the calculation, the DOM needs the fontSize to calcuate how much is left to fit.
   
   // #fontSize = signal<number>(0); 
    fontSize = this.#fontSize.asReadonly();

    in HTML I could have used the following as inputs: #resizeCounterObserver="appFitText"
  appFitText  [style.font-size]="resizeCounterObserver.fontSize() + 'px'", would add the exportAs: 'appFitText',
   */
