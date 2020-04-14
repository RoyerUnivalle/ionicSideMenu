import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SocialShareComponent } from './social-share/social-share.component';
import {  MapsComponent } from './maps/maps.component';
import { BasicComponent } from './basic.component';

// const routes: Routes = [];
const routes: Routes = [
  {
    path: '',
    component: BasicComponent,
    children: [
      { path: '', redirectTo: 'socialShare', pathMatch: 'prefix' },
      {
        path: 'socialShare',
        component: SocialShareComponent,
      },
      {
        path: 'maps',
        component: MapsComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicRoutingModule { }
