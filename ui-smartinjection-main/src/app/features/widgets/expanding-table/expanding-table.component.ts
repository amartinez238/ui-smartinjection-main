import { Component, Input, OnChanges, OnInit, Output } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { MatTableDataSource } from '@angular/material/table';
import { FormGroup } from '@angular/forms';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'expanding-table',
  template: `
    <table
      mat-table
      [dataSource]="dataSource"
      multiTemplateDataRows
      class="mat-elevation-z8"
    >
      <!-- <ng-container matColumnDef="{{ column }}" *ngFor="let column of columnsToDisplay">
        <th mat-header-cell *matHeaderCellDef>{{ column }}</th>
        <td mat-cell *matCellDef="let element">{{ element[column] }}</td>
      </ng-container> -->

      <ng-container matColumnDef="wellName">
        <th mat-header-cell *matHeaderCellDef>Well Name </th>
        <td mat-cell *matCellDef="let element"> {{ element.state.data.wellName }}</td>
      </ng-container>
      <ng-container matColumnDef="lease">
        <th mat-header-cell *matHeaderCellDef> Lease </th>
        <td mat-cell *matCellDef="let element"> {{ element.state.data.lease }}</td>
      </ng-container>
      <ng-container matColumnDef="locationType">
        <th mat-header-cell *matHeaderCellDef> Location Type </th>
        <td mat-cell *matCellDef="let element"> {{ element.state.data.locationType }}</td>
      </ng-container>
      <ng-container matColumnDef="location">
        <th mat-header-cell *matHeaderCellDef>Location</th>
        <td mat-cell *matCellDef="let element"> {{ element.state.data.location }}</td>
      </ng-container>

      <!-- Expanded Content Column - The detail row is made up of this one column that spans across all columns -->
      <ng-container matColumnDef="expandedDetail">
        <td
          mat-cell
          *matCellDef="let element"
          [attr.colspan]="columnsToDisplay.length"
        >
          <div
            class="example-element-detail"
            [@detailExpand]="
              element == expandedElement ? 'expanded' : 'collapsed'
            "
          >
              <div class="example-element-diagram">
                <!-- <div class="example-element-position">{{ element.state.data.wellName }}</div> -->
                <!-- <div class="example-element-symbol">{{ element.symbol }}</div> -->
                <div *ngIf="wellTable">
                  <div class="example-element-name">
                    <strong>Well Name:</strong>
                    {{ element.state.data.wellName }}
                  </div>
                  <div class="example-element-weight">
                   <strong>Lease:</strong>
                    {{ element.state.data.lease }}
                  </div>
                  <div class="example-element-weight">
                    <strong>Location Type:</strong>
                    {{ element.state.data.locationType }}
                  </div>
                  <div class="example-element-weight">
                    <strong>Location:</strong>
                    {{ element.state.data.location }}
                  </div>
                  
                  <br>
                  
                  <div class="example-element-weight">
                    <strong>API:</strong>
                    {{ element.state.data.API }}
                  </div>
                  <div class="example-element-weight">
                    <strong>Permit:</strong>
                    {{ element.state.data.permit }}
                  </div>
                  <div class="example-element-weight">
                    <strong>Permit Expiration:</strong>
                    {{ element.state.data.permitExpiration }}
                  </div>
                </div>
                <div *ngIf="regTable">
                  <app-reg-approve-form (regPass)="getRegData($event)"></app-reg-approve-form>
                </div>
              </div>
            </div>
        </td>
      </ng-container>

      <tr mat-header-row *matHeaderRowDef="columnsToDisplay"></tr>
      <tr
        mat-row
        *matRowDef="let element; columns: columnsToDisplay"
        class="example-element-row"
        [class.example-expanded-row]="expandedElement === element"
        (click)="expandedElement = expandedElement === element ? null : element"
      ></tr>
      <tr
        mat-row
        *matRowDef="let row; columns: ['expandedDetail']"
        class="example-detail-row"
      ></tr>
    </table>
    <br>
    <div *ngIf="regTable" style=' display: flex; justify-content: space-between;'>
      <div></div>
      <button mat-stroked-button (click)="saveAll()">Save All</button>
      <div></div>
    </div>
  `,
  styles: [
    `
    table {
  width: 100%;
}

tr.example-detail-row {
  height: 0;
}

tr.example-element-row:not(.example-expanded-row):hover {
  background: whitesmoke;
}

tr.example-element-row:not(.example-expanded-row):active {
  background: #efefef;
}

.example-element-row td {
  border-bottom-width: 0;
}

.example-element-detail {
  overflow: auto;
  display: flex;
}

.example-element-diagram {
  min-width: 80px;
  /* border: 2px solid black; */
  padding: 8px;
  font-weight: lighter;
  margin: 8px 0;
  height: 104px;
  width: 100%;
}

.example-element-symbol {
  font-weight: bold;
  font-size: 40px;
  line-height: normal;
}

.example-element-description {
  padding: 16px;
}

.example-element-description-attribution {
  opacity: 0.5;
}s`,
  ],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})

/* ************************************************************** */
/* ************************************************************** */
/* --------------------- C L A S S INFO ------------------------- */
/* ************************************************************** */
/* ************************************************************** */

export class ExpandingTableComponent implements OnInit, OnChanges {
  dataSource = new MatTableDataSource([] as any[]);
  columnsToDisplay!: string[];
  expandedElement!: PeriodicElement | null;

  regData!: any[];
  apisArray: any[] = [];
  updatesArray: any[] = [];
  permitsArray: any[] = [];
  permitExpArray: any[] = [];
  

  @Input() data!: any[];

  @Input() col!: any[];

  @Input() wellTable!: boolean;

  @Input() regTable!: boolean;

  @Input() passDataNow: boolean = false;

  @Output() regPassedData = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.columnsToDisplay = this.col;
  }

  ngOnChanges(): void {
    this.dataSource.data = this.data;
  }

  getRegData(regData: FormGroup): void {
    console.log("passed data", regData);
    console.log("APIs ", regData.value.apis);

    this.apisArray.push(regData.value.apis);
    this.updatesArray.push(regData.value.updates);
    this.permitsArray.push(regData.value.permits);
    this.permitExpArray.push(regData.value.permitExp);
    console.log("in expanding table", this.apisArray, this.updatesArray, this.permitsArray, this.permitExpArray);
  }

  saveAll(): void {
    console.log("saveAll in Expanding Well");
    let regFormData = new FormData;

    regFormData.append('APIs', this.apisArray.toString());
    regFormData.append('updates', this.updatesArray.toString());
    regFormData.append('permits', this.permitsArray.toString());
    regFormData.append('permitExpirations', this.permitExpArray.toString());

    this.regPassedData.emit(regFormData);
  }

  passData(): void {
    if (this.passDataNow) {
      // emit event??
    }
  }
}


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  description: string;
}