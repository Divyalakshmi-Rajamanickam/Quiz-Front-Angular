import { Component, OnInit } from '@angular/core';
import { UserService } from '../_service/user.service';
import { User } from '../login/user';
import { Routes, RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  
  constructor( private router:Router,private userService:UserService) { }

  ngOnInit() {
  }

  userName;
  password;
  firstName;
  lastName
  Email;

  onSubmit(){
   let user = new User(this.userName,this.password,this.firstName,this.lastName,this.Email,"teacher");
   this.userService.register(user).subscribe(result=> {console.log(user),this.router.navigateByUrl('login');})
  }
  
  validate(userName,password,firstName,lastName,Email){
    this.userName=userName;
    this.password=password;
    this.firstName=firstName;
    this.lastName=lastName;
    this.Email=Email;
  }

}
