import { Routes } from '@angular/router';
import {LoginComponent} from './auth/login/login.component';
import {MainPageComponent} from './pages/main-page/main-page.component';
import {RegisterComponent} from './auth/register/register.component';
import {LayoutComponent} from './layout/layout.component';
import {ChatbotComponent} from './pages/chatbot/chatbot.component';

export const routes: Routes = [
  {path: '', component: LayoutComponent, children:[
    { path: '', component: MainPageComponent },
    {path: 'chat-bot', component: ChatbotComponent},

  ]},
  {path: 'sign-in', component: LoginComponent},
  {path: 'sign-up', component: RegisterComponent},
];
