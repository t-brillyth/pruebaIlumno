import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `<app-header></app-header>
  <router-outlet></router-outlet>
  <app-footer></app-footer>`
})

export class AppComponent { }