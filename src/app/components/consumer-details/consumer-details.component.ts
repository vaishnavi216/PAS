import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
@Component({
  selector: 'app-consumer-details',
  templateUrl: './consumer-details.component.html',
  styleUrls: ['./consumer-details.component.css']
})
export class ConsumerDetailsComponent implements OnInit {
 public consumerViewForm = new FormGroup({});
  public consumerid: string='';
  //public propertyViewForm = new FormGroup({});
  //public propertyid: string='';
  constructor(private router:Router,private _consumerFormBuilder: FormBuilder,private _propertyFormBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.consumerViewForm = this._consumerFormBuilder.group({
      consumerId: ['',[Validators.required, Validators.pattern('^[0-9]{4}$')]],
      
    });
   /* this.propertyViewForm = this._propertyFormBuilder.group({
      //consumerId: ['',[Validators.required, Validators.pattern('^[0-9]{4}$')]],
      propertyid: ['',[Validators.required, Validators.pattern('^[0-9]{1}$')]],
      
    });*/
  }

  getDetails(cid: string){
    console.log("hello");
    var id=Number(cid);
    console.log(cid);
    this.router.navigate(['/consumer-details/view',id]);
  }
  updateDetails(cid: string){
    console.log("hello");
    var id=Number(cid);
    console.log(cid);
    this.router.navigate(['/consumer-details/update',id]);
  }

  /*getPropertyDetails(pid: string){
    console.log("hello");
    var id=Number(pid);
    
    console.log(pid);
    this.router.navigate(['/consumer-details/view-property/1001',id]);
  }
  updatePropertyDetails(cid: string){
  
  }*/

}