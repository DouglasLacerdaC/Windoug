import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SystemComponent } from './views/system/system.component';
import { EpicComponent } from './views/windows/epic/epic.component';
import { LoginComponent } from './views/windows/leagueOfLegends/login/login.component';
import { ClientComponent } from './views/windows/leagueOfLegends/client/client.component';
import { HomeComponent } from './views/windows/leagueOfLegends/home/home.component';
import { PvpComponent } from './views/windows/leagueOfLegends/pvp/pvp.component';
import { ProfileComponent } from './views/windows/leagueOfLegends/profile/profile.component';
import { SummonersComponent } from './views/windows/leagueOfLegends/summoners/summoners.component';

@NgModule({
  declarations: [
    AppComponent,
    SystemComponent,
    EpicComponent,
    LoginComponent,
    ClientComponent,
    HomeComponent,
    PvpComponent,
    ProfileComponent,
    SummonersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
