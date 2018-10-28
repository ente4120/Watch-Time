import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {Employee} from './employee';
import { Observable,of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class EmployeeService {
  constructor(private http: HttpClient) {}

  employees: Employee[];
  //employee: Employee;

  // URL to web api
  private employeesUrl = 'http://localhost:3000/employees';  
  private employeeUrl = 'http://localhost:3000/employee/';
 


  getEmployees(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.employeesUrl).pipe()
  }

  getEmployee(id: number): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.employeeUrl+id).pipe()
  }

  updateEmployee (employee: Employee): Observable<any> {
    var address = this.employeeUrl+employee.id+'/'+employee.firstName+'/'+employee.lastName+'/'+employee.login;
    console.log(address);
    return this.http.put(address, employee, httpOptions).pipe()
  }

  createEmployee (employee: Employee): Observable<any> {
    var address = this.employeeUrl+employee.id+'/'+employee.firstName+'/'+employee.lastName+'/'+employee.login;
    console.log(address);
    return this.http.post(address, employee, httpOptions).pipe()
  }

  deleteEmployee (employee: string): Observable<any> {
    var address = this.employeeUrl+'/'+employee;
    console.log(address);
    return this.http.delete(address).pipe()
  }
}