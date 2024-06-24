import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Alignment } from 'src/app/models/alignment';
import { Colour } from 'src/app/models/colour';
import { Gender } from 'src/app/models/gender';
import { Publisher } from 'src/app/models/publisher';
import { Race } from 'src/app/models/race';
import { Superhero } from 'src/app/models/superhero';
import { Superpower } from 'src/app/models/superpower';
import { OptionsService } from 'src/app/services/options/options.service';
import { SuperheroService } from 'src/app/services/superhero/superhero.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  superheroes!: Superhero[];
  addHeroeForm!: FormGroup;
  newSuperhero!: Superhero;
  updateSuperheroObj!: Superhero;
  superheroIdUpdate!: any;

  genderOpcije!: any[];
  colourOpcije!: any[];
  raceOpcije!: any[];
  publisherOpcije!: any[];
  alignmentOpcije!: any[];
  superpowerOpcije!: any[];

  showAdd!: boolean;
  showUpdate!: boolean;
  
  constructor(private _superheroService: SuperheroService, private _optionsService: OptionsService, private fb: FormBuilder){
  }

  ngOnInit(): void {
    this.getAllSuperheroes();
    this.createAddHeroeForm();
    this.getAllOptions();
  }

  getAllSuperheroes(){
    this._superheroService.getSuperheroes().subscribe(res => {
      this.superheroes = res;
    })
  }

  getAllOptions(){
    this._optionsService.getAllGender().subscribe(data => {
      this.genderOpcije = data;
    });

    this._optionsService.getAllColour().subscribe(data => {
      this.colourOpcije = data;
    });

    this._optionsService.getAllRace().subscribe(data => {
      this.raceOpcije = data;
    });

    this._optionsService.getAllPublisher().subscribe(data => {
      this.publisherOpcije = data;
    });

    this._optionsService.getAllAlignment().subscribe(data => {
      this.alignmentOpcije = data;
    });

    this._optionsService.getAllSuperpower().subscribe(data => {
      this.superpowerOpcije = data;
    });
  }

  createAddHeroeForm(){
    this.addHeroeForm = this.fb.group({
      superHeroName: ['', Validators.required],
      fullName: ['', Validators.required],
      gender: ['', Validators.required],
      eyeColour: ['', Validators.required],
      hairColour: ['', Validators.required],
      skinColour: ['', Validators.required],
      race: ['', Validators.required],
      publisher: ['', Validators.required],
      alignment: ['', Validators.required],
      heightCm: ['', Validators.required],
      weightKg: ['', Validators.required],
      superpower: ['', Validators.required]
    })
  }

  addSuperhero(){
    let superHeroName = this.addHeroeForm.value.superHeroName;
    let fullName = this.addHeroeForm.value.fullName;
    let gender = this.addHeroeForm.value.gender;
    let eyeColour = this.addHeroeForm.value.eyeColour;
    let hairColour = this.addHeroeForm.value.hairColour;
    let skinColour = this.addHeroeForm.value.skinColour;
    let race = this.addHeroeForm.value.race;
    let publisher =  this.addHeroeForm.value.publisher;
    let alignment = this.addHeroeForm.value.alignment;
    let heightCm = this.addHeroeForm.value.heightCm;
    let weightCm = this.addHeroeForm.value.weightKg;
    let superpower = this.addHeroeForm.value.superpower;

    let superpowers: Superpower[] = [];

    superpower.map((el: any) => {
      superpowers.push(new Superpower(el));
    })

    this.newSuperhero = new Superhero(
      superHeroName, 
      fullName,
      new Gender(Number.parseInt(gender)),
      new Colour(Number.parseInt(eyeColour)),
      new Colour(Number.parseInt(hairColour)),
      new Colour(Number.parseInt(skinColour)),
      new Race(Number.parseInt(race)),
      new Publisher(Number.parseInt(publisher)),
      new Alignment(Number.parseInt(alignment)),
      Number.parseInt(this.addHeroeForm.value.heightCm),
      Number.parseInt(this.addHeroeForm.value.weightKg),
      superpowers
    );

    console.log(this.newSuperhero);

    this._superheroService.addSuperhero(this.newSuperhero)
    .subscribe(res => {
      console.log(res);
      alert("Superhero added successfully");
      let closebtn = document.getElementById("close");
      closebtn?.click();
      this.addHeroeForm.reset();
      this.getAllSuperheroes();
    },
    err => {
      alert("Something went wrong");
    }
    )

  }

  deleteSuperhero(id?: number){
    this._superheroService.deleteSuperheroById(id)
    .subscribe(res => {
      alert("Superhero deleted");
      this.getAllSuperheroes();
    }, err => {
      alert("Something went wrong");
    })
  }

  clickAddSuperhero(){
    this.addHeroeForm.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }

  onEdit(superhero: Superhero){
    this.showAdd = false;
    this.showUpdate = true;
    this.superheroIdUpdate = superhero.id;
    this.addHeroeForm.controls['superHeroName'].setValue(superhero.superHeroName);
    this.addHeroeForm.controls['fullName'].setValue(superhero.fullName);
    this.addHeroeForm.controls['gender'].setValue(superhero.gender.id);
    this.addHeroeForm.controls['eyeColour'].setValue(superhero.eyeColour.id);
    this.addHeroeForm.controls['hairColour'].setValue(superhero.hairColour.id);
    this.addHeroeForm.controls['skinColour'].setValue(superhero.skinColour.id);
    this.addHeroeForm.controls['race'].setValue(superhero.race.id);
    this.addHeroeForm.controls['publisher'].setValue(superhero.publisher.id);
    this.addHeroeForm.controls['alignment'].setValue(superhero.alignment.id);
    this.addHeroeForm.controls['heightCm'].setValue(superhero.heightCm);
    this.addHeroeForm.controls['weightKg'].setValue(superhero.weightKg);
    this.addHeroeForm.controls['superpower'].setValue(superhero.superpower);
  }

  updateSuperhero(){
    let superHeroName = this.addHeroeForm.value.superHeroName;
    let fullName = this.addHeroeForm.value.fullName;
    let gender = this.addHeroeForm.value.gender;
    let eyeColour = this.addHeroeForm.value.eyeColour;
    let hairColour = this.addHeroeForm.value.hairColour;
    let skinColour = this.addHeroeForm.value.skinColour;
    let race = this.addHeroeForm.value.race;
    let publisher =  this.addHeroeForm.value.publisher;
    let alignment = this.addHeroeForm.value.alignment;
    let heightCm = this.addHeroeForm.value.heightCm;
    let weightCm = this.addHeroeForm.value.weightKg;
    let superpower = this.addHeroeForm.value.superpower;

    let superpowers: Superpower[] = [];

    superpower.map((el: any) => {
      superpowers.push(new Superpower(el));
    })

    this.updateSuperheroObj = new Superhero(
      superHeroName, 
      fullName,
      new Gender(Number.parseInt(gender)),
      new Colour(Number.parseInt(eyeColour)),
      new Colour(Number.parseInt(hairColour)),
      new Colour(Number.parseInt(skinColour)),
      new Race(Number.parseInt(race)),
      new Publisher(Number.parseInt(publisher)),
      new Alignment(Number.parseInt(alignment)),
      Number.parseInt(this.addHeroeForm.value.heightCm),
      Number.parseInt(this.addHeroeForm.value.weightKg),
      superpowers
    );

    this.updateSuperheroObj.id = Number.parseInt(this.superheroIdUpdate);

    console.log(this.updateSuperheroObj);

    this._superheroService.updateSuperhero(this.updateSuperheroObj)
    .subscribe(res => {
      console.log(res);
      alert("Superhero updated successfully");
      let closebtn = document.getElementById("close");
      closebtn?.click();
      this.addHeroeForm.reset();
      this.getAllSuperheroes();
    },
    err => {
      alert("Something went wrong");
    }
    )
  }


}
