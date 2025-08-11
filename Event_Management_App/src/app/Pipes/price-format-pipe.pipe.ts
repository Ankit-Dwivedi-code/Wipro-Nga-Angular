import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceFormatPipe'
})
export class PriceFormatPipePipe implements PipeTransform {

  //Formats ticket prices into a standard format:
// Example: 500 → ₹500.00
// Example: 1200 → ₹1,200.00

 transform(value: number | null | undefined, currency: string = 'INR', local: string = 'en-IN'): string {
    if (value == null || isNaN(Number(value))) return '';

    try {
      return new Intl.NumberFormat(local, { style: 'currency', currency }).format(value);
    } catch (e) {
      // fallback simple format
      return `${currency} ${value.toFixed(2)}`;
    }
  }

}
