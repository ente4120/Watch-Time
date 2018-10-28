import { Component, OnInit,Input } from '@angular/core';

import { Employee } from '../employee';
import {EmployeeService} from '../employee.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  employee = new Employee();

  constructor(private employeService: EmployeeService) { }

  ngOnInit() {
    this.employee.firstName="";
    this.employee.lastName="";
    this.employee.login="false";
  }

  addEmployee():void{
    this.employeService.createEmployee(this.employee).subscribe();;
  }
}
