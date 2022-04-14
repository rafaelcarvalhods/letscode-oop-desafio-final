import { Animal } from './Animal.js';
import { Cachorro } from "./Cachorro.js";
import { Gato } from "./Gato.js";
import { Papagaio } from "./Papagaio.js";

const leao = new Animal("Leão", "mamífero");
console.log(leao);

const cachorro = new Cachorro("Dog", "mamífero");
console.log(cachorro);
console.log(cachorro.latir());
console.log(cachorro.comer());

const gato = new Gato("Cat", "mamífero");
console.log(gato);
console.log(gato.miar());
console.log(gato.comer());

const papagaio = new Papagaio("Louro", "Ave");
console.log(papagaio);
console.log(papagaio.cantar());
console.log(papagaio.comer());

