import { CoursesService } from './courses.service';
import {Component} from '@angular/core';

@Component({
    selector: 'courses', // <courses> "courses" <div class="courses"> ".courses" <div id="courses"> "#courses"
    template: `
        <h2>{{ title }} </h2>
        <ul>
            <li *ngFor="let course of courses">{{course}}</li>
        </ul>
        <button class="btn btn-primary"></button>
    `
    //Prefix directives that modify the structure of the DOM, prefix with *
})

export class CoursesComponent {
    title = "List of courses";

    courses;

    //Dependency Injection decouples class from service, need to register as provider in app.module.ts
    constructor(service: CoursesService) {
        //let service = new CoursesService(); //tightly couples component to service
        this.courses = service.getCourses();
    }

    //Logic for calling HTTP Service in components = Option 1
    //tightly couples logic to http endpoint - Issue 1
    //Can't reuse HTTP logic in other pages - Issue 2
    //Component should not include any logic other than presentation logic (view, DOM interaction, etc) - Issue 3
}