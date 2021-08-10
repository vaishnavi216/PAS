import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { IConsumerFormData } from 'src/app/models/consumerData';
import { ConsumerService } from 'src/app/services/updateconsumer.service';
//import { ConsumerService } from 'src/app/services/consumer.service';

@Component({
  selector: 'app-update-details',
  templateUrl: './update-details.component.html',
  styleUrls: ['./update-details.component.css']
})
export class UpdateDetailsComponent implements OnInit {

  public consumerForm = new FormGroup({});
  public categories = ['Retailer', 'Food Service', 'Supplier', 'Manufacturer', 'Business Service', 'Investor'];
  public retailerTypes = ['E-tailer','Independent Grocer', 'Home and Textile', 'Pharmacy','Mass Merchandiser'];
  public foodserviceTypes=['Full Service Restaurant','Corporate Dining','Coffee House','Private Chef'];
  public supplierTypes=['Ingredient Importer','Equipment Supplier'];
  public manufacturerTypes=['Food','Pharmaceuticals','Cosmetics','Beverage','Pet Products'];
  public businessServiceTypes=['Consultant','Government Agency','Publisher','Financial Institution'];
  public investorTypes=['Private Equity Fund','Corporate Invester','Hedge Fund'];
  public actualTypes: Array<string> = [];
  public bsCategory = '';
  public message = '';
  public errorMessage = '';
  constructor(private _consumerFormBuilder: FormBuilder, 
    private _router: Router,
    private updateConsumerService: ConsumerService
  ) { }

  ngOnInit(): void {
    this.consumerForm = this._consumerFormBuilder.group({
      consumerId: ['',Validators.required],
      businessid: ['',Validators.required],
      firstname: ['',Validators.required],
      lastname: ['',Validators.required],
      businessname: ['',Validators.required],
      dob: ['',Validators.required],
      location: ['',Validators.required],
      email: ['',Validators.required],
      website: ['',Validators.required],
      businessoverview: ['',Validators.required],
      validity: ['',Validators.required],
      agentname: ['',Validators.required],
      agentid: ['',Validators.required],
      phone: ['',[Validators.required, Validators.pattern('^[0-9]{10}$')]],
      pandetails: ['',[Validators.required, Validators.pattern('^[A-Z0-9]{10}$')]],
      businesscategory: [null],
      businesstype: [null],
      businessturnover: ['',Validators.required],
      capitalinvested: ['',Validators.required],
      totalemployees: ['',Validators.required],
      businessage: ['',Validators.required],
    });
  }

  doAction(data: IConsumerFormData) {
    console.log(data);
    this.updateConsumerService.updateConsumerDetails(data).subscribe((response) => {
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

  changeType(value: string) {
    if(value === 'Retailer') {
      this.actualTypes = this.retailerTypes;
    } 
    else if(value === 'Food Service')
    {
      this.actualTypes = this.foodserviceTypes;
    }
    else if(value === 'Supplier')
    {
      this.actualTypes = this.supplierTypes;
    }
    else if(value === 'Manufacturer')
    {
      this.actualTypes = this.manufacturerTypes;
    }
    else if(value === 'Business Service')
    {
      this.actualTypes = this.businessServiceTypes;
    }
    else if(value === 'Investor')
    {
      this.actualTypes = this.investorTypes;
    }
    else{
      this.actualTypes=[];
    }
  }

}
