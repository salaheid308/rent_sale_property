import { Injectable } from '@angular/core';
import { UserForLogin, UserForRegister } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor() { }

authUser(user: UserForLogin) {
  let userarry =[];
  if(localStorage.getItem('Users')){
   userarry = JSON.parse(localStorage.getItem('Users'));
  }
  return userarry.find(p => p.userName === user.userName && p.password === user.password);
}

registerUser(user: UserForRegister) {
 let users =[];
 if(localStorage.getItem('Users')){
  users = JSON.parse(localStorage.getItem('Users'));
  users = [user,...users];
 }
 else{
  users = [user]
 }
 localStorage.setItem('Users',JSON.stringify(users));
}


}
