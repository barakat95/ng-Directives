import {
  Directive,
  Renderer2,
  OnInit,
  ElementRef,
  HostListener,
  HostBinding,
  Output,
  Input
} from "@angular/core";

@Directive({
  selector: "[appBetterHighlight]"
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string ;
  @Input() highlightColor: string ;
  @HostBinding("style.backgroundColor") backgroundColor: string = this
    .defaultColor;
  @HostBinding("style.color") fontColor: string = "black";
  constructor(private renderer: Renderer2, private eleRef: ElementRef) {}
  ngOnInit(): void {
    // this.renderer.setStyle(this.eleRef.nativeElement, "background-color", "yellow");
  }
  @HostListener("mouseenter") onMouseOver(eventData: Event) {
    this.backgroundColor = this.highlightColor;
    this.fontColor = "red";
    // this.renderer.setStyle(
    //   this.eleRef.nativeElement,
    //   "background-color",
    //   "yellow"
    // );
  }
  @HostListener("mouseleave") onMouseLeave(eventData: Event) {
    this.backgroundColor = this.defaultColor;
    this.fontColor = "black";
    // this.renderer.setStyle(
    //   this.eleRef.nativeElement,
    //   "background-color",
    //   "transparent"
    // );
  }
}
