import { Component, OnChanges, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DefaultService } from 'src/app/core/services/default.service';

@Component({
  selector: 'app-reg-uic-project-review',
  templateUrl: './reg-uic-project-review.component.html',
  styleUrls: ['./reg-uic-project-review.component.scss']
})
export class RegUicProjectReviewComponent implements OnInit, OnChanges {

  // passData!: boolean;

  pendingShow: boolean = false;

  regFormData!: FormData;

  projectId!: any;
  result!: any;

  wellData!: any;
  projectData!: any;

  wellArray: any[] = [];

  wellCol = [
    'wellName',
    'lease',
    'locationType',
    'location',
  ];

  constructor(
    private defaultService: DefaultService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    // ** grabbing parameters from URL and setting them to a variable
    const routeParams = this.route.snapshot.paramMap;
    const projectIdFromRoute = routeParams.get('projectId');
    this.projectId = projectIdFromRoute;

    console.log("projectID: ", projectIdFromRoute);

    this.loadProjectInfo();

    if (this.projectData.state.data.status == "Pending Approval") {
      this.pendingShow = true;
    }

    // console.log("project info: ", this.projectData);
  }

  ngOnChanges(value: any): void{
    console.log("wellArray in onChanges", this.wellArray);
    this.wellData = value;

    if (this.projectData.state.data.status == "Pending Approval") {
      this.pendingShow = true;
    }
  }

  loadProjectInfo(): void {
    this.defaultService.getProjects().subscribe(value => {
      let projectInfo: any = value;
      let len = Object.keys(value).length;

      for (let i=0; i < len; i++) {
        console.log(projectInfo[i].state.data.linearId.id);
        console.log(this.projectId);
        if (projectInfo[i].state.data.linearId.id == this.projectId) {
          console.log("in if statement");
          this.projectData = projectInfo[i];
          console.log("projectData:", this.projectData);
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

  deny(): void {
    console.log("deny clicked!");
    let formData = new FormData;
    
    console.log(this.projectData.state.data.linearId.externalId);

    formData.append('externalId', this.projectData.state.data.linearId.externalId);

    this.defaultService.deny(formData).subscribe(value => {
      this.result = value;
    });

    console.log(this.result);

  }

  approve(): void {
    console.log("approve clicked!");
    // let formData = new FormData;

    // formData.append('externalId', this.projectData.state.data.linearId.externalId);
    
    // // make sure to use .toString() command on second argument w/ real vals
    // formData.append('APIs', "123456789");
    // formData.append('updates', "0123789456789123");
    // formData.append('permits', "ATM456789");
    // formData.append('permitExpirations', "2020-10-20");

    this.regFormData.append('externalId', this.projectData.state.data.linearId.externalId);

    console.log("externalId", this.regFormData.get('externalId'));
    console.log("APIs", this.regFormData.get("APIs"));
    console.log("updates", this.regFormData.get("updates"));
    console.log("permits", this.regFormData.get("permits"));
    console.log("permitExpirations", this.regFormData.get("permitExpirations"));

    this.defaultService.approve(this.regFormData).subscribe(value => {
      this.result = value;
    });
    
  }
  
  recieveRegData(regData: FormData): void {
    console.log("in recieveRegData");
    console.log("APIs", regData.get("APIs"));
    console.log("updates", regData.get("updates"));
    console.log("permits", regData.get("permits"));
    console.log("permitExpirations", regData.get("permitExpirations"));
    
    this.regFormData = regData;
  }
}
