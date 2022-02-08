import { Component, OnInit } from '@angular/core';
import { ExcelReaderService } from '../services/excel-reader.service';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-signature-list',
  templateUrl: './signature-list.component.html',
  styleUrls: ['./signature-list.component.scss']
})
export class SignatureListComponent implements OnInit {

  employeesArray:Employee[] ;

  constructor(private erService:ExcelReaderService){}

  ngOnInit(){
     this.employeesArray = this.erService.getEmployees();
  }


}
