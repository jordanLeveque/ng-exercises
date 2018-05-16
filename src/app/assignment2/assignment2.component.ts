import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.scss'],
})
export class Assignment2Component implements OnInit {
  values = '';

  onKey(event: KeyboardEvent) { // with type info
    this.values = (<HTMLInputElement>event.target).value;
  }

  validForm() {
    return (this.values == '' ? true : false);
  }
  constructor() { }

  ngOnInit() {
  }

}
