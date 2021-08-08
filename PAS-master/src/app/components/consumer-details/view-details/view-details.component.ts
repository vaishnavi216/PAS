import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IConsumerFormData } from 'src/app/models/consumerData';
import { ConsumerService } from 'src/app/services/consumer.service';
@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {

  id!: number;
  consumerformdata!: IConsumerFormData;
  constructor(private route: ActivatedRoute,private consumerService: ConsumerService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    //this.consumerformdata=new IConsumerFormData();
    this.consumerService.viewConsumerDetails(this.id).subscribe(data => {
      this.consumerformdata=data;
    });
  }

}
