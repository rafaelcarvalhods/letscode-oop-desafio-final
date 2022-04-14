// Implementar a classe (Animal)
// Implementar um construtor
// Implementar propriedades privadas
// Implementar três métodos públicos
// Implementar três classes filhas (Papagaio, Cachorro, Gato), de forma que elas herdem da classe pai (Animal)
// Implemente um novo método em cada uma das classes filhas
// Sobrescreva o construtor em cada uma das classes filhas
// Sobrescreva um dos métodos herdados da classe pai

class Animal {
    constructor (nome, especie) {
        this.#nome = nome
        this.#especie = especie
    }

    #nome
    #especie

    get nome() {
        return this.#nome;
    }
    get especie() {
        return this.#especie;
    }

    comer() {
        return `O ${this.#nome} está alimentado.`
    }

    procriar() {
        return `O ${this.#nome} está procriando.`
    }

    dormir() {
        return `O ${this.#nome} está dormindo.`
    }
}

export { Animal };


