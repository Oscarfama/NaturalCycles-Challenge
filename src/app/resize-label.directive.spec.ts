import { Component } from '@angular/core';
import { ResizeLabelDirective } from './resize-label.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';

@Component({
  selector: 'test-component-mock',
  template: `<div appFitText>hi</div>`,
  standalone: true,
  imports: [ResizeLabelDirective],
})
class TestComponent {}

describe('ResizeLabelDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let directive: ResizeLabelDirective;
  let element: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestComponent, ResizeLabelDirective],
    });

    fixture = TestBed.createComponent(TestComponent);
    element = fixture.debugElement.nativeElement.querySelector('[appFitText]');
    directive = fixture.debugElement.children[0].injector.get(ResizeLabelDirective);
    fixture.autoDetectChanges();
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('should adjust font size when text overflows', () => {
    element.style.fontSize = `${directive.maxFontSize}px`;
    element.style.whiteSpace = 'nowrap';
    element.textContent = 'This is a very long text that should overflowqwerqwer';

    directive.adjustFontSize();

    const newFontSize = parseInt(getComputedStyle(element).fontSize, 10);
    expect(newFontSize).toBeLessThan(200);
    expect(newFontSize).toBeGreaterThanOrEqual(directive.minFontSize);
  });
});
