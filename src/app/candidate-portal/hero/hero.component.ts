import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  images = ['../../../assets/img/carousel-1.jpg','../../../assets/img/carousel-1.jpg','../../../assets/img/carousel-1.jpg']
  activeItem: String = 'home'
  setActiveItem(active : String){
    this.activeItem = active;
  }
}
