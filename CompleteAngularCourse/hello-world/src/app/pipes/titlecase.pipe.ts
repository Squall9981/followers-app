import { PipeTransform, Pipe } from "@angular/core";

@Pipe({name: 'titleCase'})
export class TitleCasePipe implements PipeTransform {

    transform(value: string) {
        let title: string;

        if(!value) {
            return null;
        } else {
            let words = value.split(" ");

            for(var i = 0; i < words.length; i++) {
                let word = words[i];
                if(i > 0 && this.isPreposition(word)) {
                    words[i] = word.toLowerCase();
                } else {
                    words[i] = this.capitalizeWord(word);
                }
            }
            return words.join(" ");
        }
    }

    private capitalizeWord(word: string): string {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }

    private isPreposition(word: string): boolean {
        const prepositions = ["to","the","of","for","is","a"];
        return prepositions.includes(word.toLowerCase());
    }
}