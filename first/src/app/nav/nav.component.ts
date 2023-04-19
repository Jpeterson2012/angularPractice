import { AfterContentInit, Component, ContentChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: '.app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, AfterContentInit {
  constructor() {}

  ngOnInit(): void {
    console.log(this.childage);
  }
  ngAfterContentInit(): void {
    //console.log(this.childage.nativeElement.textContent);
  }
  sitename: string = 'eShopping';
  @ContentChild('paragraph') childage!: ElementRef;

  active: boolean = false;
}
