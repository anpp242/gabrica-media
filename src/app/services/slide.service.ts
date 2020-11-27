import {  Injectable  } from '@angular/core';
import {  Slides  } from '../models/slides';
import {  HttpClient, HttpHeaders  } from '@angular/common/http';
import {  Observable  } from 'rxjs';
import {  Global  } from './global';

@Injectable()
export class SlideService{
    public slides: Slides[];
    public url: string;

    constructor(
        public _http : HttpClient
    ){
        this.url = Global.url_services;
    }

    getSlides():Observable<any>{
        return this._http.get(this.url + 'lista-slide');
    }
}