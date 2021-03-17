import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UsuarioService]
})
export class LoginComponent implements OnInit {
  public usuarios : Usuario[];
  public usuario : any;
  public login : any;

  constructor(
    public _usuarioService: UsuarioService,
    private _router: Router
  ) { 
    this.login = {
      id_usuario: ''
    };
  }

  ngOnInit(): void {
    
  }

  onSubmit(){
    this._usuarioService.getUsuario(this.login.id_usuario).subscribe(
      response=>{
        this.usuarios = response;
        if(this.usuarios.length > 0){
          this.usuario = this.usuarios[0];
          //Local Storege
          localStorage.setItem('id', this.usuario.id_cliente);
          localStorage.setItem('nombre', this.usuario.nombre_cliente);
          localStorage.setItem('segmento', this.usuario.segmento);
          this._router.navigate(['/inicio']);
          //console.log(this.usuario);
          this.guardarSesion();
        }else{
          console.log('error');
          alert('El usuario no se ha encontrado');
        }        
      },error=>{
        console.log('error: ' + error)
      }
    );
  }

  guardarSesion(){
    const nitUsuario = {nitUsuario: this.usuario.id_cliente};
    this._usuarioService.registrarEntrada(nitUsuario).subscribe( 
      data =>{
        console.log(data);
      },err=>{
        console.log(err);
      }
    );
  }

}


