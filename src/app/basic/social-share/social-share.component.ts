import { Component, OnInit } from '@angular/core';
// import { SocialSharing } from '@ionic-native/social-sharing';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';

@Component({
  selector: 'app-social-share',
  templateUrl: './social-share.component.html',
  styleUrls: ['./social-share.component.scss'],
})
export class SocialShareComponent implements OnInit {

  // constructor(private socialSharing: SocialSharing) { }
  listaContactos: any[] = [];
  avatar = '../../../assets/icon/favicon.png';

  constructor(private contacts: Contacts) {
    this.cargarListaContactos();
   }

  ngOnInit() {}

  /*sendMsjWhatsapp() {
    this.socialSharing.shareViaWhatsApp('MENSAJE POR ENVIAR').then(() => {
      console.log('WhatsApp share successful');
    }).catch((err) => {
      // Sharing via email is not possible
      console.log('An error occurred ', err);
    });
  }*/

  /**
   * Funcion encargada de cargar la lista de contactos del celular, en mi caso filtrare y mostrare solo
   * los objetos que tienen valor en los campos dislplayName, photos, phoneNumbers. Con estos cargare
   * la lista a mostrar.
   */
  cargarListaContactos() {
    this.contacts.find(['*'])
    .then(res => {
      console.log({funcion: 'CargarListaContactos' + res});
      const datosMostar: any[] = [];
      res.map((item) => {
         if (item.displayName != null && item.phoneNumbers != null) {
          datosMostar.push({displayName: item.displayName, photos: [{value: this.avatar}], phoneNumbers: item.phoneNumbers});
        }
      });
      console.log({funcion: 'CargarListaContactos' + datosMostar});
      alert(datosMostar.length);
      this.listaContactos = datosMostar;
    }, error => {
      console.log(error);
    });
  }

}
