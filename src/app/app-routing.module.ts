import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalyticsComponent } from './analytics/analytics.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { PoliciesComponent } from './policies/policies.component';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "home" },
  { path: "home", component: HomeComponent, children: [
    { path: "policies", component: PoliciesComponent },
    { path: "analytics", component: AnalyticsComponent }
  ]},
  { path: "**", component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
