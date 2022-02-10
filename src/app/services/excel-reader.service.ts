import { Injectable } from "@angular/core";
import { Employee } from '../model/employee'
import employees from '../../assets/employees.json'
import { BASE_URL } from "../constants";


@Injectable({
  providedIn:'root'
})
export class ExcelReaderService{

URL:string = BASE_URL;
employeeArray: Employee[] = [];

getEmployees () {
  return this.employeeArray;
}

setEmployees() {
  this.employeeArray = employees;
}

createHtml (employee:Employee) {
  let fullName      = employee.Name.toUpperCase();
  let firstName     = fullName.split(" ")[0];
  let remainingName = this.processRemainingName(fullName);
  let designation   = employee.Designation;
  let phone         = +employee.Phone;
  let email         = employee.Email;
  let png           = employee['Sign Pic'] || null;

  return `
  <table cellspacing="0" cellpadding="0" style="height: fit-content;width:fit-content;" >
  <tr>
      <td rowspan="1" colspan="1" >
          <div style="display: flex;align-items: center;height: 100%;">
              <!-- <img  src="22.png" height="160"  alt="profile"> -->
              <img  src="${this.URL}/${png}" height="160" width="140"  alt="profile">
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
              <img style="height: 15px;vertical-align: middle;" src="${this.URL}/phone.png" height="15" alt="mobile">
              <span style="font-family: sans-serif;font-size:12px;margin-left: 3px;">+${phone}</span>
            </div>

            <div style="width: 100%;height: 18%;">
              <img style="height: 15px;vertical-align: middle;" src="${this.URL}/email.png" height="15" alt="email" >
              <span style="font-family:sans-serif;font-size:12px;margin-left:10px;">${email}</span>
            </div>

            <div style="width: 100%;height: 18%;">
              <img style="height: 15px;vertical-align: middle;" src="${this.URL}/website.png" height="15"  alt="website">
              <span style="font-family: sans-serif;font-size:12px;margin-left: 12px;">www.CdMx.in</span>
            </div>

            <div style="width: 100%;height: 18%;">
              <img style="height: 15px;vertical-align: middle;" src="${this.URL}/location.png" height="15" alt="location">
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
                      <img src="${this.URL}/LOGO.png" height="90px" alt="company logo">
                    </div>
                </div>
                <div style="display:flex;width:100%;">

                      <div style="width:33.33%;text-align:right;">
                          <a href="https://www.instagram.com/codemax.it/?hl=en" target="_blank">
                            <img src="${this.URL}/Insta.png" height="20"alt="Instagram!">
                          </a>
                      </div>

                      <div style="width:33.33%;text-align:center">
                          <a href="https://www.facebook.com/cdmx.in/" target="_blank">
                            <img src="${this.URL}/facebook.png" height="20"  alt="Facebook.">

                          </a>
                      </div>

                      <div style="width:33.33%;text-align:left">

                          <a href="https://www.linkedin.com/company/codemax-pvt-ltd/mycompany/" target="_blank">
                            <img src="${this.URL}/Linkedin.png" height="20"  alt="LinkedIn!">
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

createSignature (employee:Employee) {
  this.employeeArray = [employee];
}

processRemainingName(fullName:string) {
   let remainingName;
   return remainingName = fullName.split(" ")[2] ? fullName.split(" ")[3] ?
   `${fullName.split(" ")[1] + " " + fullName.split(" ")[2] + " " + fullName.split(" ")[3]}` : `${fullName.split(" ")[1] + " " + fullName.split(" ")[2]}` : `${fullName.split(" ")[1]}` ;
}

}
