import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  courses: Array<object>;
  viewMode = "somethingElse";
  canSave = true;
  
  //If assignee is null, page won't load due to error. Can use ngIf to only render object if object is not null.
  //Another way is to keep the span in the DOM but not render the name of the assignee if it is full using safe traversal operator. (task.asignee?.name)
  //Angular ignores asignee object if it is null.
  task = {
    title: "Review Applications",
    assignee: {
      name: "John Smith"
    }
  };


  onAdd() {
    this.courses.push({id:4, name:"course4"})
  }

  onRemove(course) {
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }

  onChange(course) {
    course.name="updated";
  }

  loadCourses() {
    this.courses = [
      {id:1, name:"course1"},
      {id:2, name:"course2"},
      {id:3, name:"course3"},
    ]
  }

  trackCourse(index, course) {
    return course ? course.id : undefined;
  }

}
