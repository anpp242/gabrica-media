import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLinkActive } from '@angular/router';
import { MarcaService } from 'src/app/services/marca.service';
import xml2js from 'xml2js';

@Component({
  selector: 'app-listado-fichas',
  templateUrl: './listado-fichas.component.html',
  styleUrls: ['./listado-fichas.component.css'],
  providers: [MarcaService]
})
export class ListadoFichasComponent implements OnInit {
  public marca:string;
  public fichas: any;
  public fichasTitulos: any;

  constructor(
    private route:ActivatedRoute,
    private marcaService: MarcaService
  ) {
    this.marca = this.route.snapshot.params['brand'];
    console.log(this.marca)
  }

  ngOnInit(): void {
    this.fichas = this.marcaService.getFichas( `${this.marca}/` ).subscribe((data) => {  
      this.parseXML(data)  
          .then((data:Array<any>) => {  
            data.map(item=>{
              item.name = this.cleanName( item.key );
              item.key = `https://fichastecnicas2022.s3.us-east-2.amazonaws.com/${item.key}`;
            });
            data.shift();
            this.fichas = data;
            console.log('Fichas', this.fichas)
          });  
  });
  }

  cleanName(key){
    return key.split('/')[1];
  }

  parseXML(data) {  
    return new Promise(resolve => {  
        var k: string | number,  
        arr = [],  
        parser = new xml2js.Parser(  
            {  
                trim: true,  
                explicitArray: true  
            });  
    parser.parseString(data, function (err, result) { 
        //console.log(result.ListBucketResult.Contents) 
        var array = result.ListBucketResult.Contents;  
        array.forEach(ficha => {
                arr.push({  
                    key: ficha.Key.toString(),  
                }); 
            });
            resolve(arr);  
        });  
    });  
} 

}
