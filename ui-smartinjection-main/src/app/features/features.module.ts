import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WellOperatorComponent } from './pages/well-operator/well-operator.component';
import { RegulatorComponent } from './pages/regulator/regulator.component';
import { WoDashboardComponent } from './pages/well-operator/wo-dashboard/wo-dashboard.component';
import { WoNewProjectComponent } from './pages/well-operator/wo-new-project/wo-new-project.component';
import { WoUnapprovedProjectComponent } from './pages/well-operator/wo-unapproved-project/wo-unapproved-project.component';
import { WoPendingProjectComponent } from './pages/well-operator/wo-pending-project/wo-pending-project.component';
import { WoCreateWellComponent } from './pages/well-operator/wo-create-well/wo-create-well.component';
import { WoMyWellsComponent } from './pages/well-operator/wo-my-wells/wo-my-wells.component';
import { RegDashboardComponent } from './pages/regulator/reg-dashboard/reg-dashboard.component';
import { RegUicPendingProjectsComponent } from './pages/regulator/reg-uic-pending-projects/reg-uic-pending-projects.component';
import { RegUicProjectReviewComponent } from './pages/regulator/reg-uic-project-review/reg-uic-project-review.component';
import { SelectionTableComponent } from './widgets/selection-table/selection-table.component';
import { ExpandingTableComponent } from './widgets/expanding-table/expanding-table.component';
import { SelectionListComponent } from './widgets/selection-list/selection-list.component';
import { OverviewTableComponent } from './widgets/overview-table/overview-table.component';
import { FeaturesComponent } from './features.component';
import { AppRoutingModule } from '../app-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { SharedModule } from '../shared/shared.module';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatStepperModule } from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPseudoCheckboxModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { OverviewListComponent } from './widgets/overview-list/overview-list.component';
import { InfoListComponent } from './widgets/info-list/info-list.component';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { RegApproveFormComponent } from './pages/regulator/reg-approve-form/reg-approve-form.component';


@NgModule({
  declarations: [
    WellOperatorComponent,
    RegulatorComponent,
    WoDashboardComponent,
    WoNewProjectComponent,
    WoUnapprovedProjectComponent,
    WoPendingProjectComponent,
    WoCreateWellComponent,
    WoMyWellsComponent,
    RegDashboardComponent,
    RegUicPendingProjectsComponent,
    RegUicProjectReviewComponent,
    SelectionTableComponent,
    ExpandingTableComponent,
    SelectionListComponent,
    OverviewTableComponent,
    FeaturesComponent,
    OverviewListComponent,
    InfoListComponent,
    RegApproveFormComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
    MatCardModule,
    MatIconModule,
    FlexLayoutModule,
    MatButtonModule,
    MatFormFieldModule,
    MatTableModule,
    MatDividerModule,
    MatSidenavModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    CdkStepperModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatPseudoCheckboxModule,
    MatCheckboxModule,
    MatInputModule,
    MatListModule,
    HttpClientModule,
    MaterialFileInputModule,
    FlexLayoutModule
  ],
  exports: [
    SelectionTableComponent,
    ExpandingTableComponent,
    SelectionListComponent,
    OverviewTableComponent,
    FeaturesComponent,
    OverviewListComponent
  ],
  bootstrap: [FeaturesComponent],
})
export class FeaturesModule {}
