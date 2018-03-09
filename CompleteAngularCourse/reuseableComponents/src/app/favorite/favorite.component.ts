import {Component, Input, Output, EventEmitter, ViewEncapsulation} from '@angular/core';

@Component({
    selector: "favorite",
    templateUrl: './favorite.component.html',
    //2 Can write styles inline, can use both 1 and 2.
    //Angular uses the style definition that comes last, it ignores the other. Styles in template overwrite these.
    styles: [`
        .fa {
            color: green;
        }
    `],
    //1 way to apply styles
    styleUrls: ['./favorite.component.css'],
    //Add input string array to mark fields as input fields.
    //Problem: If field is renamed and not updated in this list, then it breaks the input property.
    //If an item is put in the list here, it creates a new field behind the scenes that doesn't tie to any field in the component.
    //inputs: ["isFavorite"]
    //Emulated = emulates showadow DOM
    //Native applies actual Shadow DOM, but in order to use bootstrap classes on shadow dom, bootstrap needs to be imported to that specifid DOM, it sucks.
    encapsulation: ViewEncapsulation.Emulated
})

export class FavoriteComponent {
    //One way to mark as in put, is to use the input decorator
    //pass in string to input to set alias. Works nice if the variable in component is changed, keeps contract of component stable.
    @Input("is-favorite") isFavorite = false;
    @Output("change") click = new EventEmitter();

    //isFavorite = false;

    favoriteItem() {
        this.isFavorite=!this.isFavorite;
        //Emit event to listeners (app.component.html in this case).
        //name must match output event listener in the component it is being used in.
        //Can pass value in emit() and it is available to all listeners listening to that event.
        this.click.emit({newValue: this.isFavorite});
    }
}

export interface FavoriteChangedEventArgs {
    newValue: boolean
  }