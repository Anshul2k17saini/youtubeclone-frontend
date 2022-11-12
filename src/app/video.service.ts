import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getMatIconNoHttpProviderError } from '@angular/material/icon';
import { FileSystemFileEntry } from 'ngx-file-drop';
import { Observable } from 'rxjs';
import { uploadresponse } from './upload-video/uploadresponse';
import { VideoDto } from './video-dto';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  

  constructor(private httpClient: HttpClient) { }



  uploadvideo(fileEntry:File):Observable<uploadresponse> {

    const formData = new FormData()
    formData.append('file', fileEntry, fileEntry.name)
    //Http post call to upload video
    return this.httpClient.post<uploadresponse>("http://localhost:8080/api/videos/",formData);
    
  }

  uploadThumbnail(fileEntry:File,videoId:string):Observable<string> {

    const formData = new FormData()
    formData.append('file', fileEntry, fileEntry.name)
        formData.append('videoId',videoId);


    //Http post call to upload thumnail
    return this.httpClient.post("http://localhost:8080/api/videos/thumbnail",formData,{
      responseType:'text'
    }); 
  }

  getVideo(videoId: string):Observable<VideoDto>{

  return this.httpClient.get<VideoDto>("http://localhost:8080/api/videos/"+videoId);

  }

  saveVideo(videoMetaData: VideoDto):Observable<VideoDto> {

    return this.httpClient.put<VideoDto>("http://localhost:8080/api/videos/",videoMetaData);
    
  }

  getallvideo(): Observable<Array<VideoDto>>{
    
    return this.httpClient.get<Array<VideoDto>>("http://localhost:8080/api/videos");

  }

  likeVideo(videoId: string) :Observable<VideoDto>{
    return  this.httpClient.post<VideoDto>("http://localhost:8080/api/videos/"+videoId+"/like", null)
  }

  disLikeVideo(videoId: string) :Observable<VideoDto>{
    return  this.httpClient.post<VideoDto>("http://localhost:8080/api/videos/"+videoId+"/like", null)
  }

}
