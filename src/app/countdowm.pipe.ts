import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countdowm',
  standalone: true,
})
export class CountdowmPipe implements PipeTransform {
  transform(seconds: number): string {
    if (seconds <= 0) return '0 days, 0 h, 0 m, 0 s';

    const days = Math.floor(seconds / 86400);
    const hours = Math.floor((seconds % 86400) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    return `${days} days, ${hours} h, ${minutes} m, ${secs} s`;
  }
}
