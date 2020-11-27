import {  Injectable  } from '@angular/core';
import {  Producto  } from '../models/producto';
import {  HttpClient, HttpHeaders  } from '@angular/common/http';
import {  Observable  } from 'rxjs';
import {  Global  } from './global';

@Injectable()
export class ProductoService{
    public productos : Producto[];
    public url: string;
    
    constructor(
        public _http : HttpClient
    ){
        this.url = Global.url_services;
    }

    getProductos():Observable<any>{
        return this._http.get(this.url + 'lista-catalogo');
    }
}