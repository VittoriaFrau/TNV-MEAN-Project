import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './routes/dashboard/dashboard.component'
import { AddComponent } from './routes/add/add.component';
import { DetailsComponent } from './routes/details/details.component';
import { EditComponent } from './routes/edit/edit.component';
import { FilterComponent } from './routes/filter/filter.component';
import { WelcomeComponent } from './routes/welcome/welcome.component';
import { FilterByTwoComponent } from './routes/filter-by-two/filter-by-two.component';
import { SortComponent } from './routes/sort/sort.component';


const routes: Routes = [
  { path: "", redirectTo : '/welcome', pathMatch: 'full' },
  {path: "welcome", component: WelcomeComponent},
  { path: "dashboard", component : DashboardComponent },
  { path: "add", component : AddComponent },
  { path: "details/:id", component : DetailsComponent },
  { path: "edit/:id", component: EditComponent },
  { path: "filter", component: FilterComponent},
  { path: "filterByTwo", component: FilterByTwoComponent},
  { path: "sort", component: SortComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
