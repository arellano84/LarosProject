import { Component, OnInit } from '@angular/core';
import{Router}  from '@angular/router';
import{User}  from '../../../user';
import{UserService}  from '../../../shared-service/catalogs/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
   private user:User;	

  constructor(private _userService:UserService,private _router:Router) { }

  ngOnInit() {
	this.user=this._userService.getter();
  }

  processForm(){
    if(this.user.id==undefined){
       this._userService.createUser(this.user).subscribe((user)=>{
         console.log(user);
         this._router.navigate(['/user/list']);
       },(error)=>{
         console.log(error);
       });
    }else{
       this._userService.updateUser(this.user).subscribe((user)=>{
         console.log(user);
         this._router.navigate(['/user/list']);
       },(error)=>{
         console.log(error);
       });
    }
  }

}
