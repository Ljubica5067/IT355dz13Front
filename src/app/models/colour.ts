export class Colour {
    id: number;
    colour: string;

    constructor(id: number, colour?: string) {
        this.id = id;
        this.colour = colour || '';
    }
}
