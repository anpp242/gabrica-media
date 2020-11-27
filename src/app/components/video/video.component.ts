import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Videos } from '../../models/videos';
import { Global } from '../../services/global';
import { VideoService } from '../../services/video.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css'],
  providers: [VideoService]
})
export class VideoComponent implements OnInit {
  @Input() video : Videos;
  public url_recursos: string;

  constructor(
    public _videoService : VideoService
  ) {
    this.url_recursos = Global.url_videos;
  }

  ngOnInit(): void {
  }

  getBlob(res):Blob{
    return new Blob([res], {type: 'video/mp4'});
  }

}
