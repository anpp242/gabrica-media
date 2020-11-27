import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Slides } from '../../models/slides';
import { SlideService } from '../../services/slide.service';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.css'],
  providers: [SlideService]
})
export class SlidesComponent implements OnInit {
  public slides: Slides[];

  constructor(
    private _slideService: SlideService
  ) { }

  ngOnInit(): void {
    this._slideService.getSlides().subscribe(
      response=>{
        if(response){
          this.slides = response;
        }else{}
      },
      error=>{
        console.log('Error' + error);
      }
    )
  }

  sliderHomeOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }

}
