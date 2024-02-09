import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    HeroComponent
  ],
  imports: [
    CommonModule,
    NgbCarouselModule
  ],
  exports: [
    HeroComponent
  ]
})
export class CandidatePortalModule { }
