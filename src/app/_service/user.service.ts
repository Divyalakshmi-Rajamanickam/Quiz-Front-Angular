import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from '../login/user'

@Injectable()
export class UserService {
  //---------------- Properties---------------
  readonly rootUrl = 'http://localhost:2690';
  

  //---------------- Helper Methods---------------
  constructor(private http: HttpClient) { }
  

  getUserName() {
    var participant = JSON.parse(localStorage.getItem('userName'));
    return participant.Name;
  }


  //---------------- Http Methods---------------

  get<User>(user:User) {
    return this.http.get<User>("http://localhost:8080/user/login",user);
  }

  register(user:User){
    return this.http.post<User>("http://localhost:8080/user/create",user);
  }


}