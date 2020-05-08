import { Directive, ElementRef, OnInit, HostListener } from "@angular/core";

@Directive({
  selector: "[appBasicHighlight]"
})
export class BasicHighlightDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}
  ngOnInit() {
    // this.elementRef.nativeElement.style.backgroundColor = "red";
  }

  @HostListener("mouseenter") onMouseEnter(eventData: Event) {
    this.elementRef.nativeElement.style.backgroundColor = "red";
  }

  @HostListener("mouseleave") onMouseLeave(eventData: Event) {
    this.elementRef.nativeElement.style.backgroundColor = "transparent";
  }
}
