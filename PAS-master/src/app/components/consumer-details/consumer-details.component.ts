import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-consumer-details',
  templateUrl: './consumer-details.component.html',
  styleUrls: ['./consumer-details.component.css']
})
export class ConsumerDetailsComponent implements OnInit {
  public cid!: number;
  //cid: number;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  getDetails(cid: number){
    var id=Number(cid);
    console.log(this.cid);
    this.router.navigate(['/consumer-details/view',id]);
  }
  updateDetails(id: number){
    
  }
}
