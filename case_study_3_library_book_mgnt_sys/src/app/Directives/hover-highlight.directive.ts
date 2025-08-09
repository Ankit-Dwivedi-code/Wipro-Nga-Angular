import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverHighlight]'
})
export class HoverHighlightDirective {

  // main color input (bound as [appHoverHighlight]="...") 
  @Input('appHoverHighlight') backgroundColor: string = '#ffffcc';
  // scale factor input (bound as [hoverScale]="1.03")
  @Input() hoverScale: number = 1.03;

  private originalBackground: string | null = null;
  private originalTransform: string | null = null;
  private originalBoxShadow: string | null = null;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    const style = window.getComputedStyle(this.el.nativeElement);
    this.originalBackground = style.backgroundColor;
    this.originalTransform = style.transform === 'none' ? '' : style.transform;
    this.originalBoxShadow = style.boxShadow;
  }

  @HostListener('mouseenter') onEnter() {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', this.backgroundColor);
    this.renderer.setStyle(this.el.nativeElement, 'boxShadow', '0 6px 18px rgba(0,0,0,0.12)');
    this.renderer.setStyle(this.el.nativeElement, 'transform', `scale(${this.hoverScale})`);
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'transform 200ms ease, box-shadow 200ms ease, background-color 200ms ease');
  }

  @HostListener('mouseleave') onLeave() {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', this.originalBackground);
    this.renderer.setStyle(this.el.nativeElement, 'boxShadow', this.originalBoxShadow || 'none');
    this.renderer.setStyle(this.el.nativeElement, 'transform', this.originalTransform || 'none');
  }

}
