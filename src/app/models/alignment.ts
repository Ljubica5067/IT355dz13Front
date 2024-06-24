export class Alignment {
    id: number;
    alignment: string;

    constructor(id: number, alignment?: string) {
        this.id = id;
        this.alignment = alignment || '';
    }
}
