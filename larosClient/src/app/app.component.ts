import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  <h1 class="title">Catálogos</h1>
  <nav>
    <a routerLink="/" routerLinkActive="active">Index</a>
    <a routerLink="/user/list" routerLinkActive="active">Usuario</a>
    <a routerLink="/role/list" routerLinkActive="active">Roles</a>
    <a routerLink="/car/list" routerLinkActive="active">Cars</a>
  </nav>
  <router-outlet></router-outlet>
  <router-outlet name="popup"></router-outlet>
`,
  // templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  subtitle: string;

  constructor(){
    this.title = 'Bienvenido a Laros';
    this.subtitle = 'Catálogos';
  }
}