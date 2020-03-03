export class User{
    userName:string;
    firstName:string;
    lastName:string;
    email:string;
    type:string;
    password:string;

    constructor(userName,password,firstName,lastName,email,type){
        this.userName=userName;
        this.password=password;
        if(firstName){
            this.firstName=firstName;
        }
        if(email){
        this.email=email;
        }
        if(lastName){
        this.lastName=lastName;
        }
        if(type){
            this.type=type;
        }
    }
}