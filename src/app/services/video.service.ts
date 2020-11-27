import {  Injectable  } from '@angular/core';
import {  Videos  } from '../models/videos';
import {  HttpClient, HttpHeaders  } from '@angular/common/http';
import {  Observable  } from 'rxjs';
import {  Global  } from './global';

@Injectable()
export class VideoService{
    public videos : Videos[];
    public url: string;

    constructor(
        public _http : HttpClient
    ){
        this.url = Global.url_services;
    }

    getVideos():Observable<any>{
        return this._http.get(this.url + 'lista-video');
    }
}