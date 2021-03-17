import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/producto';
import { Marca } from '../../models/marca';
import { ProductoService } from '../../services/producto.service';
import { MarcaService } from '../../services/marca.service';
import { ImagenesCatalogoService } from '../../services/imagenes.catalogo.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Global } from '../../services/global';

import * as JSZip from 'jszip';
import * as FileSaver from 'file-saver';
import * as JSZipUtils from 'file-saver';

@Component({
  selector: 'app-imagenes-producto',
  templateUrl: './imagenes-producto.component.html',
  styleUrls: ['./imagenes-producto.component.css'],
  providers: [ProductoService, MarcaService, ImagenesCatalogoService]
})
export class ImagenesProductoComponent implements OnInit {
  public productos: any;
  public marcas : Marca[];
  public title: string;
  public url_productos: string;
  public masivo: object[];
  public checks: object[];
  public progreso : Number;
  p: number = 1;

  //Filtros
  public productoFiltro: any = { nombre_del_producto: '' };
  public especieFiltro: any = { especie: '' };
  public categoriaFiltro: any = { categoria_del_producto: '' };
  public especialidadFiltro: any = { especialidad_del_producto: '' };
  public sucategoriaFiltro: any = { subcategoria_del_producto: '' };

  constructor(
      public _productoService : ProductoService,
      public _marcaService: MarcaService,
      public _imagenesService: ImagenesCatalogoService
    ) {
      this.url_productos = Global.url_productos;
      this.masivo = [{}];
      this.checks = [{}];
      this.progreso = 0;
  }

  ngOnInit(): void {

    this._marcaService.getMarcas().subscribe(
      response=>{
        this.marcas = response;
        //console.log(this.marcas);
      },err=>{
        console.log(err);
      }
    );

    this._marcaService.getAllProducts().subscribe(
      response=>{
        this.productos = response;
        
        this.productos.forEach(producto => {
          //console.log(producto['codigo_de_barras_padre']);
          this._imagenesService.getImages(producto['ean']).subscribe(
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
        //console.log(this.productos);
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
  
  let nameReg = this.title.replace('/', '-')
  
  zip.file(nameReg  + ".txt", `

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
    let url = 'https://testgabrica.s3.us-east-2.amazonaws.com/' + img[i]['imagen'];
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

  check(obj, event){
    if(event == true){
      this.masivo.push(obj);
    }else if(event == false){
      let isLargeNumber = (element) => element['id'] === obj.id;
      let indice = this.masivo.findIndex(isLargeNumber);
      this.masivo.splice(-1,indice);      
    } 
  }  

  downloadSellected(){
    let seleccionados = this.masivo;
    var zip = new JSZip();
    for(let i = 0; i < seleccionados.length; i++){
      if(seleccionados[i]['imagenes']){
        let img = seleccionados[i]['imagenes'];
        let nombreP = seleccionados[i]['nombre_del_producto'];
        let imgFolder = zip.folder(nombreP.replace('/', '-'));

        let regex = new RegExp('&slto', 'g');
        let contL = seleccionados[i]['bullets'].replace(regex, "\r\n");

        for(let i = 0; i <= img.length-1; i++){
          let url = 'https://testgabrica.s3.us-east-2.amazonaws.com/' + img[i]['imagen'];
          imgFolder.file(img[i]['imagen'], fetch(url).then(response => response.blob()), {binary:true});
        }
      }
    }

    //create a CSV file
      var str = "#;ID;Nombre del Producto;Marca;Categoría del Producto;Sub categoría del producto;Descripción;Sabor;Bullets;Contenido;Peso en KG con empaque;Edad o Etapa;Especialidad del producto;Especie;Ingredientes;Análisis garantizado;Código de barras padre;EAN;Instrucciones;IVA;Keywords;Medida Alto;Medida Ancho;Presentación;SKU;Imágenes \n";
      let i = 0;
      for(var item of seleccionados ){
        if(i != 0){
          let imagenes = '';
          if(item['imagenes']){
            item['imagenes'].forEach(e => {
              imagenes += e['imagen'] + ' | ';
            });
          }     

          let regex = new RegExp('<br>');
          let analisisGarantizado = item['analisis_garantizado'];

          if(item['analisis_garantizado'] != undefined){
            analisisGarantizado = item['analisis_garantizado'].replace(regex, " * ");
          }else{
            analisisGarantizado = '';
          }

          if(item['medida_alto'] === undefined){
            item['medida_alto'] = ''
          }

          if(item['medida_ancho'] === undefined){
            item['medida_ancho'] = ''
          }
          
          
          str += `${i};${item['id']};${item['nombre_del_producto']};${item['marca']};${item['categoria_del_producto']};${item['subcategoria_del_producto']};${item['descripcion']};${item['sabor']};${item['bullets']};${item['contenido']};${item['unidad_medida']};${item['edad_etapa']};${item['especialidad_del_producto']};${item['especie']};${item['ingredientes']};${analisisGarantizado};${item['codigo_de_barras_padre']};${item['ean']};${item['instrucciones']};${item['iva']};${item['keywords']};${item['medida_alto']};${item['medida_ancho']};${item['presentacion']};${item['sku']};${imagenes};\n`;
        }
        i++;
      }
      zip.file("Catálogo Gabrica.csv",str, {binary:true});
    //end of creation file

    zip.generateAsync({ type: "blob" })
      .then(function (content) {
      FileSaver.saveAs(content, 'Gabrica' + ".zip");
    });

  }

  limpiarFiltros(){
    this.limpiarproductoFiltro();
    this.limpiarespecieFiltro();
    this.limpiarcategoriaFiltro();
    this.limpiarespecialidadFiltro();
    this.limpiarsucategoriaFiltro();
  }

}
