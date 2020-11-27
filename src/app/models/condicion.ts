export class Condicion{
    constructor(
        public id: number,
        public imagen_url: string,
        public logo_url: string,
        public titulo: string,
        public descripcion_corta: string,
        public descripcion: string,
        public segmento: string,
        public fecha_vigencia: string,
    ){}
}