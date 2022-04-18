import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SystemComponent } from './views/system/system.component';
import { EpicComponent } from './views/windows/epic/epic.component';
import { LoginComponent } from './views/windows/leagueOfLegends/login/login.component';

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
    ]  
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
