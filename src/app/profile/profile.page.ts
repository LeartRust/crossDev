import { Component, OnInit } from '@angular/core';
import {Profile} from '../models/profile.models'
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Validators } from "@angular/forms";
import { ToastController } from '@ionic/angular';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {


  public editStatus: boolean = false;
  public editText: String = "Edit Profile";
  public profile: Profile = {name: "", address: "", email: "", timestamp: ""};
  private profileForm: FormGroup

  constructor(private toastController: ToastController, protected profileService: ProfileService) {
   }


   
  ngOnInit() {
    this.profileForm = new FormGroup({
      name: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required,
      ])),
      address: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required,
      ])),
      email: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required,
      ]))
    });

    this.getProfile();
    
  }


  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Please fill out the form correctly!',
      duration: 1500,
      position: 'top'
    });

    await toast.present();
  }

  changeProfile(){
    console.log(this.profileForm.value);
    
    if (!this.profileForm.valid) {
      this.presentToast();
      return false;

    } else {
      this.profileService.postProfile(this.profileForm.value.name, this.profileForm.value.address, this.profileForm.value.email).subscribe((response) => this.getProfile());
      this.editToggle();
      this.profileForm.reset()
    }
    
  }

  getProfile(){
        this.profileService.getProfile().subscribe((response) => {
        console.log("GET: " + JSON.stringify(response))
        this.profile = response[Object.keys(response)[0]];
    });
  }

  editToggle(){
    this.editStatus = !this.editStatus;
    if(this.editStatus == true){
      this.editText = "Show Profile";
    }else{
      this.editText = "Edit Profile";
    }
  }

}
