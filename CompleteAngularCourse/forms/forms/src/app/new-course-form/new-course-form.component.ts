import { Component } from '@angular/core';

@Component({
  selector: 'new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent {

  categories = [
    {id: 1, value: "Development"},
    {id: 2, value: "Art"},
    {id: 3, value: "Languages"}
  ];

  submit(course) {
    console.log(course);
  }

}
