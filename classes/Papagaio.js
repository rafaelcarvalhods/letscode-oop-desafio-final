import { Animal } from './Animal.js';

class Papagaio extends Animal {
    constructor(nome, especie, cativeiro=false) {
        super(nome, especie, cativeiro=false);
        this.#cativeiro = cativeiro;
    }
    #cativeiro

    cantar() {
        return `O ${this.nome} está cantando!`
    }

    comer() {
        return `O ${this.nome} está comendo a fruta.`
    }

    

}


export { Papagaio };