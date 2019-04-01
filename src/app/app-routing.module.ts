import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import { RegisterComponent} from './register/register.component';
import {UploadComponent} from './home/upload/upload.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'home/upload', component: UploadComponent}];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ] ,
 exports: [RouterModule]
})
export class AppRoutingModule { }
