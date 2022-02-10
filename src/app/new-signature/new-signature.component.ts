import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder , Validators } from '@angular/forms';
import {  ActivatedRoute, Router } from '@angular/router';
import { ExcelReaderService } from '../services/excel-reader.service';

@Component({
  selector: 'app-new-signature',
  templateUrl: './new-signature.component.html',
  styleUrls: ['./new-signature.component.scss']
})
export class NewSignatureComponent implements OnInit {
  nameCondition : boolean ;
  form : FormGroup;


  constructor(private formbuilder:FormBuilder,private router:Router,private route:ActivatedRoute,private erService:ExcelReaderService){}

  ngOnInit() {
    this.initForm();
  }

  submitForm() {
    if (!this.form.valid){
      return ;
    }
    this.erService.createSignature(this.form.value);
    this.router.navigate(['/signatures'],{relativeTo:this.route})
  }

  initForm(){
    this.form = this.formbuilder.group({
      Name        : ['',[Validators.required]],
      Designation : ['',Validators.required],
      Email       : ['',[Validators.required,Validators.email]],
      Phone       : ['',Validators.required],
      'Sign Pic'  : ['',Validators.required]
    })
  }

}
