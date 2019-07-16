Angular.io documentation

SUBCOMPONENTS

ComponentNameComponent (app/componentName/componentName.component.ts)

import { Component, OnInit } from ‘@angular/core’;
…
import { ComponentName, ComponentNameService } from ‘’;

@Component({
selector:’selectorName’,
template: `, templateUrl:`,
styleUrls:[]
})

export class ComponentNameComponent implements OnInit {
arrayName someService.getMethodName()
: ModelInterfaceNameTypeClass[] = []; //no var declaration but is typed

constructor(private someService : SomeService ) {}

ngOnInit(){
this..then( payload => this.arrayName = payload);
//or
this.arrayName = this.someService.getMethodName();
}
}
——————————

EXAMPLE
HeroesComponent (app/heroes/heroes.component.ts)

import { Component, Oninit } from ‘@angular/core’;

import { Hero, HeroService } from ‘./shared’; //import ModelInterfaceNameTypeClass , Service

@Component({
selector: ‘toh-heroes’,
template: `

<pre>{{ heroes | json }} </pre>

`
})

export class HeroesComponent implements OnInit {
heroes : Hero[] = [];

constructor(private heroService: HeroService) {}

ngOnInit() {
this.heroService.getHeroes().then(heroes => this.heroes = heroes);
//or
this.heroes = this.heroService.getHeroes();
}
 }

————————————————————————————
SERVICES

export the class service
constructor
function that returns data

export class ClassName {
constructor(){}
function(){}
}

——————————

ClassnameService (app/componentName/shared/classname.service.ts)

import {Injectable} from ‘@angular/core’;

//import interface
import { CONSTANT } from ‘./path-to-mockData’;

@Injectable()
export class ClassnameService{
():ArrayType[]//method to get some data
getMethodName{
return Promise.resolve( CONSTANT );
}
}

EXAMPLE
HeroeService (app/heroes/shared/hero.service.ts)

import {Injectable} from ‘@angular/core’;

//import interface
import { HEROES } from ‘./mock-heroes’;

@Injectable()
export class HeroService{
//method to get some data
getHeroes() :Hero[]{
return Promise.resolve( HEROES );
}
}

————————————————————————————

MODEL

ClassName (app/componentName/shared/classname.model.ts)
export class ClassName {
property: type;
}
——————————

EXAMPLE
(app/heroes/shared/hero.model.ts)
export class Hero {
id: number;
name: string;
}
——————————

EXAMPLE
_fake database_
HEROES (app/heroes/shared/mock-heroes.ts)

import { Hero } from './hero.model';

export const HEROES: Hero[] = [
{id: 1, name: 'Bombasto'},
{id: 2, name: 'Tornado'},
{id: 3, name: 'Magneta'},
];
