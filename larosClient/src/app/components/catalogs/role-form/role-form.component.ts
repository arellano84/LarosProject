import { Component, OnInit } from '@angular/core';
import{Role}  from '../../../role';
import{Router}  from '@angular/router';
import{RoleService}  from '../../../shared-service/catalogs/role.service';

@Component({
  selector: 'app-role-form',
  templateUrl: './role-form.component.html',
  styleUrls: ['./role-form.component.css']
})
export class RoleFormComponent implements OnInit {

  private role:Role;

  constructor(private _roleService:RoleService,private _router:Router) { }

  ngOnInit() {
    this.role=this._roleService.getter();
  }


  processForm(){
    if(this.role.roleId==undefined){
       this._roleService.createRole(this.role).subscribe((role)=>{
         console.log(role);
         this._router.navigate(['/role/list']);
       },(error)=>{
         console.log(error);
       });
    }else{
       this._roleService.updateRole(this.role).subscribe((role)=>{
         console.log(role);
         this._router.navigate(['/role/list']);
       },(error)=>{
         console.log(error);
       });
    }
  }
  

}
