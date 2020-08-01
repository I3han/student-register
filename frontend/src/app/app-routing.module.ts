import { SecondTableComponent } from './second-table/second-table.component';
import { FirstTableComponent } from './first-table/first-table.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '' , component: FirstTableComponent},
  { path: 'tbl2' , component: SecondTableComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
