import {Component} from '@angular/core';

@Component({
    selector: "favorite",
    template: `
        <p>Click star to favorite <span class="fa" [class.fa-star-o]="!isFavorite" [class.fa-star]="isFavorite" (click)="favoriteItem()"></span></p>
    `
})

export class FavoriteComponent {
    isFavorite = false;

    favoriteItem() {
        this.isFavorite=!this.isFavorite;
    }
}