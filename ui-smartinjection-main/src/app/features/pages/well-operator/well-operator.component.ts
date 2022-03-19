import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-well-operator',
  templateUrl: './well-operator.component.html',
  styleUrls: ['./well-operator.component.scss']
})
export class WellOperatorComponent implements OnInit {

  sideBarOpen = false;

  constructor() { }

  ngOnInit(): void {
  }

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

}
