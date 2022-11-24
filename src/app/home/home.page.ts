import { Component, OnInit } from '@angular/core';
import {Astronaut} from '../models/astronaut.model'
import {HomeService} from '../services/home.service'
//import 'rxjs/add/operator/map'

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public astronauts: Array<Astronaut> = new Array<Astronaut>();
  public numberAstronauts: number;
  
  constructor(protected homeService: HomeService) { }

  ngOnInit() {    
    this.homeService.getAstronauts().subscribe(value => {
      this.astronauts = value; 
      console.log("test " +  JSON.stringify(this.astronauts));
      
      });    
  }



}
