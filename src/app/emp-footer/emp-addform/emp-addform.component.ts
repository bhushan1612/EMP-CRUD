import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { employees } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-emp-addform',
  templateUrl: './emp-addform.component.html',
  styleUrls: ['./emp-addform.component.css']
})
export class EmpAddformComponent implements OnInit {

  constructor(private emp:EmployeeService , private router:Router) { }
   
  public fullname="";
  public email="";
  public mobileno="";
  public dob="";
  public job="";
  ngOnInit(): void {
  }
Addemp(){
let employee:employees={fullname:this.fullname,email:this.email,mobileno:this.mobileno,dob:this.dob,job:this.job}
this.emp.addemployee(employee);
this.router.navigateByUrl('/viewempform')
}
}
