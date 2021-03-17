import {  Injectable  } from '@angular/core';
import {  Marca  } from '../models/marca';
import {  HttpClient, HttpHeaders  } from '@angular/common/http';
import {  Observable  } from 'rxjs';
import {  Global  } from './global';

@Injectable()
export class MarcaService{
    public url: string;

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
}