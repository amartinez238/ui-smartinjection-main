import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'selection-list',
  template: `
    <mat-selection-list #item>
      <mat-list-option *ngFor="let item of defaultList">
        {{ item }}
      </mat-list-option>
    </mat-selection-list>

    <p>
    Options selected: {{item.selectedOptions.selected}}
    </p>
  `,
  styles: [
  ]
})
export class SelectionListComponent implements OnInit {

  defaultList: string[]= ['hello', 'world', ];

  constructor() { }

  ngOnInit(): void {
  }

}
