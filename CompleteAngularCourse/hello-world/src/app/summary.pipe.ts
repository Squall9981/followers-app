import {Pipe, PipeTransform} from '@angular/core';

//name is the pipe in the html markup
@Pipe({name: 'summary'})
export class SummaryPipe implements PipeTransform {
    transform(value: string, limit?: number) {
        if(!value) {
            return null;
        } else {
            let actualLimit = (limit) ? limit : 50;
            return value.substring(0,actualLimit) + '...';
        }
    }
}