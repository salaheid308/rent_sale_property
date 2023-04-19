import { Component, Input } from '@angular/core';
import { Iproperty } from '../../model/iproperty';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent {

  @Input() property: Iproperty;
   @Input() hideIcons: boolean;

}

