import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  insertUser(name: string, password: string) {
    var body = {
      UserName: name,
      Password: password
      
    }
    return this.http.post(this.rootUrl + '/api/InsertUser', body);
  }

  getUsername() {
    return this.http.get(this.rootUrl + '/api/Questions');
  }

  getPassword() {
    // var body = this.qns.map(x => x.QnID);
    // return this.http.post(this.rootUrl + '/api/Answers', body);
  }

  submit() {
    // var body = JSON.parse(localStorage.getItem('participant'));
    // body.Score = this.correctAnswerCount;
    // body.TimeSpent = this.seconds;
    // return this.http.post(this.rootUrl + "/api/UpdateOutput", body);
  }

}