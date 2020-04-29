import { Injectable } from '@angular/core';
import { Employee } from '../model/employee';

@Injectable()
export class EmployeeService{

 store=[
   new Employee(1,'Srashti',10000,"JAVA"),
   new Employee(2,'Anirush',20000,"Angular"),
   new Employee(5,'Harsh',20000,"Js"),
   
];   
 
 

  fetchAllEmployees(): Employee[]{
      return this.store;
  }


}