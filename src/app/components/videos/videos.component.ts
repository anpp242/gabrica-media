import { Component, OnInit } from '@angular/core';
import { Videos } from '../../models/videos';
import { VideoService } from '../../services/video.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css'],
  providers: [VideoService]
})
export class VideosComponent implements OnInit {
  public videos : Videos[];
  public startPage : Number;
  public paginationLimit : Number;
  public marcas : any[] = [];
  public videosMarca : any[] = [];
  public marcaSeleccionada: string;

  constructor(
    public _videoService : VideoService
  ) { 
    this.startPage = 0;
    this.paginationLimit = 6;
  }

  ngOnInit(): void {
    this._videoService.getVideos().subscribe(
      response =>{
        if(response){
          this.videos = response;
        }else{}
        //console.log(this.videos);

        this.videos.forEach(e => {
          const found = this.marcas.find(element => element.marca === e['marca']);
          if(found === undefined){
            this.marcas.push({'marca':e['marca'], 'logo': e['logo_marca']});
          }
        }); 
      },
      error=>{
        console.log('Error: ' + error);
      }
    ) 
    console.log(this.marcas);
  }

  showMoreItems()
  {
      this.paginationLimit = Number(this.paginationLimit) + 3;        
  }

  showLessItems()
  {
    this.paginationLimit = Number(this.paginationLimit) - 3;
  }

  mortrarVideos(marca: string){
    this.videosMarca = [];
    this.videos.forEach(e => {
      if(e['marca'] === marca){
        this.videosMarca.push(e);
      }
    });
    this.marcaSeleccionada = marca;
    console.log(this.videosMarca);
  }

}
