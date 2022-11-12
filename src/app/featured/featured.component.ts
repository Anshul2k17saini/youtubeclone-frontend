import { Component, OnInit } from '@angular/core';
import { VideoDto } from '../video-dto';
import { VideoService } from '../video.service';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent implements OnInit {

  featuredVideos: Array<VideoDto>=[]

  constructor(private videoService: VideoService) { 

  }

  ngOnInit(): void {

    this.videoService.getallvideo().subscribe(response=>{
      this.featuredVideos=response;
    })
       
  }

}
