import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpAddformComponent } from './emp-addform/emp-addform.component';
import { EmpUpdatedataComponent } from './emp-updatedata/emp-updatedata.component';
import { EmpViewdataComponent } from './emp-viewdata/emp-viewdata.component';
import { EmpViewformComponent } from './emp-viewform/emp-viewform.component';

const routes: Routes = [{path:'',component:EmpAddformComponent},{path:'viewempform',component:EmpViewformComponent},
{path:'viewempdata/:id',component:EmpViewdataComponent},{path:'empupdatedata/:id',component:EmpUpdatedataComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
