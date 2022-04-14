import { Animal } from './Animal.js';

class Cachorro extends Animal {
    constructor(nome, especie, raca="vira-lata") {
        super(nome, especie, raca);
        this.#raca = raca;
    }
    #raca

    latir() {
        return `O ${this.nome} está latindo!`
    }

    comer() {
        return `O ${this.nome}, da raça ${this.#raca}, está comendo sua ração.`
    }

    

}

export { Cachorro };