import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sliderHomeModulesOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    responsive: {
      0: {
        items: 1,
        stagePadding: 35,
        nav: false
      },
      400: {
        items: 1,
        stagePadding: 35,
        nav: false
      },
      740: {
        items: 2,
        stagePadding: 35,
        nav: false
      },
      940: {
        items: 3,
        nav: false
      }
    },
    nav: false
  }

}
