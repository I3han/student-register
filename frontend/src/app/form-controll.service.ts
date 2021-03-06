import { Grade } from './models/grade.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormControllService {

  grades: Grade[];
  maxGrades: Grade[];

  updatedgrade: Subject<Grade> = new Subject<Grade>();
  updatedMaxgrade: Subject<Grade> = new Subject<Grade>();

  constructor(private http: HttpClient) { }

  uploadDetails(form: Grade){
    this.http.post<{status: string, msg: string}>('http://localhost:3000/marks', form).subscribe(
      (responseData) => {
        console.log(responseData['msg']);
        this.updatedgrade.next(form);

        if (form.totMark > 250){
          this.updatedMaxgrade.next(form);
        }

      });
  }


}
