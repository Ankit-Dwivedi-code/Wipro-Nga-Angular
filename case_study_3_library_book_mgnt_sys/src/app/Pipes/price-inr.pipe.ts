import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceInr'
})
export class PriceInrPipe implements PipeTransform {

  transform(value: number | null | undefined): string {
    if (value == null || isNaN(Number(value))) return '';

    const formatted = new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR'
    }).format(value);

    // Exercise requirement: append (discount applied) if price < ₹700
    return value < 700 ? `${formatted} (discount applied)` : formatted;
  }

}
