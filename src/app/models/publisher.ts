export class Publisher {
    id: number;
    publisher: string;

    constructor(id: number, publisher?: string) {
        this.id = id;
        this.publisher = publisher || '';
    }
}
