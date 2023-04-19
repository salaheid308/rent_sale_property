import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Property } from '../model/property';
import { Iproperty } from '../model/iproperty';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
properties : Iproperty[];

constructor(private http:HttpClient) {

}
getProperty(id:number){

  this.getallproperties().subscribe(
    data=>{
      this.properties= data;
     const newprop =JSON.parse(localStorage.getItem('newprop'));
     if(newprop){
      this.properties = [...newprop,...this.properties];
     }
    }
  );
  return this.properties.find(p=>p.Id ===id );
}

getallproperties(SellRent?: number):Observable<Property[]>{

return   this.http.get<Property[]>('data/properties.json');

}
addProperty(property: Property) {
  let prolist =[];
 if(localStorage.getItem('newprop')){
  prolist = JSON.parse(localStorage.getItem('newprop'));
  prolist = [property,...prolist];
 }
 else{
  prolist = [property]
 }
localStorage.setItem("newprop",JSON.stringify(prolist));
}
newPropID() {
  if (localStorage.getItem('PID')) {
      localStorage.setItem('PID', String(+localStorage.getItem('PID') + 1));
      return +localStorage.getItem('PID');
  } else {
      localStorage.setItem('PID', '101');
      return 101;
  }
}

}
