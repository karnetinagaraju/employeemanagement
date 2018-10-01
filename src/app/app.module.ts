import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { HttpservComponent } from './httpserv/httpserv.component';
import {HttpService} from './httpService.services';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { ListEmployeeComponent } from './employee/list-employee/list-employee.component';
import { EmpHeaderComponent } from './emp-header/emp-header.component';
import { EmpFooterComponent } from './emp-footer/emp-footer.component';
import { EmployeeService } from './shared/employee.services';
import { EditEmployeeComponent } from './employee/edit-employee/edit-employee.component';
import { DeleteEmployeeComponent } from './employee/delete-employee/delete-employee.component';
import { LogoutServices } from './shared/logout.services';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'employee/createEmploye', component: CreateEmployeeComponent },
  { path: 'employee/listEmployee', component: ListEmployeeComponent },
  { path: 'employee/editEmployee/:id', component: EditEmployeeComponent },
  { path: 'employee/deleteEmployee/:id', component: DeleteEmployeeComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeeComponent,
    HttpservComponent,
    RegisterComponent,
    LoginComponent,
    CreateEmployeeComponent,
    ListEmployeeComponent,
    EmpHeaderComponent,
    EmpFooterComponent,
    EditEmployeeComponent,
    DeleteEmployeeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [HttpService, EmployeeService, LogoutServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
