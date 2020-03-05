import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import {UserService} from '../_service/user.service';
import {User} from '../login/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  
  constructor(private router:Router, private userService:UserService ) { }

  ngOnInit() {
  }

  registrationForm(){
    this.router.navigateByUrl('register');
  }

  user :User;
  

  login(username,password){
    let user = new User(username,password,null,null,null,null)
    console.log("login component.login: ", user);
  if(this.userService.get<User>(this.user).subscribe()){
    this.router.navigateByUrl('quiz');
  }
  else{
    alert("invalid username or password");
  }
  }
  // this.userService.get<User>(this.user).subscribe(
  //   response=>{
  //     if(response === true){
  //      this.router.navigateByUrl('quiz');
  //    }
  //   },
  //   err=>{
  //     alert("invalid username or password");
  //    }
  // )
  //   }

}
