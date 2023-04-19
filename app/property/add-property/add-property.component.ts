import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { Iproperty } from 'src/app/model/iproperty';
import { Property } from 'src/app/model/property';
import { AlertifyService } from 'src/app/services/alertify.service';
import { HousingService } from 'src/app/services/housing-services.service';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {

  @ViewChild('formTabs') formTabs: TabsetComponent;
  myDateValue: Date;
  addPropertyForm: FormGroup;
  nextClicked: boolean;
  property = new Property();

  propertyTypes:Array<string> = ['house','appartment','duplex'];
    furnishTypes:Array<string> = ['fully','semi','un'];
    cityList: Array<string> = ['urk','dam','hesh'];

    propertyView: Iproperty = {
      Id: null,
      Name: '',
      Price: null,
      SellRent: null,
      PType: null,
      FType: null,
      BHK: null,
      BuiltArea: null,
      City: '',
      readyToMove: null,
      Address: null,
      Address2: null,
      FloorNo: '',
      TotalFloor: '',
      Description :'',
      MainEntrance : null,
      Mainentrance : null,
      Gated : null ,
      Security : null 

    };
  constructor(private router :Router,private alertify:AlertifyService,
    private fb: FormBuilder,private housingService: HousingService )
     { }


  ngOnInit() {
    this.CreateAddPropertyForm();
    // this.myDateValue = new Date("12-08-2019");


  }

  CreateAddPropertyForm() {
    this.addPropertyForm = this.fb.group({
        BasicInfo: this.fb.group({
            SellRent: ['1' , Validators.required],
            BHK: [null, Validators.required],
            PType: [null, Validators.required],
            FType: [null, Validators.required],
            Name: [null, Validators.required],
            Citycont: [null, Validators.required]
        }),

        PriceInfo: this.fb.group({
            Price: [null, Validators.required],
            BuiltArea: [null, Validators.required],
            CarpetArea: [null],
            Security: [0],
            Maintenance: [0],
        }),

        AddressInfo: this.fb.group({
            FloorNo: [null],
            TotalFloor: [null],
            Address: [null, Validators.required],
            LandMark: [null],
        }),

        OtherInfo: this.fb.group({
            RTM: [null, Validators.required],
            PossessionOn: ["12-08-2019", Validators.required],
            AOP: [null],
            Gated: [null],
            MainEntrance: [null],
            Description: [null]
        })
    });
}
get BasicInfo() {
  return this.addPropertyForm.controls.BasicInfo as FormGroup;
}

get PriceInfo() {
  return this.addPropertyForm.controls.PriceInfo as FormGroup;
}

get AddressInfo() {
  return this.addPropertyForm.controls.AddressInfo as FormGroup;
}

get OtherInfo() {
  return this.addPropertyForm.controls.OtherInfo as FormGroup;
}
// #endregion

// #region <Form Controls>
get SellRent() {
  return this.BasicInfo.controls.SellRent as FormControl;
}

get BHK() {
  return this.BasicInfo.controls.BHK as FormControl;
}

get PType() {
  return this.BasicInfo.controls.PType as FormControl;
}

get FType() {
  return this.BasicInfo.controls.FType as FormControl;
}

get Name() {
  return this.BasicInfo.controls.Name as FormControl;
}

get Citycont() {
  return this.BasicInfo.controls.Citycont as FormControl;
}

get Price() {
  return this.PriceInfo.controls.Price as FormControl;
}

get BuiltArea() {
  return this.PriceInfo.controls.BuiltArea as FormControl;
}

get CarpetArea() {
  return this.PriceInfo.controls.CarpetArea as FormControl;
}

get Security() {
  return this.PriceInfo.controls.Security as FormControl;
}

get Maintenance() {
  return this.PriceInfo.controls.Maintenance as FormControl;
}

get FloorNo() {
  return this.AddressInfo.controls.FloorNo as FormControl;
}

get TotalFloor() {
  return this.AddressInfo.controls.TotalFloor as FormControl;
}

get Address() {
  return this.AddressInfo.controls.Address as FormControl;
}

get LandMark() {
  return this.AddressInfo.controls.LandMark as FormControl;
}

get RTM() {
  return this.OtherInfo.controls.RTM as FormControl;
}

get PossessionOn() {
  return this.OtherInfo.controls.PossessionOn as FormControl;
}

get AOP() {
  return this.OtherInfo.controls.AOP as FormControl;
}

get Gated() {
  return this.OtherInfo.controls.Gated as FormControl;
}

get MainEntrance() {
  return this.OtherInfo.controls.MainEntrance as FormControl;
}

get Description() {
  return this.OtherInfo.controls.Description as FormControl;
}

onSubmit() {
  this.nextClicked = true;
  if (this.allTabsValid()) {
    this.mapProperty();
    this.housingService.addProperty(this.property);
    this.alertify.success('Congrats, your property listed successfully on our website');
    this.router.navigate(['/rent-property']);


  } else {
      this.alertify.error('Please review the form and provide all valid entries');
  }
}
mapProperty(): void {
  this.property.Id = this.housingService.newPropID();
  this.property.SellRent = +this.SellRent.value;
  this.property.BHK = this.BHK.value;
  this.property.propertyTypeId = this.PType.value;
  this.property.Name = this.Name.value;
  this.property.Price = this.Price.value;
  this.property.security = this.Security.value;
  this.property.Mainentrance = this.Maintenance.value;
  this.property.BuiltArea = this.BuiltArea.value;
  this.property.carpetArea = this.CarpetArea.value;
  this.property.FloorNo = this.FloorNo.value;
  this.property.TotalFloor = this.TotalFloor.value;
  this.property.address = this.Address.value;
  this.property.address2 = this.LandMark.value;
  this.property.readyToMove = this.RTM.value;
  this.property.gated = this.Gated.value;
  this.property.MainEntrance = this.MainEntrance.value;
  this.property.description = this.Description.value;
  this.property.poston = new Date().toString();
}

allTabsValid(): boolean {
  if (this.BasicInfo.invalid) {
      this.formTabs.tabs[0].active = true;
      return false;
  }

  if (this.PriceInfo.invalid) {
      this.formTabs.tabs[1].active = true;
      return false;
  }

  if (this.AddressInfo.invalid) {
      this.formTabs.tabs[2].active = true;
      return false;
  }

  if (this.OtherInfo.invalid) {
      this.formTabs.tabs[3].active = true;
      return false;
  }
  return true;
}
selectTab(NextTabId: number, IsCurrentTabValid: boolean) {
  this.nextClicked = true;
  if (IsCurrentTabValid) {
      this.formTabs.tabs[NextTabId].active = true;
      this.nextClicked = false;
  }
}


}
