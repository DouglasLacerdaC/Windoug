import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SystemComponent } from './views/system/system.component';
import { EpicComponent } from './views/windows/epic/epic.component';
import { LoginComponent } from './views/windows/leagueOfLegends/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    SystemComponent,
    EpicComponent,
    LoginComponent
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
