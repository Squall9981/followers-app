import { CoursesService } from './courses.service';
import {Component} from '@angular/core';

@Component({
    selector: 'courses', // <courses> "courses" <div class="courses"> ".courses" <div id="courses"> "#courses"
    /*template: `
        <h2>{{ title }} </h2>
        <ul>
            <li *ngFor="let course of courses">{{course}}</li>
        </ul>
        <button class="btn btn-primary" [class.active]="isActive">Save</button>
        <button [style.backgroundColor]="isActive ? 'blue' : 'white'">Style Binding</button>
        <div (click)="onDivClicked()">
        <button (click)="onSave($event)">Event Binding</button>
        </div>
        <!--<input #email (keyup.enter)="onKeyUp(email.value)" />-->
        <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
    `*/
    /*template: `
        {{course.title | uppercase | lowercase}}<br/>
        {{course.students | number}}<br/>
        {{course.rating | number:'2.1-1'}}<br/>
        {{course.price | currency:'AUD':true:'3.2-2'}}<br/>
        {{course.releaseDate | date:'shortDate'}}<br/>
    `*/
    template: `{{text | summary: 10}}`
    //bind class to a field, if the field is true the class will go. [class.active]="isActive"
    //Prefix directives that modify the structure of the DOM, prefix with *
    //Events bubble up the DOM tree, button and div above both handle event.
    //can filter events. keyup.enter will only trigger when enter is pressed.
    //#email = template variable
    //two-way binding: [(ngModel)]
})

export class CoursesComponent {
    title = "List of courses";
    isActive = true;
    //data
    email="me@example.com";
    text="hey this is super long text that we will summarize with a custom pipefdsjlfj;ldkjaf;lkdja;flksj;flkja;sdkfj;akljf;lkdj;alfkjd;alfj";

    course={
        title: "The Complete Angular Course",
        rating: 4.9745,
        students: 30123,
        price: 190.95,
        releaseDate: new Date(2016,3,1)
    }

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

    //behavior or logic
    onKeyUp() {
        console.log(this.email);
    }

    //Logic for calling HTTP Service in components = Option 1
    //tightly couples logic to http endpoint - Issue 1
    //Can't reuse HTTP logic in other pages - Issue 2
    //Component should not include any logic other than presentation logic (view, DOM interaction, etc) - Issue 3
}