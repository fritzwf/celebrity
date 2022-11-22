import { DeviceDetectorService } from 'ngx-device-detector';

import { Component, OnChanges, OnInit } from '@angular/core';

import { CelebrityService } from './celebrity.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnChanges, OnInit {
  title = 'celebrity';

  isMobile = false;
  celebFound = false;
  celebNotFound = false;
  celebrity = "";
  celeb: any;
  notFound = "N/A";

  constructor(
    private deviceService: DeviceDetectorService,
    private celebrityService: CelebrityService
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
    }).catch((err: any) => {
      console.error(err);
    });
  }
}
