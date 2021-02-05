import { Component, OnInit } from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import OSM from 'ol/source/OSM';
import * as olProj from 'ol/proj';
import TileLayer from 'ol/layer/Tile';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import {Icon, Style} from 'ol/style';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';



@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  Telavi;
  map: Map;
  vectorSource: VectorSource;
  vectorLayer: any;

  constructor() { }

  initMap(){
    this.Telavi = new Feature({
      geometry: new Point(olProj.fromLonLat([45.496760 ,41.909998]))
    })

    this.Telavi.setStyle(new Style({
      image: new Icon(({
        color: '#129899',
        crossOrigin: 'anonymous',
        src: "assets/location.png",
      }))
    }))

    this.vectorSource = new VectorSource({
      features: [this.Telavi]
    })

    this.vectorLayer = new VectorLayer({
      source: this.vectorSource
    })

    this.map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM()
        }),
        this.vectorLayer
      ],
      view: new View({
        center: olProj.fromLonLat([45.496760 ,41.909998]),
        zoom: 12
      })
    });
  }

  ngOnInit(): void {
    this.initMap();
  }
}
