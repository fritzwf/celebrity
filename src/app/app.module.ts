import { AdsenseModule } from 'ng2-adsense';
import { DeviceDetectorModule } from 'ngx-device-detector';

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AdsenseComponent } from './adsense/adsense.component';
import { AppComponent } from './app.component';
import { MeterToFeetPipe } from './meter-to-feet.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AdsenseComponent,
    MeterToFeetPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
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
