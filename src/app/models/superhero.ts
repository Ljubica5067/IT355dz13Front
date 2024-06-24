import { Gender } from "./gender";

export class Superhero {
    id?: number;
    superHeroName: string;
    fullName: string;
    gender: Gender;
    eyeColour: any;
    hairColour: any;
    skinColour: any;
    race: any;
    publisher: any;
    alignment: any;
    heightCm: number;
    weightKg: number;
    superpower: any;

    constructor(superHeroName: string, fullName: string, gender: Gender, eyeColour: any, hairColour: any, skinColour: any, race: any, publisher: any, alignment: any, heightCm: number, weightKg: number, superpower: any, id?: number,) {
        this.id = id;
        this.superHeroName = superHeroName;
        this.fullName = fullName;
        this.gender = gender;
        this.eyeColour = eyeColour;
        this.hairColour = hairColour;
        this.skinColour = skinColour;
        this.race = race;
        this.publisher = publisher;
        this.alignment = alignment;
        this.heightCm = heightCm;
        this.weightKg = weightKg;
        this.superpower = superpower;
    }
}
