import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  //templateUrl and template with inline html are two ways to use templates. Cannot mix these approaches.
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  post = {
    title: "Title",
    isFavorite: false
  }

  tweet = {
    body: "This is a tweet...",
    isLiked: false,
    likesCount: 0
  }

  //Can add type annotation.
  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs) {
    console.log(eventArgs);
  }

  onLiked(tweetLiked: boolean) {
    this.tweet.isLiked = tweetLiked;
    this.tweet.likesCount += tweetLiked ? 1 : -1;
  }
}
