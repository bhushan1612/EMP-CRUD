import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { employees } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-emp-updatedata',
  templateUrl: './emp-updatedata.component.html',
  styleUrls: ['./emp-updatedata.component.css']
})
export class EmpUpdatedataComponent implements OnInit {

employeeid:any={};
employee:employees;
  constructor(private emp:EmployeeService,private router:ActivatedRoute,private router1:Router) { }

  ngOnInit(): void {
    
    let employeeid:any = this.router.snapshot.paramMap.get('id');
    this.employee = this.emp.getemployeedata(employeeid);
  }
  update(){
   this.emp.updateemp(this.employee,this.employeeid);
   this.router1.navigateByUrl('/viewempform')
  }
}
