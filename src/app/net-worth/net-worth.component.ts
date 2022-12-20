import { DeviceDetectorService } from 'ngx-device-detector';
import { NgxSpinnerService } from 'ngx-spinner';

import { Component, OnChanges, OnInit } from '@angular/core';

import { NinjaApiService } from '../ninja-api.service';

@Component({
  selector: 'app-net-worth',
  templateUrl: './net-worth.component.html',
  styleUrls: ['./net-worth.component.scss']
})
export class NetWorthComponent implements OnChanges, OnInit {

  title = 'celebrity';

  isMobile = false;
  celebFound = false;
  celebNotFound = false;
  celebrity = "";
  celeb: any;
  notFound = "n/a";

  constructor(
    private deviceService: DeviceDetectorService,
    private celebrityService: NinjaApiService,
    private spinner: NgxSpinnerService,
  ) { }

  ngOnInit() {
    if (this.deviceService.isMobile()) {
      this.isMobile = true;
    }
  }

  ngOnChanges(changes: any) {
    console.log(changes.celebrity);
  }

  getCeleb(celebrity: string) {
    this.spinner.show();
    this.celebrityService.getCelebrity(celebrity).then((result: any) => {
      // console.warn("Celeb: " + JSON.stringify(result));
      this.celebNotFound = false;
      this.celebFound = false;
      if (result) {
        this.celebrity = "";
        this.celebFound = true;
        this.celeb = result;
      } else {
        this.celebNotFound = true;
      }
      this.spinner.hide();
    }).catch((err: any) => {
      console.error("Net worth retrieval failed.");
    });

    // Timeout if the BE gets held up.
    setTimeout(() => {
      this.spinner.hide();
    }, 15000);
  }
}
