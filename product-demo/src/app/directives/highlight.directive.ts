import { Directive, Renderer2, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  // This directive can be used to highlight elements
  @Input('appHighlight') highlightColor: string = '#ffffcc';


  private originalBackground: string | null = null;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.originalBackground = this.el.nativeElement.style.backgroundColor || 'white';
  }

  // mouse enter hover effect
  // mouse leave hover effect
  @HostListener('mouseenter') onEnter() {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', this.highlightColor);
    //box shadow
    this.renderer.setStyle(this.el.nativeElement, 'boxShadow', `0 2px 10px rgba(0, 0, 0, 0.08)`);
    //transform
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'translate(-3px');
    //curser pointer
    this.renderer.setStyle(this.el.nativeElement, 'cursor', 'pointer');
  }

  @HostListener('mouseleave') onLeave() {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', this.originalBackground);
    this.renderer.setStyle(this.el.nativeElement, 'boxShadow', 'none');
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'translate(0)');
  }

  //using renderer2 avoids direct DOM manipulation
  // Hostlistner reacts to user events(mouseenter/mouse)
}
