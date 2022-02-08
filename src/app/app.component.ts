import { Component, OnInit } from '@angular/core';
import { ExcelReaderService } from './services/excel-reader.service';
import { Employee } from './model/employee';
import employees from '../assets/employees.json'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {

}
