import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private httpClient: HttpClient) { }

  public getAstronauts(): Observable<any> {
    return this.httpClient.get('http://api.open-notify.org/astros.json');
  }

}
