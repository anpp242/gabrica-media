import { Component, OnInit } from '@angular/core';
import { Condicion } from '../../models/condicion';
import { CondicionService } from '../../services/condicion.service';

@Component({
  selector: 'app-condiciones-comerciales',
  templateUrl: './condiciones-comerciales.component.html',
  styleUrls: ['./condiciones-comerciales.component.css'],
  providers: [CondicionService]
})
export class CondicionesComercialesComponent implements OnInit {
  public condiciones : Condicion[];
  startPage : Number;
  paginationLimit:Number;

  constructor(
    public _condicionService : CondicionService
  ) {
    this.condiciones = _condicionService.getCondicion();
    this.startPage = 0;
    this.paginationLimit = 5;
  }

  ngOnInit(): void {
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
