import { Component, OnInit } from '@angular/core';
import { employees } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-emp-viewform',
  templateUrl: './emp-viewform.component.html',
  styleUrls: ['./emp-viewform.component.css']
})
export class EmpViewformComponent implements OnInit {
employee:employees[]=[];
  constructor(private emp:EmployeeService) { }

  deleteemp(id:any){
  this.emp.employees.splice(id,1)
  this.employee = this.emp.getemployee();
  alert("Would you want to delete this data")
  }
  ngOnInit(): void {
    this.employee=this.emp.viewemployee();
  }
 
}
