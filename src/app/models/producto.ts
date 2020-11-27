export class Producto{
    constructor(
        public id: number, 
        public nombre_producto: string, 
        public marca: object, 
        public lago_de_la_marca: string, 
        public tags: object, 
        public especie: string, 
        public categoria: object, 
        public especialidad_de_producto: object, 
        public subcategoria_de_producto: object
    ){}
}