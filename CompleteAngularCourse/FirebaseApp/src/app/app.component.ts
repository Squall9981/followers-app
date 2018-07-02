import { Component, OnDestroy } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses$;
  course$;
  author$;
  // courses: any[];
  // subscription: Subscription;

  constructor(db: AngularFireDatabase) {
    this.courses$ = db.list('/courses').snapshotChanges();
    this.course$ = db.object('/courses/1').snapshotChanges();
    this.author$ = db.object('/Authors/1').snapshotChanges();

    // this.subscription = db.list('/courses').snapshotChanges()
    //   .subscribe(courses => {
    //     this.courses = courses;
    //     console.log(this.courses);
    //   });
  }

  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }
}
