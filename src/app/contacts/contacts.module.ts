import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactsRoutingModule } from './contacts-routing.module';
import {ContactsComponent} from './contacts.component';
import {ShowContactsComponent} from './show-contacts/show-contacts.component';
import { Contacts} from '@ionic-native/contacts';


@NgModule({
  declarations: [ContactsComponent, ShowContactsComponent],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    IonicModule
  ], providers: [Contacts]
})
export class ContactsModule { }
