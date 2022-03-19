import { AfterViewInit, Component, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'overview-table',
  template: `
<table mat-table [dataSource]="dataSource" class="mat-elevation-z8" matSort>

<!--- Note that these columns can be defined in any order.
      The actual rendered columns are set as a property on the row definition" -->


<!-- ******** **** UIC PROJECT TABLE ***** ********** -->
<!-- Project Name Column DASH WO-->
<ng-container matColumnDef="projectNameDASH-WO">
  <th mat-header-cell *matHeaderCellDef mat-sort-header> Project Name </th>
  <td mat-cell *matCellDef="let element"> 
    <a [routerLink]="['/wo/unapproved-project', element.state.data.linearId.id]">
      {{ element.state.data.projectName }} 
    </a>
  </td>
</ng-container>

<!-- Project Name Column DASH REG-->
<ng-container matColumnDef="projectNameDASH-REG">
  <th mat-header-cell *matHeaderCellDef mat-sort-header> Project Name </th>
  <td mat-cell *matCellDef="let element"> 
    <a [routerLink]="['/reg/project-review', element.state.data.linearId.id]">
      {{ element.state.data.projectName }} 
    </a>
  </td>
</ng-container>

<!-- Project Name Column  -->
<ng-container matColumnDef="projectName">
  <th mat-header-cell *matHeaderCellDef mat-sort-header> Project Name </th>
  <td mat-cell *matCellDef="let element"> 
      {{ element.state.data.projectName }} 
  </td>
</ng-container>

<!-- Status Column -->
<ng-container matColumnDef="status">
  <th mat-header-cell *matHeaderCellDef mat-sort-header> Project Status </th>
  <td mat-cell *matCellDef="let element"> {{element.state.data.status}} </td>
</ng-container>

<!-- UIC Project Number Column -->
<ng-container matColumnDef="UICProjectNumber">
  <th mat-header-cell *matHeaderCellDef mat-sort-header> UIC Project Number </th>
  <td mat-cell *matCellDef="let element"> {{element.state.data.UICProjectNumber}} </td>
</ng-container>


<!-- ************* WELL TABLE *************** -->
<!-- WELL NAME -->
<ng-container matColumnDef="wellName">
  <th mat-header-cell *matHeaderCellDef> Well Name </th>
  <td mat-cell *matCellDef="let element"> {{ element.state.data.wellName }} </td>
</ng-container>

<!-- LEASE -->
<ng-container matColumnDef="lease">
  <th mat-header-cell *matHeaderCellDef> Lease </th>
  <td mat-cell *matCellDef="let element"> {{ element.state.data.lease }} </td>
</ng-container>

<!-- WELL TYPE -->
<ng-container matColumnDef="wellType">
  <th mat-header-cell *matHeaderCellDef> Well Type </th>
  <td mat-cell *matCellDef="let element"> {{ element.state.data.wellType }} </td>
</ng-container>

<!-- LOCATION TYPE -->
<ng-container matColumnDef="locationType">
  <th mat-header-cell *matHeaderCellDef> Location Type </th>
  <td mat-cell *matCellDef="let element"> {{ element.state.data.locationType }} </td>
</ng-container>

<!-- LOCATION -->
<ng-container matColumnDef="location">
  <th mat-header-cell *matHeaderCellDef> Location </th>
  <td mat-cell *matCellDef="let element"> {{ element.state.data.location }} </td>
</ng-container>

<!-- Project Name -->
<ng-container matColumnDef="projectNameWell">
  <th mat-header-cell *matHeaderCellDef> Project Name </th>
  <td mat-cell *matCellDef="let element"> {{ element.state.data.projectName }} </td>
</ng-container>


<tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
<tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
</table>
  `,
  styles: [`
  /* Structure */
table {
  width: 100%;
}

.mat-form-field {
  font-size: 14px;
  width: 100%;
}
  `
  ]
})

export class OverviewTableComponent implements OnInit, OnChanges, AfterViewInit {
  displayedColumns!: string[];
  dataSource = new MatTableDataSource([]as any[]);
  unapprovedProjects: any[] = [];
  temp: any;

  @Input() data!: any[];

  @Input() col!: any[];

  @ViewChild(MatSort) sort!: MatSort;

  constructor() { }

  ngOnInit(): void {
    this.displayedColumns = this.col;
  }

  ngOnChanges(): void {

    this.dataSource.data = this.data;
    console.log(this.data);

    this.dataSource.sort = this.sort;

    // console.log("data: ", this.data.length);

    // for (let i= 0; i < this.data.length; i++) {
    //   if (this.data[i].state.data.status == "Unapproved") {
    //     this.unapprovedProjects.push(this.data[i]);
    //     // console.log(this.unapprovedProjects);
    //   }
    // }
    // console.log("unapproved projects: ", this.unapprovedProjects);
    // this.dataSource.data = this.unapprovedProjects;
    // console.log("dataSource:", this.dataSource.data);
  }

  ngAfterViewInit(): void{
    this.dataSource.sort = this.sort;
  }

}
