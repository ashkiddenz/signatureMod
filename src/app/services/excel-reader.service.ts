import { Injectable } from "@angular/core";
import { Employee } from '../model/employee'
import employees from '../../assets/employees.json'

@Injectable({
  providedIn:'root'
})
export class ExcelReaderService{

   employeeArray: Employee[] = [];

getEmployees () {
  this.employeeArray = employees;
  return this.employeeArray;
}


}
