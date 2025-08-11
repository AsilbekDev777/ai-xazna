import { Routes } from '@angular/router';
import {LoginComponent} from './auth/login/login.component';
import {MainPageComponent} from './pages/main-page/main-page.component';
import {RegisterComponent} from './auth/register/register.component';
import {LayoutComponent} from './layout/layout.component';
import {ChatbotComponent} from './pages/chatbot/chatbot.component';
import {VoiceToTextComponent} from './pages/voice-to-text/voice-to-text.component';
import {TextToVoiceComponent} from './pages/text-to-voice/text-to-voice.component';
import {VoiceIdentityComponent} from './pages/voice-identity/voice-identity.component';
import {ProtokolComponent} from './pages/protokol/protokol.component';
import {BalanceComponent} from './pages/balance/balance.component';
import {SupportComponent} from './pages/support/support.component';
import {CustomBotsComponent} from './pages/custom-bots/custom-bots.component';
import {SettingsComponent} from './pages/settings/settings.component';

export const routes: Routes = [
  {path: '', component: LayoutComponent, children:[
    { path: '', component: MainPageComponent },
    {path: 'chat-bot', component: ChatbotComponent},
    {path: 'voice-to-text', component: VoiceToTextComponent},
    {path: 'text-to-voice', component: TextToVoiceComponent},
    {path: 'voice-identity', component: VoiceIdentityComponent},
    {path: 'protokol', component: ProtokolComponent},
    {path: 'balance', component: BalanceComponent},
    {path: 'support', component: SupportComponent},
    {path: 'custom-bots', component: CustomBotsComponent},
    {path: 'settings', component: SettingsComponent},
  ]},
  {path: 'sign-in', component: LoginComponent},
  {path: 'sign-up', component: RegisterComponent},
];
