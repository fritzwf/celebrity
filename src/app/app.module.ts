import { AdsenseModule } from 'ng2-adsense';
import { DeviceDetectorModule } from 'ngx-device-detector';
import { NgxSpinnerModule } from 'ngx-spinner';

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AdsenseComponent } from './adsense/adsense.component';
import { AppComponent } from './app.component';
import { MeterToFeetPipe } from './meter-to-feet.pipe';
import { NetWorthComponent } from './net-worth/net-worth.component';
import { CarsComponent } from './cars/cars.component';

@NgModule({
  declarations: [
    AppComponent,
    AdsenseComponent,
    MeterToFeetPipe,
    NetWorthComponent,
    CarsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgxSpinnerModule,
    // shown passing global defaults (optional)
    AdsenseModule.forRoot({
      adClient: 'ca-pub-3352789819896964',
      adSlot: 2238911066,
    }),
    DeviceDetectorModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
