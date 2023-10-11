import {AfterViewInit, Directive, ElementRef, Renderer2} from "@angular/core";

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective implements AfterViewInit{
    constructor(private elementRef: ElementRef,
                private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.setBackgroundColor('yellow');
  }

  setBackgroundColor(color: string) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', color);
  }
}
