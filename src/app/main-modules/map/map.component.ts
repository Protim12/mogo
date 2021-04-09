import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  mapView = false;

  constructor() { }

  ngOnInit(): void {
  }

  mapSelect() {
    this.mapView = true;
  }

  mapClose() {
    if(this.mapView = true) {
      this.mapView = false;
    }
  }

}
