import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { ModulosComponent } from './components/modulos/modulos.component';
import { CondicionesComercialesComponent } from './components/condiciones-comerciales/condiciones-comerciales.component';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { ImagenesProductoComponent } from './components/imagenes-producto/imagenes-producto.component';
import { VideosComponent } from './components/videos/videos.component';
import { CondicionComponent } from './components/condicion/condicion.component';
import { CampaniasComponent } from './components/campanias/campanias.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { from } from 'rxjs';
import { SubHeaderComponent } from './components/sub-header/sub-header.component';
import { CampaniaComponent } from './components/campania/campania.component';
import { ErrorComponent } from './components/error/error.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { VideoComponent } from './components/video/video.component';
import { ProductoComponent } from './components/producto/producto.component';
import { SlideComponent } from './components/slide/slide.component';
import { SlidesComponent } from './components/slides/slides.component';
import { HttpClientModule } from '@angular/common/http';
import { LoaderComponent } from './components/loader/loader.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';
import { MarcaComponent } from './components/marca/marca.component';
import { ReplaceString } from './pipes/replaces.pipe';
import { FilterPipeModule } from 'ngx-filter-pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    ModulosComponent,
    CondicionesComercialesComponent,
    LoginComponent,
    FooterComponent,
    ImagenesProductoComponent,
    VideosComponent,
    CondicionComponent,
    CampaniasComponent,
    InicioComponent,
    SubHeaderComponent,
    CampaniaComponent,
    ErrorComponent,
    VideoComponent,
    ProductoComponent,
    SlideComponent,
    SlidesComponent,
    LoaderComponent,
    MarcaComponent,
    ReplaceString
  ],
  imports: [
    BrowserModule,
    CarouselModule,
    routing,
    BrowserAnimationsModule,
    InfiniteScrollModule,
    HttpClientModule,
    ModalModule.forRoot(),
    FormsModule,
    FilterPipeModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
