import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { environment } from '../environments/environment';

import { MarkerService} from './marker.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: environment.googleApiKey
    })
  ],
  providers: [ MarkerService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
