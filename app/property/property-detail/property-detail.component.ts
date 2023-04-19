import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproperty } from 'src/app/model/iproperty';
import { Property } from 'src/app/model/property';
import { HousingService } from 'src/app/services/housing-services.service';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {
  public propertyId: number;
  property :Iproperty;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private housingService: HousingService) { }

  ngOnInit() {
    this.propertyId = +this.route.snapshot.params['id'];

     this.route.params.subscribe(
          (params) => {
            this.propertyId = +params['id'];
            this.property = this.housingService.getProperty(this.propertyId);

          }
        );
  }

}
