import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule }     from './app-routing.module';
import { AppComponent }         from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { EditingComponent } from './editing/editing.component';
import { EmployeeComponent } from './employee/employee.component';
import { FormComponent } from './form/form.component';
import { EmployeeService } from './employee.service';
import { HttpClientModule } from '@angular/common/http';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    EmployeesComponent,
    EditingComponent,
    EmployeeComponent,
    FormComponent,
    EditEmployeeComponent
  ],

  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
