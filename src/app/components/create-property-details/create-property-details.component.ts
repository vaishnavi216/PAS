import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { IPropertyFormData } from 'src/app/models/propertyData';
import { CreatePropertyService} from 'src/app/services/createproperty.service';
@Component({
  selector: 'app-create-property-details',
  templateUrl: './create-property-details.component.html',
  styleUrls: ['./create-property-details.component.css']
})
export class CreatePropertyDetailsComponent implements OnInit {
  public propertyForm = new FormGroup({});
  public message = '';
  public errorMessage = '';
  constructor(private _propertyFormBuilder: FormBuilder, 
    private _router: Router,
    private createPropertyService: CreatePropertyService
  ) { }

  ngOnInit(): void {
    this.propertyForm  = this._propertyFormBuilder.group({
    businessId: ['',Validators.required],
    consumerId: ['',Validators.required],
    insurancetype: ['',Validators.required],
    propertytype: ['',Validators.required],
    buildingsqft: ['',Validators.required],
    buildingtype: ['',Validators.required],
    buildingstoreys: ['',Validators.required],
    buildingage: ['',Validators.required],
    costoftheasset: ['',Validators.required],
    salvagevalue: ['',Validators.required],
    usefullifeoftheAsset: ['',Validators.required],
  });
  }

  doAction(data: IPropertyFormData) {
    console.log(data);
    this.createPropertyService.createPropertyDetails(data).subscribe((response) => {
      console.log(response);
      this.message = response.message;
    }, (error) => {
      console.log(error);
      this.errorMessage = error?.error?.message
      if(this.errorMessage === 'Not allowed') {
        this._router.navigate(['/login'])
      }
    })
  }

}
