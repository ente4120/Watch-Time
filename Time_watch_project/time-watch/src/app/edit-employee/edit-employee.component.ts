import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Employee } from '../employee';
import {EmployeeService} from '../employee.service'; 

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  selectedEmployee: Employee;

  constructor(
    private route: ActivatedRoute,
    private employeService: EmployeeService) { }

  ngOnInit() {
    this.getEmployee();
  }

  getEmployee(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.employeService.getEmployee(id).subscribe(
      employee => this.selectedEmployee = employee[0]);
  }

  updateEmployee():void{
    this.employeService.updateEmployee(this.selectedEmployee).subscribe();;
  }
}
