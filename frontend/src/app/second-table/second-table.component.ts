import { FormControllService } from './../form-controll.service';
import { Grade } from './../models/grade.model';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-second-table',
  templateUrl: './second-table.component.html',
  styleUrls: ['./second-table.component.css']
})
export class SecondTableComponent implements OnInit {

  grades: Grade[] = this.formControllService.maxGrades;

  constructor(private formControllService: FormControllService, private http: HttpClient) {
    this.grades = this.formControllService.maxGrades;
  }

  ngOnInit(): void {

    this.http.get<{ status: string, msg: string, data: Grade[] }>('http://localhost:3000/marks/max').subscribe((postData) => {
      this.grades = postData['data'];
    });

    this.formControllService.updatedMaxgrade.subscribe((form: Grade) => {
      this.grades.push(form);
    });
  }


}
