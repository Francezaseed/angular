import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { PhotoComponent } from './components/photo/photo.component';

const routes: Routes = [
  { path:'',component:HomeComponent },
  { path:'home',component:HomeComponent },
  { path:'navbar', component: NavbarComponent },
  { path:'photo', component: PhotoComponent },
  { path:'about', component: AboutComponent },
  { path:'contact', component: ContactComponent },
  { path:'login', component: LoginComponent },
  { path:'signup', component: SignupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
