import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public nombre_Cliente: string;
  public segmento: string;
  public btn_cerrar: boolean;

  constructor(
    public _router: Router
  ) { 
    this.nombre_Cliente = localStorage.getItem('nombre');
    this.segmento = localStorage.getItem('segmento');
  }

  ngOnInit(): void {
  }

  MostrarCerarSesion(){
    this.btn_cerrar = true;
  }

  cerrarSesion(){
    localStorage.clear();
    this._router.navigate(['/']);
  }

}
