import { Component, OnInit, OnDestroy } from '@angular/core';
import * as Leaflet from 'leaflet';
import { antPath } from 'leaflet-ant-path';
import { icon, Marker } from 'leaflet';
import { MapService } from '../services/map.service';

const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
Marker.prototype.options.icon = iconDefault;

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})

export class MapPage implements OnInit {
  map: Leaflet.Map;
  lat: String;
  lon: String;

  constructor(protected mapService: MapService) {
   }

  ngOnInit() {
    }

  ionViewDidEnter() { this.leafletMap(); }

  leafletMap() {
    if(this.map != null){
      this.map.remove();
    }
    this.map = new Leaflet.Map('mapId').setView([42.210480, 20.732170], 6);

    Leaflet.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
      attribution: 'edupala.com'
    }).addTo(this.map);


    this.mapService.getISS().subscribe(value => {
      this.lat = value['iss_position']['latitude']
      this.lon = value['iss_position']['longitude']

      const markPoint = Leaflet.marker([this.lat, this.lon], {icon: iconDefault});
      markPoint.bindPopup('<p>ISS</p>');
      this.map.addLayer(markPoint);
      });    
   
      navigator.geolocation.getCurrentPosition((position) => {
        const markPoint = Leaflet.marker([position.coords.latitude, position.coords.longitude], {icon: iconDefault});
        markPoint.bindPopup('<p>My location</p>');
        this.map.addLayer(markPoint);
        this.map.setView([position.coords.latitude, position.coords.longitude], 6)
      })

    //antPath([[28.644800, 77.216721], [34.1526, 77.5771]],
      //{ color: '#FF0000', weight: 5, opacity: 0.6 })
      //.addTo(this.map);
    
  }

  
  
  ngOnDestroy(){
    this.map.remove();
    console.log("DESTROYY");
    
  }

}
