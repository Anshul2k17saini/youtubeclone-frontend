import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { ActivatedRoute } from '@angular/router';
import { VideoService } from '../video.service';
import { VideoDto } from '../video-dto';

@Component({
  selector: 'app-save-video-details',
  templateUrl: './save-video-details.component.html',
  styleUrls: ['./save-video-details.component.css']
})
export class SaveVideoDetailsComponent implements OnInit {


  selestedFile!:File;

  videoId='';
  fileSelected=false;
  VideoUrl!:string
  thumbnailUrl!:string

  constructor(private activatedRoute:ActivatedRoute,private videoService: VideoService) { 
    
    this.videoId=this.activatedRoute.snapshot.params['videoId'];//to get video id from above url of page save-video-details/:videoId
     
    this.videoService.getVideo(this.videoId).subscribe(data=>{
       this.VideoUrl=data.videoUrl; 
       this.thumbnailUrl=data.thumbnailUrl;
    })

    this.saveVideoDetailsForm=new FormGroup({
          
      title:this.title,
      description:this.description,
      videoStatus:this.videoStatus


    })


  }
  ngOnInit(): void {
  }
  saveVideoDetailsForm: FormGroup;
  title: FormControl = new FormControl('');
  description: FormControl = new FormControl('');
  videoStatus: FormControl = new FormControl('');

  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  
  tags: string[] = [];

  selestedFileName ='';

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.tags.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();

  }

  remove(value:string): void {
    const index = this.tags.indexOf(value);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }
  
  onFileSelected($event: Event) {
    //@ts-ignore
    this.selestedFile=$event.target.files[0];
     this.fileSelected=true;
    this.selestedFileName=this.selestedFile.name;


    }

    onUpload() {
       this.videoService.uploadThumbnail(this.selestedFile,this.videoId).subscribe(data=>{
        console.log(data);

        //show an upload success notification
        // this.matsnackBar.open("Thumbnail upload success full","Ok");

       })

      }

      saveVideo(){
        //call the video service to make a http cal to our backend   
         const videoMetaData: VideoDto={
               
          "id": this.videoId,
          "title":this.saveVideoDetailsForm.get('title')?.value,
          "description":this.saveVideoDetailsForm.get('description')?.value,
          "tags": this.tags,
          "VideoStatus": this.saveVideoDetailsForm.get('VideoStatus')?.value,
          "videoUrl": this.VideoUrl,
          "thumbnailUrl":this.thumbnailUrl,
          "LikeCount":0,
          "dislikeCount":0,
          "viewCount":0


         }
        this.videoService.saveVideo(videoMetaData).subscribe(data=>{
             
            alert("data save successfully");

        });


      }

  

}
