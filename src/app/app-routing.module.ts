import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Components
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { NewsComponent } from './components/news/news.component';

const routes: Routes = [
  //{ path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent },
  { path: 'registro', component: RegisterComponent },
  { path: 'noticias/:id', component: NewsComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
