import { Component, OnInit } from '@angular/core';
import {Role} from '../../../domain/role';
import {RoleService} from '../../../shared-service/catalogs/role.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.css']
})
// export class RoleListComponent implements OnInit {

//   car: Role = new PrimeRole();
  
//   private roles: Role[];

//   constructor(private _roleService:RoleService, private _router:Router) { }

//   ngOnInit() {  
//       this._roleService.getRoles().subscribe((roles)=>{
//         console.log(roles);
//         this.roles=roles;
//       }, (error)=>{
//         console.log(error);
//       })
//   }
//   deleteRole(role){
//     this._roleService.deleteRole(role.roleId).subscribe((data)=>{
//         this.roles.splice(this.roles.indexOf(role),1);
//     },(error)=>{
//       console.log(error);
//     });
//   }

//   updateRole(role){  
//     this._roleService.setter(role);
//     this._router.navigate(['/role/form']);


//   }
//   newRole(){
//     let role = new Role();
//       this._roleService.setter(role);
//       this._router.navigate(['/role/form']);
//   }

// }



export class RoleListComponent implements OnInit{
    
  displayDialog: boolean;
  
  role: Role = new PrimeRole();
  
  selectedRole: Role;
  
  newRole: boolean;
  
  roles: Role[];

  cols: any[];
  
  constructor(private roleService: RoleService) { }
  
  ngOnInit() {
      this.roleService.getRolesSmall();//.then(roles => this.roles = roles);

      this.cols = [
          { field: 'roleId', header: 'roleId' },
          { field: 'roleName', header: 'roleName' },
          { field: 'code', header: 'code' }
      ];
  }
  
  showDialogToAdd() {
      this.newRole = true;
      this.role = new PrimeRole();
      this.displayDialog = true;
  }
  
  save() {
      const roles = [...this.roles];
      if (this.newRole) {
          roles.push(this.role);
      } else {
          roles[this.findSelectedRoleIndex()] = this.role;
      }
      this.roles = roles;
      this.role = null;
      this.displayDialog = false;
  }
  
  delete() {
      const index = this.findSelectedRoleIndex();
      this.roles = this.roles.filter((val, i) => i != index);
      this.role = null;
      this.displayDialog = false;
  }
  
  onRowSelect(event) {
      this.newRole = false;
      this.role = this.cloneRole(event.data);
      this.displayDialog = true;
  }
  
  cloneRole(c: Role): Role {
      const role = new PrimeRole();
      for (const prop in c) {
          role[prop] = c[prop];
      }
      return role;
  }
  
  findSelectedRoleIndex(): number {
      return this.roles.indexOf(this.selectedRole);
  }
}

export class PrimeRole implements Role {
  
  constructor(public roleId?, public roleName?, public code?) {}
}
