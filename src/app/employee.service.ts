import { Injectable } from '@angular/core';
import { employees } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees:employees[]=[];
  addemployee(emp:employees)
  {
return this.employees.push(emp);
  }
  viewemployee()
  {
return this.employees;
  }
  getemployee(){
    return this.employees;
  }
  getemployeedata(id:any){
    return this.employees[id];
  }
  updateemp(emp:employees,id:number){
    return this.employees[id]=emp;
  }
  constructor() { }
  
}
