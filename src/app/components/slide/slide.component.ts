import { Component, Input, OnInit } from '@angular/core';
import { Slides } from '../../models/slides';
import { Global } from '../../services/global';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit {
  @Input() slide: Slides;
  public url_recursos: string;

  constructor() {
    this.url_recursos = Global.url_slides;
  }

  ngOnInit(): void {
  }

}

