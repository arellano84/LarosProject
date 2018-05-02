import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import{FormsModule}   from '@angular/forms';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { UserListComponent } from './components/catalogs/user-list/user-list.component';
import { UserFormComponent } from './components/catalogs/user-form/user-form.component';
import { RoleListComponent } from './components/catalogs/role-list/role-list.component';
import { RoleFormComponent } from './components/catalogs/role-form/role-form.component';
import {UserService} from './shared-service/catalogs/user.service';
import { RoleService } from './shared-service/catalogs/role.service';
import { appRoutes } from './app-routing.module';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';                 //api
import { InputTextModule }  from 'primeng/inputtext';
import { ButtonModule }  from 'primeng/button';
import { TableModule }  from 'primeng/table';
import { DialogModule }  from 'primeng/dialog';
import { CarListComponent } from './components/catalogs/car-list/car-list.component';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserFormComponent,
    RoleListComponent,
    RoleFormComponent,
    CarListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes), 
    HttpClientModule,
    TableModule,
    InputTextModule,
    DialogModule,
    ButtonModule
  ],
  providers: [UserService,RoleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
