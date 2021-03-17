import { Component, Input, OnInit } from '@angular/core';
import { Producto } from '../../models/producto';
import { Marca } from '../../models/marca';
import { Global } from '../../services/global';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  @Input() marca : Marca;
  public url: string;
  constructor() {
    this.url = Global.url_logos;
  }

  ngOnInit(): void {
  }

}
