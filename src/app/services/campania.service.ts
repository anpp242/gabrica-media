import {  Injectable  } from '@angular/core';
import {  Campania  } from '../models/campania';
import {  HttpClient, HttpHeaders  } from '@angular/common/http';
import {  Observable  } from 'rxjs';
import {  Global  } from './global';


@Injectable()
export class CampaniaService{
    public campania : Campania[];
    public url: string;

    constructor(
        public _http : HttpClient
    ){
        this.url = Global.url_services;
    }

    getCampania():Observable<any>{
        return this._http.get(this.url + 'lista-campanias');
    }
}