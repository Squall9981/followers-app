import { Component } from '@angular/core';

@Component({
  selector: 'assignment6',
  templateUrl: './assignment6.component.html',
  styleUrls: ['./assignment6.component.css']
})
export class Assignment6Component {
  categories = [
    {id: 1, value: "Development"},
    {id: 2, value: "Art"},
    {id: 3, value: "Languages"}
  ]

  log(courseName) {
    console.log(courseName);
  }
}
