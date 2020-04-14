import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { HttpClientModule} from '@angular/common/http';

import { BasicRoutingModule } from './basic-routing.module';


import { BasicComponent } from './basic.component';
import {  MapsComponent } from './maps/maps.component';
import { SocialShareComponent } from './social-share/social-share.component';
import { Contacts} from '@ionic-native/contacts';


@NgModule({
  declarations: [BasicComponent, SocialShareComponent, MapsComponent],
  imports: [
    CommonModule,
    BasicRoutingModule,
    IonicModule.forRoot(),
    HttpClientModule,
  ],
  providers: [Contacts]
})
export class BasicModule { }
