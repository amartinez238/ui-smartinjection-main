import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegDashboardComponent } from './features/pages/regulator/reg-dashboard/reg-dashboard.component';
import { RegUicPendingProjectsComponent } from './features/pages/regulator/reg-uic-pending-projects/reg-uic-pending-projects.component';
import { RegUicProjectReviewComponent } from './features/pages/regulator/reg-uic-project-review/reg-uic-project-review.component';
import { RegulatorComponent } from './features/pages/regulator/regulator.component';
import { WellOperatorComponent } from './features/pages/well-operator/well-operator.component';
import { WoCreateWellComponent } from './features/pages/well-operator/wo-create-well/wo-create-well.component';
import { WoDashboardComponent } from './features/pages/well-operator/wo-dashboard/wo-dashboard.component';
import { WoMyWellsComponent } from './features/pages/well-operator/wo-my-wells/wo-my-wells.component';
import { WoNewProjectComponent } from './features/pages/well-operator/wo-new-project/wo-new-project.component';
import { WoPendingProjectComponent } from './features/pages/well-operator/wo-pending-project/wo-pending-project.component';
import { WoUnapprovedProjectComponent } from './features/pages/well-operator/wo-unapproved-project/wo-unapproved-project.component';

const routes: Routes = [
  { path: 'reg', component: RegulatorComponent,
    children: [
      { path: '', component: RegDashboardComponent },
      { path: 'dashboard', component: RegDashboardComponent },
      { path: 'project-review', component: RegUicProjectReviewComponent },
      { path: 'approved-project', component: RegUicPendingProjectsComponent },
      { path: 'project-review/:projectId', component: RegUicProjectReviewComponent }
    ]
  },
  { path: 'wo', component: WellOperatorComponent,
    children: [
      { path: '', component: WoDashboardComponent },
      { path: 'dashboard', component: WoDashboardComponent },
      { path: 'create-well', component: WoCreateWellComponent },
      { path: 'my-wells', component: WoMyWellsComponent },
      { path: 'new-project', component: WoNewProjectComponent },
      { path: 'pending-project', component: WoPendingProjectComponent },
      { path: 'unapproved-project', component: WoUnapprovedProjectComponent },
      { path: 'unapproved-project/:projectId', component: WoUnapprovedProjectComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
