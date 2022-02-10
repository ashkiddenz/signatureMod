import { Component, Input } from '@angular/core';
import { MatSnackBar , MatSnackBarConfig} from '@angular/material/snack-bar';
import { ClipboardService } from 'ngx-clipboard';
import { Employee } from 'src/app/model/employee';
import { ExcelReaderService } from 'src/app/services/excel-reader.service';

@Component({
  selector: 'app-signature',
  templateUrl: './signature.component.html',
  styleUrls: ['./signature.component.scss']
})
export class SignatureComponent  {

  @Input() employee:Employee = null ;
  @Input() index:number;


  constructor(private cipboardService:ClipboardService,private snackbar:MatSnackBar,private erService:ExcelReaderService) { }

  signatureClicked () {
     console.table(this.employee);
     const html = this.erService.createHtml(this.employee);
     console.warn("HTML CODE FOR",this.getFirstName(this.employee));

     let config                = new MatSnackBarConfig();
     config.verticalPosition   = 'top';
     config.horizontalPosition = 'center';
     config.panelClass         = 'text-align-center'

    this.snackbar.open(`HTML CODE FOR ${this.getFirstName(this.employee)} COPIED`,'close',config)._dismissAfter(2000);
    this.cipboardService.copy(html);
  }

  getFirstName(employee:Employee) {
     return employee.Name.toUpperCase().split(" ")[0];
  }

}
