const { describe, it } = require('mocha')

const expect = require('chai').expect
const platzom = require('..').default

describe('#platzom', function () {

    it('Si la palabra termina en "ar",  se le quitan esos caracteres....', function () {
        const translation = platzom("Programar")
        expect(translation).to.equal("Program")
    })
    it('Si la paabra inicia con z se le añade "pe" al final', function () {
        const translation = platzom("Zorro")
        const translation2 = platzom("Zarpar")

        expect(translation).to.equal("Zorrope")
        expect(translation2).to.equal("Zarppe")

    })
    it('Si la palabra traducida tiene mas de 10 letras se debe partir a l mitad con un guion ', function () {
        const translation = platzom("abecedario")
        expect(translation).to.equal("abece-dario")
    })
    it('Si la palabra oroginal es un palindromo, ninguna regla anteror cuenta y se devuelve la misma palabra intercalando mayusculas y minusculas', function () {
        const translation = platzom("sometemos")
        expect(translation).to.equal("SoMeTeMoS")
    })
})

