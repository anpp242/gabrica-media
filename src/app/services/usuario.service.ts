import {  Injectable  } from '@angular/core';
import {  Usuario  } from '../models/usuario';
import {  HttpClient, HttpHeaders  } from '@angular/common/http';
import {  Observable  } from 'rxjs';
import {  Global  } from './global';

@Injectable ()
export class UsuarioService{
    public usuario: Usuario[];
    public url: string;
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': '',
        })
    };

    constructor(
        public _http: HttpClient
    ){
        this.url = Global.url_services;
    }

    getUsuario(id:string ):Observable<any>{
        return this._http.get(this.url + 'usuarios/' + id);
    }

    /*getUsuario():Observable<any>{
        return this._http.get(this.url + 'usuarios');
    }*/

    logIn(){
        return localStorage.getItem('id');
    }

    registrarEntrada(nit:any):Observable<any>{
        let params = JSON.stringify(nit);
        console.log(params)
        return this._http.post<any>(this.url + 'registrar-login',  params,  this.httpOptions);
    }
}