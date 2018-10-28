import { Component, OnInit } from '@angular/core';


import { Employee } from '../employee';
import {EmployeeService} from '../employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees: Employee[];

  constructor(private employeService: EmployeeService) { }

  ngOnInit() {
    this.getEmployees();
  }
 
  getEmployees():void{
    this.employeService.getEmployees()
    .subscribe(employees => this.employees = employees)
  }

  
  sendMessage(name:string):void{
    this.employeService.deleteEmployee(name);
    alert("Deleted");
  }
}
