import { Component, OnInit } from '@angular/core';
import { stringToKeyValue } from '@angular/flex-layout/extended/style/style-transforms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { VideoService } from '../video.service';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css']
})
export class VideoDetailComponent implements OnInit {



videoId!: string;
VideoUrl!: string;
VideoAvailable: boolean=false;
  videotitle!: string;
  videodescription!: string;
  LikeCount: number=0;
  dislikeCount: number=0;
  viewCount: number=0;
  showUnSubscribeButton: boolean=false;
  showSubscribeButton: boolean=true;


  constructor(private activatedRoute:ActivatedRoute,private videoService:VideoService,private userService: UserService) { 
    
    this.videoId=this.activatedRoute.snapshot.params['videoId'];
    this.videoService.getVideo(this.videoId).subscribe(data=>{
      this.VideoUrl=data.videoUrl; 
      this.videotitle=data.title;
      this.videodescription=data.description;
      //this.video tags=data.tags;
      this.VideoAvailable=true;
      this.LikeCount=data.LikeCount;
      this.dislikeCount=data.dislikeCount;
      this.viewCount=data.viewCount;
     
   })
  }

  ngOnInit(): void {
  }

  likeVideo() {
    this.videoService.likeVideo(this.videoId).subscribe(data => {
      this.LikeCount= data.LikeCount;
      this.dislikeCount = data.dislikeCount;
    })
  }

  disLikeVideo() {
    this.videoService.disLikeVideo(this.videoId).subscribe(data => {
      this.LikeCount= data.LikeCount;
      this.dislikeCount = data.dislikeCount;
    })
 }

 subscribeToUser() {
  let userId = this.userService.getUserId();
  console.log(userId);
  this.userService.subscribeToUser(userId).subscribe(data => {
    this.showUnSubscribeButton = true;
    this.showSubscribeButton = false;
  })
}

unSubscribeToUser() {
   let userId = this.userService.getUserId();
  this.userService.unSubscribeUser(userId).subscribe(data => {
    this.showUnSubscribeButton = false;
    this.showSubscribeButton = true;
  })
}
    

}
