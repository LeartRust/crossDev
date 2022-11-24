import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    //this.httpClient.post('https://ionicangular-crossdev-default-rtdb.europe-west1.firebasedatabase.app/test.json', '{"name":"John", "age":30, "car":null}')
    //.subscribe((response) => console.log(response));
  }

}
