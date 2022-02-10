import { Component, OnInit } from '@angular/core';
import { ExcelReaderService } from '../services/excel-reader.service';
import { Employee } from '../model/employee';
import * as saveAs from 'file-saver';

@Component({
  selector: 'app-signature-list',
  templateUrl: './signature-list.component.html',
  styleUrls: ['./signature-list.component.scss']
})
export class SignatureListComponent implements OnInit {

  employeesArray: Employee[];
  constructor(private erService: ExcelReaderService) { }

  ngOnInit() {
    if (this.erService.employeeArray.length === 0 ) {
      this.erService.setEmployees();
     }
     this.employeesArray = this.erService.getEmployees();
  }

  generateForAll() {
    let html = ``;
    this.employeesArray.forEach(employee => {
      html += `\n<--------------------------------------------${employee.Name}---------------------------------->\n` + this.erService.createHtml(employee)
        + `\n<-------------------------------------------END---------------------------------------------------->\n`
    })

    let file = new Blob([html], { type: 'text/csv;charset=utf-8' });
    saveAs(file,new Date()+'html.txt');
  }

}
