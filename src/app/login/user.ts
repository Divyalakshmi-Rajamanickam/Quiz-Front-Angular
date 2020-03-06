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
        if(firstName!=null){
            this.firstName=firstName;
        }
        if(email!= null){
        this.email=email;
        }
        if(lastName != null){
        this.lastName=lastName;
        }
        if(type!=null){
            this.type=type;
        }
    }
}