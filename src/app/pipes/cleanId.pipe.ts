import {  Pipe, PipeTransform  } from '@angular/core';
@Pipe({  name: 'cleanId'  })

export class CleanId implements PipeTransform{
    transform(id: string){
        let re =(/[\s'/,.]/gi);
        let val = id.replace(re, "-");
        return val.replace((/[ñ']/gi), "n").toLowerCase();
    }
}