import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from '../services/usuario.service';
import { Component, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckLoginGuard implements CanActivate {
  public login: any;

  constructor(
    private _router: Router
  ){
    this.login = localStorage.getItem('id');
  }

  canActivate(): boolean {
    if(this.login){
      return true;
    }else{
      this._router.navigate(['/']);
      return false;
    }
  }
  
}
