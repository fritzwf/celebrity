import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CelebrityService {

  constructor(
    private http: HttpClient
  ) { }

  public getCelebrity(person: string): Promise<any> {
    return new Promise((resolve) => {
      if (person) {
        const celebrity = '//tv.feuersoft.com/cgi-bin/get_celebrity.cgi?search=' + person;
        this.http.get(celebrity).subscribe((data: any) => {
          resolve(data);
        });
      } else {
        resolve(null);
      }
    });
  }
}
