import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UserListComponent } from './components/catalogs/user-list/user-list.component';
import { UserFormComponent } from './components/catalogs/user-form/user-form.component';
import { RoleListComponent } from './components/catalogs/role-list/role-list.component';
import { RoleFormComponent } from './components/catalogs/role-form/role-form.component';

export const appRoutes:Routes=[
    // {path:'', component:AppComponent},
    {path:'user/list', component:UserListComponent},
        {path:'user/form', component:UserFormComponent},
    {path:'role/list', component:RoleListComponent},
        {path:'role/form', component:RoleFormComponent}
];