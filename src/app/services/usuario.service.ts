import {  Injectable  } from '@angular/core';
import {  Usuario  } from '../models/usuario';
import {  HttpClient, HttpHeaders  } from '@angular/common/http';
import {  Observable  } from 'rxjs';
import {  Global  } from './global';

@Injectable ()
export class UsuarioService{
    public usuario: Usuario[];
    public url: string;

    constructor(
        public _http: HttpClient
    ){
        this.url = Global.url_services;
    }

    getUsuario(id:string ):Observable<any>{
        return this._http.get(this.url + 'lista-usuarios/' + id);
    }

    /*getUsuario():Observable<any>{
        return this._http.get(this.url + 'usuarios');
    }*/

    logIn(){
        return localStorage.getItem('id');
    }
}