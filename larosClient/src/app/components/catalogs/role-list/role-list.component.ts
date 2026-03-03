import { Component, OnInit } from '@angular/core';
import {RoleService} from '../../../shared-service/catalogs/role.service';
import {Router} from '@angular/router'
import { Role } from '../../../role';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.css']
})
export class RoleListComponent implements OnInit{

  roles: Role[];
  
  constructor(private roleService: RoleService, private _router:Router) { }

    ngOnInit() {
        this.roleService.getRoles().subscribe((roles)=>{
            console.log(roles);
        this.roles=roles;
        }, (error)=>{
            console.log(error);
        })
    }
  
    deleteUser(role){
        this.roleService.deleteRole(role.id).subscribe((data)=>{
            this.roles.splice(this.roles.indexOf(role),1);
        },(error)=>{
            console.log(error);
        });
    }

    updateRole(role){  
        this.roleService.setter(role);
        this._router.navigate(['/role/form']);
    }

    newRole(){
        let role = new Role();
        this.roleService.setter(role);
        this._router.navigate(['/role/form']);
    }

}
