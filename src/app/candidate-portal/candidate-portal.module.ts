import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { Router, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeroComponent
  ],
  imports: [
    CommonModule,
    NgbCarouselModule,
    RouterModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    HeroComponent
  ]
})
export class CandidatePortalModule { }
