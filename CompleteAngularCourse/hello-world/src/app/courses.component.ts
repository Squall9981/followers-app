import { CoursesService } from './courses.service';
import {Component} from '@angular/core';

@Component({
    selector: 'courses', // <courses> "courses" <div class="courses"> ".courses" <div id="courses"> "#courses"
    template: `
        <h2>{{ title }} </h2>
        <ul>
            <li *ngFor="let course of courses">{{course}}</li>
        </ul>
        <button class="btn btn-primary" [class.active]="isActive">Save</button>
        <button [style.backgroundColor]="isActive ? 'blue' : 'white'">Style Binding</button>
        <div (click)="onDivClicked()">
        <button (click)="onSave($event)">Event Binding</button>
        </div>
        <input #email (keyup.enter)="onKeyUp(email.value)" />
    `
    //bind class to a field, if the field is true the class will go. [class.active]="isActive"
    //Prefix directives that modify the structure of the DOM, prefix with *
    //Events bubble up the DOM tree, button and div above both handle event.
    //can filter events. keyup.enter will only trigger when enter is pressed.
    //#email = template variable
})

export class CoursesComponent {
    title = "List of courses";
    isActive = true;

    courses;

    //Dependency Injection decouples class from service, need to register as provider in app.module.ts
    constructor(service: CoursesService) {
        //let service = new CoursesService(); //tightly couples component to service
        this.courses = service.getCourses();
    }

    onSave($event){
        $event.stopPropagation();
        console.log('button was clicked', $event);
    }

    onDivClicked() {
        console.log("div was clicked");
    }

    onKeyUp(email) {
        console.log(email);
    }

    //Logic for calling HTTP Service in components = Option 1
    //tightly couples logic to http endpoint - Issue 1
    //Can't reuse HTTP logic in other pages - Issue 2
    //Component should not include any logic other than presentation logic (view, DOM interaction, etc) - Issue 3
}