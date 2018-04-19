import { FollowerService } from './../services/followers.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'assign8',
  templateUrl: './assign8.component.html',
  styleUrls: ['./assign8.component.css']
})
export class Assign8Component implements OnInit {

  followers: any[];
  constructor(private service: FollowerService) { }

  ngOnInit() {
    this.service.getAll().subscribe(followers => {
      this.followers = followers;
    })
  }

}
