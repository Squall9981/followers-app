import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {
  month: number;
  year: number;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.month = +params.get("month");
      this.year = +params.get("year");
    })
    // let params = this.route.snapshot.paramMap;
    // this.year = +params.get("year");
  }

  viewAll() {
    this.router.navigate(['/']);
  }

}
