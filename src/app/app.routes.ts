import { Routes } from '@angular/router';
import {LoginComponent} from './auth/login/login.component';
import {MainPageComponent} from './pages/main-page/main-page.component';
import {RegisterComponent} from './auth/register/register.component';

export const routes: Routes = [
  { path: '', component: MainPageComponent },
  {path: 'sign-in', component: LoginComponent},
  {path: 'sign-up', component: RegisterComponent},
];
