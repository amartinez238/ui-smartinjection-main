import { Component, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import {EventEmitter} from '@angular/core';
import { DefaultService } from 'src/app/core/services/default.service';

@Component({
  selector: 'app-reg-approve-form',
  templateUrl: './reg-approve-form.component.html',
  styleUrls: ['./reg-approve-form.component.scss']
})
export class RegApproveFormComponent implements OnInit {

  regForm!: FormGroup;
  apisArray:any[]=[];
  updatesArray:any[]=[];
  permitsArray:any[]=[];
  permitExpArray:any[]=[];

  @Output() regPass = new EventEmitter();

  constructor(private fb: FormBuilder, private defaultService: DefaultService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm():void {
    this.regForm = this.fb.group ({
      apis: '',
      updates: '',
      permits: '',
      permitExp: ''
    });
  }

  // get regArray(): FormArray {
  //   return this.regForm.get('apis, updates, permits, permitExp') as FormArray;
  // }

  submitForm():void {
    console.log("you've submitted ur form!");
    console.log("regForm: ", this.regForm);
    console.log("example pull api:", this.regForm.value.apis);

    console.log("apisArray: ", this.apisArray);
    console.log("updatesArray: ", this.updatesArray);
    console.log("permitsArray: ", this.permitsArray);
    console.log("permitsExpArray: ", this.permitExpArray);

    this.regPass.emit(this.regForm);

  }
}
