import { FollowerService } from './services/followers.service';
import { ErrorHandler } from '@angular/core';
import { AppErrorHandler } from './common/app-error-handler';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';


import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { PostService } from './services/post.service';
import { Assign8Component } from './assign8/assign8.component';


@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    Assign8Component
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    PostService,
    // Can import error handler to use this instead of ErrorHandler
    //Tells angular to use AppErrorHandler instead of Errorhandler.
    {provide: ErrorHandler, useClass: AppErrorHandler},
    FollowerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
