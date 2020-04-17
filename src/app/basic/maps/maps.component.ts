import { Component, ElementRef, ViewChild, AfterViewInit, OnInit, AfterContentInit } from '@angular/core';
declare var google;
@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss'],
})
export class MapsComponent implements OnInit, AfterViewInit, AfterContentInit {
  map;
  @ViewChild('mapElement', { static: false }) public mapElement: ElementRef;
  mapInitialised = false;
  flag = true;
  public apiKey: any = 'your_api_key';

  constructor() {}
  ngOnInit() {}

  ngAfterViewInit() {
    // this.loadGoogleMaps();
    const iconBase =
      'https://developers.google.com/maps/documentation/javascript/examples/full/images/';
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      center: { lat: 4.070106, lng: -76.190355 },
      zoom: 16,
    });
    // Traer de base de datos
    const univalle = new google.maps.Marker({
      position: { lat: 4.070106, lng: -76.190355 },
      map: this.map,
      title: 'Universidad del Valle',
    });
    const esbol = new google.maps.Marker({
      position: { lat: 4.069341, lng: -76.189778 },
      map: this.map,
      title: 'Escuela de Policìa Simón Bolìvar',
    });
  }

  ngAfterContentInit(): void {
    //    this.loadGoogleMaps();
    /* this.map = new google.maps.Map(
        this.mapElement.nativeElement,
        {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        });*/
  }

  loadGoogleMaps() {
    this.addConnectivityListeners();
    if (typeof google === 'undefined' || typeof google.maps === 'undefined') {
      console.log('Google maps JavaScript needs to be loaded.');
      this.disableMap();

      if (this.flag) {
        console.log('online, loading map');
        // Load the SDK
        window['mapInit'] = () => {
          this.mapInit();
          this.enableMap();
        };

        const script = document.createElement('script');
        script.id = 'googleMaps';

        if (this.apiKey) {
          script.src =
            'http://maps.google.com/maps/api/js?key=' +
            this.apiKey +
            '&callback=mapInit';
        } else {
          // script.src = 'http://maps.google.com/maps/api/js?callback=mapInit';
          script.src =
            'https://maps.googleapis.com/maps/api/js?key=&callback=mapInit';
        }
        document.body.appendChild(script);
      }
    } else {
      if (true) {
        console.log('showing map');
        this.mapInit();
        this.enableMap();
      } else {
        console.log('disabling map');
        this.disableMap();
      }
    }
  }

  public mapInit() {
    this.mapInitialised = true;

    /*Geolocation.getCurrentPosition().then((position) => {

      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

      let mapOptions = {
        //center: latLng,
        center: {lat: -34.397, lng: 150.644},
        zoom: 15//,
        //mapTypeId: google.maps.MapTypeId.ROADMAP
      }

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    });*/

    const mapOptions = {
      // center: latLng,
      center: { lat: -34.397, lng: 150.644 },
      zoom: 15, // ,
      // mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  }

  disableMap() {
    console.log('disable map');
  }

  enableMap() {
    console.log('enable map');
  }

  addConnectivityListeners() {
    const onOnline = () => {
      setTimeout(() => {
        if (
          typeof google === 'undefined' ||
          typeof google.maps === 'undefined'
        ) {
          this.loadGoogleMaps();
        } else {
          if (!this.mapInitialised) {
            this.mapInit();
          }

          this.enableMap();
        }
      }, 2000);
    };

    const onOffline = () => {
      this.disableMap();
    };

    document.addEventListener('online', onOnline, false);
    document.addEventListener('offline', onOffline, false);
  }
}
