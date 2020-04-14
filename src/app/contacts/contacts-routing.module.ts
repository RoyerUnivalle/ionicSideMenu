import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContactsComponent} from './contacts.component';
import {ShowContactsComponent} from './show-contacts/show-contacts.component';

const routes: Routes = [
  {
    path: '',
    component: ContactsComponent,
    children: [
      { path: '', redirectTo: 'showContacts', pathMatch: 'prefix' },
      {
        path: 'showContacts',
        component: ShowContactsComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
