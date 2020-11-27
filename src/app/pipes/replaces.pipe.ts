import {  Pipe, PipeTransform  } from '@angular/core';

@Pipe({
    name: 'replaces'
})

export class ReplaceString implements PipeTransform{
    transform(value: string, regexValue: string, replaceValue: string): any {
        let regex = new RegExp(regexValue, 'g');
        return value.replace(regex, replaceValue);
    }
}