export class Superpower {
    id: number;
    powerName: string;

    constructor(id: number, powerName?: string) {
        this.id = id;
        this.powerName = powerName || '';
    }
}
