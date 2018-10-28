import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

import { Employee } from '../employee';
import {EmployeeService} from '../employee.service'; 
import {Watch} from '../watch';
import {WatchService} from '../watch.service'

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  selectedEmployee: Employee;
  status:boolean;
  watches: Watch[];
  watch = new Watch();
  
  constructor(
    private route: ActivatedRoute,
    private employeService: EmployeeService,
    private watchService: WatchService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getEmployee();
    this.getWatch();
  }

  getEmployee(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.employeService.getEmployee(id).subscribe(
      employee => this.selectedEmployee = employee[0]);
  }
  getWatch(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.watchService.getWatch(id).subscribe(
      watches => this.watches = watches.reverse());
      
  }

  activeWatch():void{
    this.status=!this.selectedEmployee.login;
    if(this.selectedEmployee.login=='false') this.selectedEmployee.login='true';
    else this.selectedEmployee.login='false';
    this.employeService.updateEmployee(this.selectedEmployee).subscribe();
    this.updateWatch();
  }

  updateWatch():void{
    const id =this.route.snapshot.paramMap.get('id');
    this.watch.id = parseInt(id);
    console.log(this.watches.length-1);
    if(this.watches.length==0 && this.selectedEmployee.login=='true') this.watchService.createWatch(this.watch).subscribe();
    else if(this.watch.end!=this.watches[0].end &&this.selectedEmployee.login=='true') this.watchService.createWatch(this.watch).subscribe();
    else if(this.selectedEmployee.login=='false') this.watchService.updateWatch(this.watches[0]).subscribe();
  }
}
