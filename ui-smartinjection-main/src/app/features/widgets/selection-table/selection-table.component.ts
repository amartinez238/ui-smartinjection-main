import { Component, Input, OnChanges, OnInit, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'selection-table',
  template: `
  <div>
    <!-- Bugs: mat-form-field is broken -->
    <!-- <mat-form-field>
      <mat-label>Filter</mat-label>
      <input
        matInput
        (keyup)="applyFilter($event)"
        placeholder="Ex. ium"
        #input
      />
    </mat-form-field> -->

    <table mat-table [dataSource]="dataSource" class="mat-elevation-z8">
      <!-- Checkbox Column -->
      <ng-container matColumnDef="select">
        <th mat-header-cell *matHeaderCellDef>
          <mat-checkbox
            (change)="$event ? masterToggle() : null"
            [checked]="selection.hasValue() && isAllSelected()"
            [indeterminate]="selection.hasValue() && !isAllSelected()"
          >
            <!-- [aria-label]="checkboxLabel()" -->
          </mat-checkbox>
        </th>
        <td mat-cell *matCellDef="let row">
          <mat-checkbox
            (click)="$event.stopPropagation()"
            (change)="$event ? selection.toggle(row) : null"
            [checked]="selection.isSelected(row)"
            >
            <!-- [aria-label]="checkboxLabel(row)" -->
          </mat-checkbox>
        </td>
      </ng-container>

      <!-- Well Name Column -->
      <ng-container matColumnDef="wellName">
        <th mat-header-cell *matHeaderCellDef>Well Name</th>
        <td mat-cell *matCellDef="let element">{{ element.state.data.wellName }}</td>
      </ng-container>

      <!-- Lease Column -->
      <ng-container matColumnDef="lease">
        <th mat-header-cell *matHeaderCellDef>Lease</th>
        <td mat-cell *matCellDef="let element">{{ element.state.data.lease }}</td>
      </ng-container>

      <!-- Location Type Column -->
      <ng-container matColumnDef="locationType">
        <th mat-header-cell *matHeaderCellDef>Location Type</th>
        <td mat-cell *matCellDef="let element">{{ element.state.data.locationType }}</td>
      </ng-container>

      <!-- Location Column -->
      <ng-container matColumnDef="location">
        <th mat-header-cell *matHeaderCellDef>Location</th>
        <td mat-cell *matCellDef="let element">{{ element.state.data.location }}</td>
      </ng-container>

      <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
      <tr mat-row *matRowDef="let row; columns: displayedColumns;" (click)="selection.toggle(row)" (click)="checkSelected()"></tr>

      <!-- Row shown when there is no matching data. -->
      <tr class="mat-row" *matNoDataRow>
        <td class="mat-cell" colspan="4">
          <!-- No data matching the filter "{{ input.value }}" -->
        </td>
      </tr>
    </table>
<!-- 
    <br>

    <mat-card>
    {{selection.selected | json }}

    <br><br>

    {{ printSelectedName }}
    
  </mat-card>
    <br> -->
    <!-- <br>
    <button mat-flat-button color="accent" (click)="checkSelected()">Update Well List</button> -->
  </div>
  `,
  styles: [
    `
      table {
        width: 100%;
      }

      .mat-form-field {
        font-size: 14px;
        width: 100%;
      }
    `,
  ],
})
export class SelectionTableComponent implements OnInit, OnChanges {
  displayedColumns!: string[];
  dataSource = new MatTableDataSource([]as any[]);
  selection = new SelectionModel(true, []as any[]);
  selected!: any;
  printSelectedName!: any;
  wellIDs: any[] = [];

  @Input() data!: any[];

  @Input() col!: any[];

  @Output() testOutput = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    this.displayedColumns = this.col;
  }

  ngOnChanges(): void {
    console.log("in onChanges");
    this.dataSource.data = this.data;

  }
  
  checkSelected(): void {
    console.log("this.selection.selected: ", this.selection.selected);
    // console.log("this.selection.selected[0]: ", this.selection.selected[0]);

    // this.selected = this.selection.selected[1];
    // console.log("externalID at 1: ", this.selected.state.data.linearId.externalId);

    // this.printSelectedName = this.selected.state.data.wellName;

    console.log(this.selection.selected[0].state.data.wellName);

    let selectLen = this.selection.selected.length;

    for (let i=0; i < selectLen; i++) {
      // console.log(this.selection.selected[i].state.data.wellName);
      this.wellIDs.push(this.selection.selected[i]);
    }
    console.log(this.wellIDs);

    //sends well information in wellIDs to another component calling it
    this.testOutput.emit(this.wellIDs); 

    this.wellIDs = [];
    
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach((row) => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  // checkboxLabel(row?: PeriodicElement): string {
  //   if (!row) {
  //     return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
  //   }
  //   return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
  //     row.position + 1
  //   }`;
  // }
}
