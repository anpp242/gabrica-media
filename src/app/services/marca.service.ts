import {  Injectable  } from '@angular/core';
import {  Marca  } from '../models/marca';
import {  HttpClient, HttpHeaders  } from '@angular/common/http';
import {  Observable  } from 'rxjs';
import {  Global  } from './global';
/* import xml2js from 'xml2js'; */

@Injectable()
export class MarcaService{
    public url: string;
    public xmlItems: any; 

    constructor(
        public _http: HttpClient
    ){
        this.url = Global.url_services;
    }

    getMarcas():Observable<any>{
        return this._http.get(this.url + 'lista-marcas');
    }

    getMarca(marca: string):Observable<any>{
            return this._http.get(this.url + 'lista-catalogo/marca/' + marca, {
        });
    }

    search(searchString):Observable<any>{
        return this._http.get(this.url + 'lista-catalogo/marca/ ' + searchString);
    }

    getAllProducts(){
        return this._http.get(this.url + 'lista-catalogo');
    }

    getFichas(marca):Observable<any>{
        return this._http.get('https://fichastecnicas2022.s3.us-east-2.amazonaws.com/?prefix=' + marca, { responseType: "text" })
        /* .subscribe((data) => {  
            this.parseXML(data)  
                .then((data) => {  
                    this.xmlItems = data;
                });  
        });   */
    }

   /*  parseXML(data) {  
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
    }   */
}