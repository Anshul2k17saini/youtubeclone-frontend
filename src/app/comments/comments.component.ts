import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { values } from 'core-js/core/array';
import { CommentsService } from '../comments.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  @Input()
  videoId:string='';
 commentsForm: FormGroup

  constructor(private userService: UserService, private commentservice:CommentsService) { 
this.commentsForm=new FormGroup({

  Comment:new FormControl('comment'),
});

  }

  ngOnInit(): void {
  }

  postComment(){
    
const comment =this.commentsForm.get('comment')?.value;

    const commentDto={
      "commentText": comment,
      "authorId":this.userService.getUserId()
    }
  }


}
