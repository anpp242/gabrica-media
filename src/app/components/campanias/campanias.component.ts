import { Component, OnInit } from '@angular/core';
import { Campania } from '../../models/campania';
import { CampaniaService } from '../../services/campania.service';

@Component({
  selector: 'app-campanias',
  templateUrl: './campanias.component.html',
  styleUrls: ['./campanias.component.css'],
  providers: [CampaniaService]
})
export class CampaniasComponent implements OnInit {
  public campanias : Campania[];
  startPage : Number;
  paginationLimit:Number;

  constructor(
    private _campaniaService: CampaniaService
  ) {
    this.startPage = 0;
    this.paginationLimit = 3;
  }

  ngOnInit(): void {
    this._campaniaService.getCampania().subscribe(
      response =>{
        if(response){
          this.campanias = response;
        }else{}
        console.log(this.campanias);
      },
      error=>{
        console.log('Error: ' + error);
      }
    )
  }

  showMoreItems()
  {
      this.paginationLimit = Number(this.paginationLimit) + 3;        
  }

  showLessItems()
  {
    this.paginationLimit = Number(this.paginationLimit) - 3;
  }

}
