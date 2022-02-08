import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar , MatSnackBarConfig} from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ClipboardService } from 'ngx-clipboard';
import { Employee } from 'src/app/model/employee';

@Component({
  selector: 'app-signature',
  templateUrl: './signature.component.html',
  styleUrls: ['./signature.component.scss']
})
export class SignatureComponent implements OnInit {

  @Input() employee:Employee = null ;
  @Input() index:number;


  constructor(private router:Router,private route:ActivatedRoute,private cipboardService:ClipboardService,private snackbar:MatSnackBar) { }

  ngOnInit(): void {

  }


  signatureClicked() {
    let fullName = this.employee.Name.toUpperCase();
    let firstName = fullName.split(" ")[0];
    let remainingName = fullName.split(" ")[2] ? fullName.split(" ")[3]?
    `${fullName.split(" ")[1]+" "+fullName.split(" ")[2]+" "+fullName.split(" ")[3]}`:`${fullName.split(" ")[1]+" "+fullName.split(" ")[2]}`
    :`${fullName.split(" ")[1]}` ;
    let designation = this.employee.Designation;
    let phone = +this.employee.Phone;
    let email = this.employee.Email;
    let png = this.employee['Sign Pic'] || null;

    console.table(this.employee);

     const html = this.createHtml(png,firstName,remainingName,designation,phone,email);
     console.warn("HTML CODE FOR",firstName)

     let config = new MatSnackBarConfig();
     config.verticalPosition = 'top';
     config.horizontalPosition='center';
     config.panelClass = 'text-align-center'

    this.snackbar.open(`HTML CODE FOR ${firstName} COPIED`,'close',config)._dismissAfter(2000);
    this.cipboardService.copy(html);

  }


  createHtml(png:string,firstName:string,remainingName:string,designation:string,phone:number,email:string){
    return `
    <table cellspacing="0" cellpadding="0" style="height: fit-content;width:fit-content;" >

    <tr>
        <td rowspan="1" colspan="1" >
            <div style="display: flex;align-items: center;height: 100%;">
                <!-- <img  src="22.png" height="160"  alt="profile"> -->
                <img  src="https://dev-ui.cm20.in/tasks/email_icons/${png}" height="160" width="140"  alt="profile">
                </div>
        </td>

        <td rowspan="1" colspan="1">
            <div style="width: 20px;">
            </div>
        </td>
        <td rowspan="1" colspan="2">
         <div style="height: 100%;vertical-align: baseline;white-space: nowrap;">
            <div style="width: 100%;height: 28%;">
                <p style="margin:0;font-family: sans-serif;font-size: 16px;">
                  <b style="font-weight: 750;">${firstName}</b><span style="font-weight: 500;">${remainingName}</span></p>
                <p style="margin:0;color:#3FABBD;font-weight: bold;font-size: 12px;font-family: sans-serif;"><i>${designation}</i></p>
              </div>
              <div style="width: 100%;height: 18%;">
                <img style="height: 15px;vertical-align: middle;" src="https://dev-ui.cm20.in/tasks/email_icons/phone.png" height="15" alt="mobile">
                <span style="font-family: sans-serif;font-size:12px;margin-left: 3px;">+${phone}</span>
              </div>

              <div style="width: 100%;height: 18%;">
                <img style="height: 15px;vertical-align: middle;" src="https://dev-ui.cm20.in/tasks/email_icons/email.png" height="15" alt="email" >
                <span style="font-family:sans-serif;font-size:12px;margin-left:10px;">${email}</span>
              </div>

              <div style="width: 100%;height: 18%;">
                <img style="height: 15px;vertical-align: middle;" src="https://dev-ui.cm20.in/tasks/email_icons/website.png" height="15"  alt="website">
                <span style="font-family: sans-serif;font-size:12px;margin-left: 12px;">www.CdMx.in</span>
              </div>

              <div style="width: 100%;height: 18%;">
                <img style="height: 15px;vertical-align: middle;" src="https://dev-ui.cm20.in/tasks/email_icons/location.png" height="15" alt="location">
                <span style="font-family:sans-serif;font-size:12px;margin-left:12px">Goa - India</span>
              </div>

         </div>

        <td rowspan="1" colspan="1" style="width:40px;">
            <div style="height: 100%;width: 100%;">
                <div style="background-color:#4cc9d6;width: 2px;height: 100%;margin-left: auto;margin-right: auto;"></div>
            </div>
        </td>

        <td rowspan="1" colspan="1" style="height: 160px;vertical-align: middle;">
            <div  style="height:fit-content">
                <div style="width: 100%;text-align: center;">
                       <div style="display:flex;height:fit-content;margin-bottom: 20px;">
                        <img src="https://dev-ui.cm20.in/tasks/email_icons/LOGO.png" height="90px" alt="company logo">
                      </div>
                  </div>
                  <div style="display:flex;width:100%;">

                        <div style="width:33.33%;text-align:right;">
                            <a href="https://www.instagram.com/codemax.it/?hl=en" target="_blank">
                              <img src="https://dev-ui.cm20.in/tasks/email_icons/Insta.png" height="20"alt="Instagram!">
                            </a>
                        </div>

                        <div style="width:33.33%;text-align:center">
                            <a href="https://www.facebook.com/cdmx.in/" target="_blank">
                              <img src="https://dev-ui.cm20.in/tasks/email_icons/facebook.png" height="20"  alt="Facebook.">

                            </a>
                        </div>

                        <div style="width:33.33%;text-align:left">

                            <a href="https://www.linkedin.com/company/codemax-pvt-ltd/mycompany/" target="_blank">
                              <img src="https://dev-ui.cm20.in/tasks/email_icons/Linkedin.png" height="20"  alt="LinkedIn!">
                            </a>
                         </div>
                  </div>
             </div>
        </td>
        <td rowspan="5" colspan="1">
            <div style="width: 10px;"></div>
        </td>
    </tr>
    <tr>
        <td style="height:10px" colspan="7"></td>
      </tr>

    <tr>
    <td style="height:15px;background-color:#4cc9d6" colspan="7" ></td>
    </tr>

  </table>
    `
  }


}
