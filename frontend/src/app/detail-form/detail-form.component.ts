import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { FormControllService } from '../form-controll.service';

@Component({
  selector: 'app-detail-form',
  templateUrl: './detail-form.component.html',
  styleUrls: ['./detail-form.component.css']
})
export class DetailFormComponent implements OnInit {

  form: FormGroup;
  formIsValid = false;
  recordSent = false;
  uuidValue: string;

  constructor(private formControllService: FormControllService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      studentName: new FormControl('', Validators.required),
      mathsMark: new FormControl('', [Validators.required, Validators.min(0), Validators.max(100)]),
      engMark: new FormControl('',  [Validators.required, Validators.min(0), Validators.max(100)]),
      sciMark: new FormControl('', [Validators.required, Validators.min(0), Validators.max(100)]),
      totMark: new FormControl('')

    });
    this.formControllService.downloadDetails();
  }

  OnSubmit(){
    if ( this.form.valid){

      this.formIsValid = false;
      this.recordSent = true;
      const totalMark = parseInt(this.form.value.mathsMark, 10) +
      parseInt(this.form.value.engMark, 10) +
      parseInt(this.form.value.sciMark, 10);

      this.form.patchValue({totMark: totalMark});

      const formData = {
        studentName: this.form.value.studentName,
        mathsMark: this.form.value.mathsMark,
        engMark: this.form.value.engMark,
        sciMark: this.form.value.sciMark,
        totMark: this.form.value.totMark
      };

      this.formControllService.uploadDetails(formData);
      this.form.reset();

      this.formControllService.downloadDetails();

    }else{
      this.formIsValid = true;
      this.recordSent = false;
      return;
    }

  }

  generateUUID(){
    this.uuidValue=UUID.UUID();
    return this.uuidValue;
  }
}
