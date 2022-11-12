import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css']
})
export class CallbackComponent implements OnInit {

  constructor(private userservice: UserService, private router: Router) {
    this.userservice.registerUser();
    this.router.navigateByUrl('');
  }

  ngOnInit(): void {
  }

}
