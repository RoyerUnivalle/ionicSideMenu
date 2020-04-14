import { Component, OnInit } from '@angular/core';
import { Contacts} from '@ionic-native/contacts';

@Component({
  selector: 'app-show-contacts',
  templateUrl: './show-contacts.component.html',
  styleUrls: ['./show-contacts.component.scss'],
})
export class ShowContactsComponent implements OnInit {
  listaContactos: any[] = [];
  avatar = '../../../assets/icon/favicon.png';
  constructor(private contacts: Contacts) {
    this.cargarListaContactos();
  }

  ngOnInit() {}

  cargarListaContactos() {
    this.contacts.find(['*']).then(
      (res) => {
        console.log({ funcion: 'CargarListaContactos' + res});
        const datosMostar: any[] = [];
        res.map((item) => {
          if (
            item.displayName != null &&
            item.phoneNumbers != null
          ) {
            datosMostar.push({
              displayName: item.displayName,
              photos: [{ value: this.avatar }],
              phoneNumbers: item.phoneNumbers,
            });
          }
        });
        console.log({
          funcion: 'CargarListaContactos' + datosMostar,
        });
        this.listaContactos = datosMostar;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
