import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { HttpClient} from '@angular/common/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/toPromise';
import {Role} from '../../role';

@Injectable()
export class RoleService {

  private baseUrl:string='http://localhost:8080/role';
  private headers= new Headers({'Content-Type':'application/json'});
  private options = new RequestOptions({headers:this.headers});

  private role = new Role();//Role

  constructor(private _http:Http) { }

  getRoles(){

    return this._http.get(this.baseUrl+'/roles',this.options)
    .map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }

  getRole(id:Number){

    return this._http.get(this.baseUrl+'/role/'+id,this.options)
    .map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }

  deleteRole(id:Number){

    return this._http.delete(this.baseUrl+'/role/'+id,this.options)
    .map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }

  createRole(role:Role){

    return this._http.post(this.baseUrl+'/role',JSON.stringify(role),  this.options)
    .map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }

  updateRole(role:Role){

    return this._http.put(this.baseUrl+'/role',JSON.stringify(role),  this.options)
    .map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }








  errorHandler(error:Response) {
    return Observable.throw(error||"Server Error");
  }

  setter(role:Role){
    this.role=role;
  }

 getter(){
   return this.role;
 }
}
