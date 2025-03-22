import { Component, computed, effect, inject, signal } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterOutlet } from '@angular/router';
import { CountdowmPipe } from './countdowm.pipe';
import { ResizeLabelDirective } from './resize-label.directive';
import { SessionStorageService } from './session-storage.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatFormFieldModule,
    ResizeLabelDirective,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    CountdowmPipe,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  sessionStorage = inject(SessionStorageService);
  title = new FormControl<string | null>(this.getStorageData('title') || 'Midsummer  Eve');
  targetDate = new FormControl<Date | null>(
    new Date(this.getStorageData('targetDate') || new Date(2025, 5, 21)),
  );

  #now = signal(new Date());

  timeLeftInSeconds = computed<number>(() => {
    const target = this.targetDate.value;
    if (!target) return 0;
    return Math.floor((target.getTime() - this.#now().getTime()) / 1000);
  });

  #interval = effect(() => {
    const intervalId = setInterval(() => this.#now.set(new Date()), 1000);
    return () => clearInterval(intervalId);
  });

  getStorageData(key: string) {
    return this.sessionStorage.getItem(key);
  }

  updateSessionStorage() {
    this.sessionStorage.setItem(`title`, this.title.value);
    this.sessionStorage.setItem(`targetDate`, this.targetDate.value);
  }
}
