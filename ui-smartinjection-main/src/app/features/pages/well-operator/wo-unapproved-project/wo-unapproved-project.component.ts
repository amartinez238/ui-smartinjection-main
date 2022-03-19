import { Component, OnChanges, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DefaultService } from 'src/app/core/services/default.service';


@Component({
  selector: 'app-wo-unapproved-project',
  templateUrl: './wo-unapproved-project.component.html',
  styleUrls: ['./wo-unapproved-project.component.scss']
})
export class WoUnapprovedProjectComponent implements OnInit, OnChanges {

  isLinear = false;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  thirdFormGroup!: FormGroup;

  projectId!: any;

  sampleData!: any;
  projectData!: any;
  wellData!: any;

  wellArray: any[] = [];

  wellCol = [
    'wellName',
    'lease',
    'locationType',
    'location',
  ];
  projectCol = [
    'projectName',
    'status',
    'UICProjectNumber'
  ];

  constructor(
    private _formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private defaultService: DefaultService) { }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
      projectName: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    
    // ** grabbing parameters from URL and setting them to a variable
    const routeParams = this.route.snapshot.paramMap;
    const projectIdFromRoute = routeParams.get('projectId');

    if (projectIdFromRoute){
      this.searchProjectInfo(projectIdFromRoute);
      this.loadWellList();
    }
  }

  ngOnChanges(value: any): void {
    console.log("wellArray in onChanges", this.wellArray);
    this.wellData = value;

  }
  
  saveDraftBtn() {}
  submitBtn() {}

  // ** This function will find the project info from the
  // ** param in the url

  // ** Will Set projectData to the projectData needed to populate
  // ** the info in mat-card
  searchProjectInfo(projectIdFromURL: any): void {
    console.log(projectIdFromURL);
    this.projectId = projectIdFromURL; 

    this.defaultService.getProjects().subscribe(value => {
      let projectInfo: any = value;

      console.log("value: ", value);
     
      console.log(Object.keys(value).length);

      // Object.keys() changes the object to an array
      // * avoids an error from angular
      let len = Object.keys(value).length; 

      for (let i=0; i < len; i++) {
        console.log(projectInfo[i].state.data.linearId.id);
        console.log(this.projectId);
        if (projectInfo[i].state.data.linearId.id == this.projectId) {
          console.log("in if statement");
          this.projectData = projectInfo[i];
          console.log("projectData:", this.projectData);
          // console.log("projectData: ", this.projectData.state.data.wellIds);
          this.loadWellList(); //calls function to make a well list from the wellIds in the project
          break;
        }
      }
    })
  }

  loadWellList(): void {
    console.log("loadWellList");
    console.log(this.projectData.state.data.wellIds);

    this.defaultService.getWells().subscribe(value => {
      console.log(value);

      let wellParse: any = value;

      for (let i=0; i < Object.keys(value).length; i++) {
        if(wellParse[i].state.data.projectName == this.projectData.state.data.projectName) {
          console.log(wellParse[i]);
          this.wellArray.push(wellParse[i]);

          console.log("well array: ", this.wellArray);
        }
      }
      this.ngOnChanges(this.wellArray);
    })
  }
}
