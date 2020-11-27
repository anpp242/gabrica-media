import {  Injectable  } from '@angular/core';
import {  Condicion  } from '../models/condicion';


@Injectable()
export class CondicionService{
    public condicion : Condicion[];

    constructor(){
        this.condicion = [
            new Condicion(1,'','','','','','',''),
            new Condicion(2,'','','','','','',''),
            new Condicion(3,'','','','','','',''),
            new Condicion(4,'','','','','','',''),
            new Condicion(5,'','','','','','',''),
            new Condicion(6,'','','','','','',''),
            new Condicion(6,'','','','','','',''),
            new Condicion(6,'','','','','','',''),
            new Condicion(6,'','','','','','',''),
            new Condicion(6,'','','','','','',''),
        ]
    }

    getCondicion(){
        return this.condicion;
    }
}