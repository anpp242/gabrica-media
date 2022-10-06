import { Component, OnInit } from '@angular/core';
import { Marca } from 'src/app/models/marca';
import { ImagenesCatalogoService } from 'src/app/services/imagenes.catalogo.service';
import { MarcaService } from 'src/app/services/marca.service';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-fichas-tecnicas',
  templateUrl: './fichas-tecnicas.component.html',
  styleUrls: ['./fichas-tecnicas.component.css'],
  providers: [ProductoService, MarcaService, ImagenesCatalogoService]
})
export class FichasTecnicasComponent implements OnInit {
  public marcas : Marca[];

  constructor(
    private _productoService : ProductoService,
    private _marcaService: MarcaService,
    private _imagenesService: ImagenesCatalogoService
  ) { }

  ngOnInit(): void {
    this._marcaService.getMarcas().subscribe(
      response=>{
        this.marcas = response;
        //console.log(this.marcas);
      },err=>{
        console.log(err);
      }
    );
  }

}
