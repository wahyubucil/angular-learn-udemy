import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  ContentChild,
  ElementRef,
  OnChanges,
  SimpleChanges,
  AfterContentInit,
  ViewChild,
  AfterViewInit
} from "@angular/core";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"],
  encapsulation: ViewEncapsulation.Emulated // None, Native
})
export class ServerElementComponent
  implements OnChanges, OnInit, AfterContentInit, AfterViewInit {
  @Input("srvElement") element: { type: string; name: string; content: string };
  @ViewChild("header") header: ElementRef;
  @ContentChild("contentParagraph") paragraph: ElementRef;

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges called!");
    console.log(changes);
  }

  ngOnInit() {}

  ngAfterContentInit() {
    console.log("ngAfterContentInit called!");
    console.log(
      `Text Content of paragraph: ${
        (this.paragraph.nativeElement as HTMLParagraphElement).textContent
      }`
    );
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit called!");
    console.log(
      `Text content of header: ${
        (this.header.nativeElement as HTMLElement).textContent
      }`
    );
  }
}
