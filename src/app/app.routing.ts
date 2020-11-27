import {  ModuleWithProviders  } from '@angular/core';
import {  Routes, RouterModule  } from '@angular/router';

//Importar  Components
import {  InicioComponent  } from './components/inicio/inicio.component';
import {  LoginComponent  } from './components/login/login.component';
import {  CampaniasComponent  } from './components/campanias/campanias.component';
import {  CondicionComponent  } from './components/condicion/condicion.component';
import {  ImagenesProductoComponent  } from './components/imagenes-producto/imagenes-producto.component';
import {  VideosComponent  } from './components/videos/videos.component';
import {  ErrorComponent  } from './components/error/error.component';
import {  CheckLoginGuard  } from './guards/check-login.guard';
import {  MarcaComponent  } from './components/marca/marca.component';

//Array de rutas
const appRoutes: Routes = [
    { 
        path: "", 
        component: LoginComponent
    },
    { 
        path: "login", 
        component: LoginComponent
    },
    { 
        path: "inicio", 
        component: InicioComponent,
        canActivate: [CheckLoginGuard]
    },
    { 
        path: "campanias", 
        component: CampaniasComponent,
        canActivate: [CheckLoginGuard]
    },
    { 
        path: "condicion-comercial", 
        component: CondicionComponent,
        canActivate: [CheckLoginGuard]
    },
    { 
        path: "catalogo-productos", 
        component: ImagenesProductoComponent,
        canActivate: [CheckLoginGuard]
    },
    { 
        path: "videos", 
        component: VideosComponent,
        canActivate: [CheckLoginGuard]
    },
    { 
        path: "catalogo-productos/marcas/:brand", 
        component: MarcaComponent,
        canActivate: [CheckLoginGuard]
    },
    { 
        path: "**", 
        component: ErrorComponent
    }
]

//Exportar module
export const appRoutingProviders: any[] = [];
export const routing : ModuleWithProviders<any> = RouterModule.forRoot(appRoutes); 