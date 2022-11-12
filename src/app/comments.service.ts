import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private httpclient: HttpClient) { 

  }

  postComment(commentDto: any)
  {
    this.httpclient.post("")
  }
}
