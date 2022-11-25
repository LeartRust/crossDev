import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Profile} from '../models/profile.models'
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {


  public profile: Profile;
  private profileFormData: FormGroup

  constructor(private httpClient: HttpClient) {
   }

  ngOnInit() {
    this.profileFormData = new FormGroup({
      name: new FormControl,
      address: new FormControl,
      email: new FormControl
    });

  }

  changeProfile(){
    console.log(this.profileFormData.value);
    
    this.httpClient.post('https://ionicangular-crossdev-default-rtdb.europe-west1.firebasedatabase.app/profile.json', `{"name": "${this.profileFormData.value.name} ", "address": "${this.profileFormData.value.address}", "email": "${this.profileFormData.value.email}" }`)
    .subscribe((response) => console.log(response));

    
  }

}
