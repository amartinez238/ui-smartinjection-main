import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// import {Observable, Subject} from 'rxjs';
// import {map} from 'rxjs/operators';
// import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DefaultService {
  private headers = new HttpHeaders().set('Accept', 'text/*');

  private getWellsURL = 'http://localhost:10050/wells';
  private project = 'http://localhost:10050/projects';
  private createProjectURL = 'http://localhost:10050/createProjectFlow';
  private addRemoveWellURL = 'http://localhost:10050/addRemoveWellFlow';
  private createWellURL = 'http://localhost:10050/create';
  private submissionURL = 'http://localhost:10050/submission';
  
  private denyURL = 'http://localhost:10051/deny'; 
  private approveURL = 'http://localhost:10051/approve'; 

  constructor(private http: HttpClient) { }

  // ******** GET METHODS **********

  getProjects() {
    console.log('in getProjects');
    return this.http.get(this.project);
  }

  getWells() {
    return this.http.get(this.getWellsURL);
}

  // ******** POST METHODS **********
  createProject(formData: FormData) {
    console.log('in createProject: ');

    return this.http.post(this.createProjectURL, formData, {headers: this.headers, responseType: 'text'});
  }

  addRemoveWell(formData: FormData) {
    console.log('in addRemoveWell: ');

    return this.http.post(this.addRemoveWellURL, formData, {headers: this.headers, responseType: 'text'});
  }

  createWell(formData: FormData) {
    console.log("In create well, before the post call");
    return this.http.post(this.createWellURL, formData, {headers: this.headers, responseType: 'text'});
  }

  submitToCalGem(formData: FormData) {
    console.log("In submitToCalGem");

    return this.http.post(this.submissionURL, formData, {headers: this.headers, responseType: 'text'});
  }

  deny(formData: FormData) {
    console.log("In deny service");

    return this.http.post(this.denyURL, formData, {headers: this.headers, responseType: 'text'});
  }

  approve(formData: FormData) {
    console.log("In approve service");

    return this.http.post(this.approveURL, formData, {headers: this.headers, responseType: 'text'});
  }
}
