import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPropertyFormData } from 'src/app/models/propertyData';
import { ViewPropertyService } from 'src/app/services/viewproperty.service';
@Component({
  selector: 'app-view-property-details',
  templateUrl: './view-property-details.component.html',
  styleUrls: ['./view-property-details.component.css']
})
export class ViewPropertyDetailsComponent implements OnInit {

  id!: number;
  cid!: number;
  propertyformdata!: IPropertyFormData;
  constructor(private route: ActivatedRoute,private viewPropertyService: ViewPropertyService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.id=this.route.snapshot.params['cid'];
  //this.consumerformdata=new IConsumerFormData();
    this.viewPropertyService.viewPropertyDetails(this.cid,this.id).subscribe(data => {
      this.propertyformdata=data;
    });
  }

}
