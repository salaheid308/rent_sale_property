import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from 'src/app/services/housing-services.service';
import { Iproperty } from '../../model/iproperty';
@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

   properties:Iproperty[];
   SellRent = 1 ;
  constructor(private route : ActivatedRoute , private houseservice : HousingService) { }

  ngOnInit():void {
    if (this.route.snapshot.url.toString()) {
      this.SellRent = 2; // Means we are on rent-property URL else we are on base URL
  }
    this.houseservice.getallproperties(this.SellRent).subscribe(
      data=>{
        this.properties= data;
       const newprop =JSON.parse(localStorage.getItem('newprop'));
       if(newprop){
        this.properties = [...newprop,...this.properties];
       }
      }
    );
  }

}
