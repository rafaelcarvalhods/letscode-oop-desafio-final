import {Animal} from './Animal.js';

class Gato extends Animal {
    constructor(nome, especie, siames=true) {
        super(nome, especie, siames);
        this.#siames = siames;
    }
    #siames

    miar() {
        return `O ${this.nome} está miando!`
    }

    comer() {
        return `O ${this.nome} está comendo o rato.`
    }

}


export { Gato };