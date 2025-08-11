import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlightDirective]'
})
export class HighlightDirectiveDirective {
  // Highlights premium events (ticket price above ₹2000) by changing the background color to light gold.
  @Input('appHighlightDirective') ticketPrice: number | undefined;


  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
     // Store original background to restore later
    this.originalBackground = this.el.nativeElement.style.backgroundColor;

    // Apply initial highlight if premium
    if (this.ticketPrice !== undefined && this.ticketPrice > 2000) {
      this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', this.greaterThan2000HighlightColor);
    } else {
      this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', this.lessThan2000HighlightColor);
    }
  }

  // Adding animation
  @HostListener('mouseenter') onEnter() {
    if (this.ticketPrice !== undefined && this.ticketPrice > 2000) {
      this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', this.greaterThan2000HighlightColor);
      this.renderer.setStyle(this.el.nativeElement, 'boxShadow', '0 2px 10px rgba(0, 0, 0, 0.15)');
      this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateY(-3px)');
      this.renderer.setStyle(this.el.nativeElement, 'transition', 'all 0.3s ease');
      this.renderer.setStyle(this.el.nativeElement, 'cursor', 'pointer');
    } else {
      this.renderer.setStyle(this.el.nativeElement, 'cursor', 'pointer');
      this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', this.lessThan2000HighlightColor);
    }
  }

  @HostListener('mouseleave') onLeave() {
    if (this.ticketPrice !== undefined && this.ticketPrice > 2000) {
      this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', this.greaterThan2000HighlightColor);
    } else {
      this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', this.lessThan2000HighlightColor);
    }
    this.renderer.setStyle(this.el.nativeElement, 'boxShadow', 'none');
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateY(0)');
  }
  private lessThan2000HighlightColor = '#f1f1f1';
  private greaterThan2000HighlightColor = '#ffffe0'; // light golden
  private originalBackground = '';

}
