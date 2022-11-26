import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private httpClient: HttpClient) { }

  public getProfile(): Observable<any> {
    return this.httpClient.get('https://ionicangular-crossdev-default-rtdb.europe-west1.firebasedatabase.app/profiles.json?orderBy="timestamp"&limitToLast=1');
  }

  public postProfile(name: String, address: String, email: String) {
    return this.httpClient.post('https://ionicangular-crossdev-default-rtdb.europe-west1.firebasedatabase.app/profiles.json', `{"name": "${name} ", "address": "${address}", "email": "${email}", "timestamp": "${Math.floor(Date.now() / 1000)}" }`);
  }


}
