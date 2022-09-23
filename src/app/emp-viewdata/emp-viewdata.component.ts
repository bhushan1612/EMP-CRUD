import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { employees } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-emp-viewdata',
  templateUrl: './emp-viewdata.component.html',
  styleUrls: ['./emp-viewdata.component.css']
})
export class EmpViewdataComponent implements OnInit {
  employeedata:any={};
  constructor(private emp:EmployeeService,private router:ActivatedRoute) { }

  ngOnInit(): void {
    let employeeid:any = this.router.snapshot.paramMap.get('id');
    this.employeedata = this.emp.getemployeedata(employeeid);
  }
 
}
