import { Component, OnInit } from '@angular/core';
import { MarcaService } from '../../services/marca.service';
import { ImagenesCatalogoService } from '../../services/imagenes.catalogo.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Global } from '../../services/global';
import { OwlOptions } from 'ngx-owl-carousel-o';

import * as JSZip from 'jszip';
import * as FileSaver from 'file-saver';
import * as JSZipUtils from 'file-saver';

@Component({
  selector: 'app-marca',
  templateUrl: './marca.component.html',
  styleUrls: ['./marca.component.css'],
  providers: [MarcaService, ImagenesCatalogoService]
})
export class MarcaComponent implements OnInit {
  public productos: object[];
  public title: string;
  public marca: string;
  public url_productos: string;
  public codigos: object[];

  //Filtros
  public productoFiltro: any = { nombre_del_producto: '' };
  public especieFiltro: any = { especie: '' };
  public categoriaFiltro: any = { categoria_del_producto: '' };
  public especialidadFiltro: any = { especialidad_del_producto: '' };
  public sucategoriaFiltro: any = { subcategoria_del_producto: '' };

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    public _marcaService: MarcaService,
    private _imagenesService: ImagenesCatalogoService
  ) { 
    this.url_productos = Global.url_productos;
  }

  ngOnInit(): void {

    this._route.params.subscribe((params: Params)=>{
      this.marca = params.brand;
      console.log(params.brand);
    });

    this._marcaService.getMarca(this.marca).subscribe(
      response=>{
        this.productos = response;
        
        this.productos.forEach(producto => {
          //console.log(producto['codigo_de_barras_padre']);
          this._imagenesService.getImages(producto['codigo_de_barras_padre']).subscribe(
            res=>{
              if(res.Contents != undefined || res.Contents != null){
                producto['imagenes'] = [];
                if(res.Contents.length > 1){
                  for(let i = 0; i <= res.Contents.length -1; i++){
                    //console.log(res.Contents[i].Key);
                    producto['imagenes'].push({'imagen': res.Contents[i].Key});
                  }
                }else{
                  producto['imagenes'].push({'imagen': res.Contents.Key});
                }                
                //console.log(res.Contents);
              }
            },err=>{
              console.log(err);
            }
          );
        });
        console.log(this.productos);
      }, err=>{
        console.log(err);
      }
    );
  }

  //Slide producto
  sliderProducto: OwlOptions = {
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

  download(
      title:string, 
      bullets:string, 
      img,
      edad_etapa:string,
      especie:string,
      descripcion:string,
      sabor:string,
      contenido:string,
      unidad_medida:string,
      presentacion:string,
      especialidad_del_producto:string,
      marca:string,
      subcategoria_del_producto:string,
      instrucciones:string
    ){
    var zip = new JSZip();
    //let url = 'https://campaniasgm.s3.us-east-2.amazonaws.com/hills-kitten/Hills-Kitten-facebook.mp4';
    //let url = 'https://catalogobucket.s3.us-east-2.amazonaws.com/7703095933279-11.png';
    
    this.title = title;
    let regex = new RegExp('&slto', 'g');
    let contL = bullets.replace(regex, "\r\n");
    
    zip.file(this.title  + ".txt", `

${title}\r\n \r\n

\bBullets:\b \r\n
${contL}\r\n \r\n

\bContenido:\b \r\n
${descripcion}\r\n \r\n

\bEdad:\b \r\n
${edad_etapa}\r\n \r\n

\bEspecie:\b \r\n
${especie}\r\n \r\n

\bSabor:\b \r\n
${sabor}\r\n \r\n

\bContenido:\b \r\n
${contenido} ${unidad_medida}\r\n \r\n

\bPresentación:\b \r\n
${presentacion}\r\n \r\n

\bEspecialidad del producto:\b \r\n
${especialidad_del_producto}\r\n \r\n

\bMarca:\b \r\n
${marca}\r\n \r\n

\bSub-categoría:\b \r\n
${subcategoria_del_producto}\r\n \r\n

\bInstrucciones:\b \r\n
${instrucciones}\r\n \r\n

    `);
    var imgFolder = zip.folder("IMAGES");

    /*for(let i = 0; i <= img.length-1; i++){
      let imageBlob = fetch(url + img[i]['imagen']).then(response => response.blob());
      imgFolder.file(img[i]['imagen'] + '.jpg', imageBlob, {binary:true});
    }*/

    /*for(let i = 0; i <= 4; i++){
      imgFolder.file(this.title + '-gab-' + i + '.jpg', fetch(url).then(response => response.blob()), {binary:true});
    }*/    

    //let imageBlob = fetch(url).then(response => response.blob());
    //imgFolder.file(this.title + '.png', imageBlob, {binary:true});

    for(let i = 0; i <= img.length-1; i++){
      //console.log(img[i]['imagen']);
      let url = 'https://catalogobucket.s3.us-east-2.amazonaws.com/' + img[i]['imagen'];
      imgFolder.file(img[i]['imagen'], fetch(url).then(response => response.blob()), {binary:true});
    }


    zip.generateAsync({ type: "blob" })
      .then(function (content) {
      FileSaver.saveAs(content, title + ".zip");
    });
  }

  //Limpiar Filtros
  limpiarproductoFiltro(){
    this.productoFiltro = { nombre_del_producto: '' };
  }

  limpiarespecieFiltro(){
    this.especieFiltro = { especie: '' };
  }
  
  limpiarcategoriaFiltro(){
    this.categoriaFiltro = { categoria_del_producto: '' };
  }

  limpiarespecialidadFiltro(){
    this.especialidadFiltro = { especialidad_del_producto: '' };
  }

  limpiarsucategoriaFiltro(){
    this.sucategoriaFiltro = { subcategoria_del_producto: '' };
  }

}
