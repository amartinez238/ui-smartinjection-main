import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'info-list',
  template: `
<mat-selection-list #shoes [multiple]="false">
  <mat-list-option *ngFor="let shoe of typesOfShoes" [value]="shoe">
    {{shoe}}
  </mat-list-option>
</mat-selection-list>

<p>
  Option selected: {{shoes.selectedOptions.selected[0]?.value}}
</p>
  `,
  styles: [
  ]
})
export class InfoListComponent implements OnInit {

  typesOfShoes: string[] = ['Well 1', 'Well 2', 'Well 3', 'Well 4', 'Well 5'];

  constructor() { }

  ngOnInit(): void {
  }

}
