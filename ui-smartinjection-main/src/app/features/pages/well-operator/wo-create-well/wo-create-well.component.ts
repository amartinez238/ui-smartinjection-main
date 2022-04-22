import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormsModule, NgForm } from '@angular/forms';
import { DefaultService } from 'src/app/core/services/default.service';

@Component({
  selector: 'app-wo-create-well',
  templateUrl: './wo-create-well.component.html',
  styleUrls: ['./wo-create-well.component.scss']
})
export class WoCreateWellComponent implements OnInit {

  wellForm!: FormGroup;
  result: any;
  filesToUpload!: File[];

  constructor(private fb: FormBuilder, private defaultService: DefaultService) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.wellForm = this.fb.group ({
      wells: this.fb.array([
        this.newWell()
      ])
    });
  }

  newWell(): FormGroup {
    return this.fb.group({
      wellName: '',
      lease: '',
      wellType: '',
      status: '',
      purpose: '',
      apiID: '',
      opType: '',
      injZone: '',
      depth: '',
      sec: '',
      township: '',
      range: '',
      county: '',
      locationType: '',
      designation: '',
      wellNum: '',
      field: '',
      statusDate: '',
      spudDate: '',
      permit: '',
      pool: '',
      bondNum: '',
      production: '',
      directDrill: '',
      confidential: '',
      expiration: '',
      bm: '',
      district: '',
      shore: '',
      datum: '',
      coernerCall: '',
      description: '',
      casingSize: '',
      weight: '',
      grade: '',
      top: '',
      bottom: '',
      cementDepth: '',
      csg: '',
      testID: '',
      testType: '',
      interval: '',
      schedDate: '',
      actDate: '',
      futureDate: '',
      wellboreNo: '',
      compDate: '',
      botHoleMD: '',
      waterBase: '',
      botHoleTVD: '',
      plugMD: '',
      plugTVD: '',
      bridgePlug: '',
      cementPlug: '',
      surfLatitude: '',
      surfLongitude: '',
      botLatitude: '',
      botLongitude: '',

      location: this.fb.group({
        x: '',
        y: '',
        z: ''
      }),
      attachment: ''
    });
  }

  get wells(): FormArray {
    return this.wellForm.get('wells') as FormArray;
  }

  onSubmit(): void {
    console.log(this.wellForm);
    console.log(this.wellForm.value.wells[0].wellName)
  }

  submitWell(): void {
    console.log("Submit Well");
    console.log("Form: ", this.wellForm);

    console.log("attachment: ", this.wellForm.value.wells[0].attachment.files[0]);

    let wellArrayLen = this.wellForm.value.wells.length;

    for (let i=0; i < wellArrayLen; i++) {
      console.log("inside well");

      let formData = new FormData();
      formData.append('wellName', this.wellForm.value.wells[i].wellName);
      formData.append('lease', this.wellForm.value.wells[i].lease);
      formData.append('wellType', this.wellForm.value.wells[i].wellType);
      formData.append('status', this.wellForm.value.wells[i].status);
      formData.append('purpose', this.wellForm.value.wells[i].purpose);
      formData.append('apiID', this.wellForm.value.wells[i].apiID);
      formData.append('opType', this.wellForm.value.wells[i].opType);
      formData.append('injZone', this.wellForm.value.wells[i].injZone);
      formData.append('depth', this.wellForm.value.wells[i].depth);
      formData.append('sec', this.wellForm.value.wells[i].sec);
      formData.append('township', this.wellForm.value.wells[i].township);
      formData.append('range', this.wellForm.value.wells[i].range);      
      formData.append('county', this.wellForm.value.wells[i].county);
      formData.append('locationType', this.wellForm.value.wells[i].locationType);
      formData.append('designation', this.wellForm.value.wells[i].designation);
      formData.append('wellNum', this.wellForm.value.wells[i].wellNum);
      formData.append('field', this.wellForm.value.wells[i].field);
      formData.append('statusDate', this.wellForm.value.wells[i].statusDate);
      formData.append('spudDate', this.wellForm.value.wells[i].spudDate);
      formData.append('permit', this.wellForm.value.wells[i].permit);
      formData.append('pool', this.wellForm.value.wells[i].pool);
      formData.append('bondNum', this.wellForm.value.wells[i].bondNum);
      formData.append('production', this.wellForm.value.wells[i].production);
      formData.append('directDrill', this.wellForm.value.wells[i].directDrill);
      formData.append('confidential', this.wellForm.value.wells[i].confidential);
      formData.append('expiration', this.wellForm.value.wells[i].expiration);      
      formData.append('bm', this.wellForm.value.wells[i].bm);
      formData.append('district', this.wellForm.value.wells[i].district);
      formData.append('shore', this.wellForm.value.wells[i].shore);
      formData.append('datum', this.wellForm.value.wells[i].datum);
      formData.append('coernerCall', this.wellForm.value.wells[i].coernerCall);
      formData.append('description', this.wellForm.value.wells[i].description);
      formData.append('casingSize', this.wellForm.value.wells[i].casingSize);
      formData.append('weight', this.wellForm.value.wells[i].weight);
      formData.append('grade', this.wellForm.value.wells[i].grade);
      formData.append('top', this.wellForm.value.wells[i].top);
      formData.append('bottom', this.wellForm.value.wells[i].bottom);
      formData.append('cementDepth', this.wellForm.value.wells[i].cementDepth);
      formData.append('csg', this.wellForm.value.wells[i].csg);
      formData.append('testID', this.wellForm.value.wells[i].testID);
      formData.append('testType', this.wellForm.value.wells[i].testType);
      formData.append('interval', this.wellForm.value.wells[i].interval);
      formData.append('schedDate', this.wellForm.value.wells[i].schedDate);
      formData.append('actDate', this.wellForm.value.wells[i].actDate);
      formData.append('futureDate', this.wellForm.value.wells[i].futureDate);
      formData.append('wellboreNo', this.wellForm.value.wells[i].wellboreNo);
      formData.append('compDate', this.wellForm.value.wells[i].compDate);
      formData.append('botHoleMD', this.wellForm.value.wells[i].botHoleMD);
      formData.append('waterBase', this.wellForm.value.wells[i].waterBase);
      formData.append('botHoleTVD', this.wellForm.value.wells[i].botHoleTVD);
      formData.append('plugMD', this.wellForm.value.wells[i].plugMD);
      formData.append('plugTVD', this.wellForm.value.wells[i].plugTVD);
      formData.append('bridgePlug', this.wellForm.value.wells[i].bridgePlug);
      formData.append('cementPlug', this.wellForm.value.wells[i].cementPlug);
      formData.append('surfLatitude', this.wellForm.value.wells[i].surfLatitude);
      formData.append('surfLongitude', this.wellForm.value.wells[i].surfLongitude);
      formData.append('botLatitude', this.wellForm.value.wells[i].botLatitude);
      formData.append('botLongitude', this.wellForm.value.wells[i].botLongitude);
      
      formData.append('xLoc', this.wellForm.value.wells[i].location.x);
      formData.append('yLoc', this.wellForm.value.wells[i].location.y);
      formData.append('zLoc', this.wellForm.value.wells[i].location.z);
      formData.append('attachment', this.wellForm.value.wells[i].attachment.files[i]);

      this.defaultService.createWell(formData).subscribe(value => {
        this.result = value;
      });

      console.log(this.result);
    }

  }

}
