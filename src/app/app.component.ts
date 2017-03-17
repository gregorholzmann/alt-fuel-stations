import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';

import { Marker } from './marker';
import { MarkerService } from './marker.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
  private _markerService: MarkerService) {
    this.getMarkers()
  }

  private posts:Marker[] = [];
  private errorMessage:any = '';

  title: string = 'My first angular2-google-maps project';
  startingLat: number = 45.52;
  startingLng: number = -122.681944;
  markers: Marker[];

  getMarkers(): void {
    this._markerService.getMarkers()
        .then(
            markers => this.markers = markers,
            error => this.errorMessage = <any>error);
  }
}
