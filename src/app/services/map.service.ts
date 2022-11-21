import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor(private httpClient: HttpClient) {
    
   }

   public getISS(): Observable<any> {
    return this.httpClient.get('http://api.open-notify.org/iss-now.json');
  }
}
