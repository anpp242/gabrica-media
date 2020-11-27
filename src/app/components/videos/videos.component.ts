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

  constructor(
    public _videoService : VideoService
  ) { 
    this.startPage = 0;
    this.paginationLimit = 3;
  }

  ngOnInit(): void {
    this._videoService.getVideos().subscribe(
      response =>{
        if(response){
          this.videos = response;
        }else{}
        console.log(this.videos);
      },
      error=>{
        console.log('Error: ' + error);
      }
    )
    
  }

  showMoreItems()
  {
      this.paginationLimit = Number(this.paginationLimit) + 3;        
  }

  showLessItems()
  {
    this.paginationLimit = Number(this.paginationLimit) - 3;
  }

}
