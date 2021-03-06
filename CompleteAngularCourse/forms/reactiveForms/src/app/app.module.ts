import { SignupFormComponent } from './signup-form/signup-form.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import {ChangePasswordComponent2} from './change-password2/change-password.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    NewCourseFormComponent,
    ChangePasswordComponent,
    ChangePasswordComponent2
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
