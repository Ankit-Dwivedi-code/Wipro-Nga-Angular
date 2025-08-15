import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount',
  standalone: true,
  pure: true
})
export class DiscountPipe implements PipeTransform {
  transform(price: number | null | undefined, percent = 0): number {
    if (!price || percent <= 0) return price ?? 0;
    return +(price - (price * percent / 100)).toFixed(2);
  }
}
