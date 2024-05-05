import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [

 // {path:"show-all-employees",component: EmployeeListComponent},
  //{path:"add-employee", component: AddEmployeeComponent},
 // {path:'', redirectTo: "home", pathMatch:"full"},
//  {path:'updating-by-id/:id',component:UpdateEmployeeComponent},
  //{path:'details-of-employee/:id',component:ShowDetailsComponent},
  //{path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
