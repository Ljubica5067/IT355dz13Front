export class Race {
    id: number;
    race: string;

    constructor(id: number, race?: string) {
        this.id = id;
        this.race = race || '';
    }
}
