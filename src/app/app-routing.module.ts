import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SystemComponent } from './views/system/system.component';
import { EpicComponent } from './views/windows/epic/epic.component';
import { ClientComponent } from './views/windows/leagueOfLegends/client/client.component';
import { HomeComponent } from './views/windows/leagueOfLegends/home/home.component';
import { LoginComponent } from './views/windows/leagueOfLegends/login/login.component';
import { PvpComponent } from './views/windows/leagueOfLegends/pvp/pvp.component';

const routes: Routes = [
  
  { path: '', redirectTo: '/system', pathMatch: 'full' },
  { 
    path: 'system',
    component: SystemComponent,
    children: [
      {
        path: 'epic',
        component: EpicComponent
      },
      {
        path: 'LeagueOfLegends/login',
        component: LoginComponent
      },
      {
        path: 'LeagueOfLegends',
        component: ClientComponent,
        children: [
          {
            path: 'home',
            component: HomeComponent
          },
          {
            path: 'pvp',
            component: PvpComponent
          },
        ]
      }
    ]  
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
