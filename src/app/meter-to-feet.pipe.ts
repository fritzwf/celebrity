import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'meterToFeet'
})
export class MeterToFeetPipe implements PipeTransform {
  transform(height: number): string {
    return (height * 3.28084).toFixed(1) + ' ft';
  }
}
