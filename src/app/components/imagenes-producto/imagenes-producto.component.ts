import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/producto';
import { Marca } from '../../models/marca';
import { ProductoService } from '../../services/producto.service';
import { MarcaService } from '../../services/marca.service';

@Component({
  selector: 'app-imagenes-producto',
  templateUrl: './imagenes-producto.component.html',
  styleUrls: ['./imagenes-producto.component.css'],
  providers: [ProductoService, MarcaService]
})
export class ImagenesProductoComponent implements OnInit {
  public productos : Producto[];
  public marcas : Marca[];

  constructor(
      public _productoService : ProductoService,
      public _marcaService: MarcaService
    ) {
    
  }

  ngOnInit(): void {
    this._marcaService.getMarcas().subscribe(
      response=>{
        this.marcas = response;
        console.log(this.marcas);
      },err=>{
        console.log(err);
      }
    );
  }


}
