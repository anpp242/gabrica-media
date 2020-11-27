import {  Injectable  } from '@angular/core';
import {  HttpClient, HttpHeaders  } from '@angular/common/http';
import {  Observable  } from 'rxjs';
import {  Global  } from './global';

@Injectable()
export class ImagenesCatalogoService{
    public url: string;

    constructor(private _http: HttpClient){
        this.url = Global.url_services;
    }

    getImages(cod:string):Observable<any>{
        return this._http.get(this.url + 'lista-archivos/' + cod);
    }

}