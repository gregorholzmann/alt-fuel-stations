import { Injectable }    from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../environments/environment';

import 'rxjs/add/operator/toPromise';

import { Marker } from './marker';

@Injectable()
export class MarkerService {
  private dataUrl = 'https://api.data.gov/nrel/alt-fuel-stations/v1.json?api_key=' + environment.dataGovApiKey;  // URL to web api

  constructor(private http: Http) { }

  getMarkers(): Promise<Marker[]> {
    return this.http.get(this.dataUrl)
               .toPromise()
               .then(this.extractData)
               .catch(this.handleError);
  }

  extractData(res: Response) {
    let body = res.json();

    let transData = body.fuel_stations.map(function(station){
      let transStation = {};
      transStation['latitude'] = station.latitude;
      transStation['longitude'] = station.longitude;
      return transStation;
    });
    return transData || [];
  }

  private handleError (error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}
