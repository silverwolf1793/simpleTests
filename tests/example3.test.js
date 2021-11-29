const { describe, it } = require("mocha")
const { expect } = require("chai")
const { checkPrimeNumber } = require("../index")
const fake = require("faker")

// This its a simple example test
describe("The checkPrimeNumber function", () => {

    it("Should be a function", () => {
        expect(checkPrimeNumber).to.be.a("function")
    })

    it("Should be able to check if a number its a prime", () => {
        const primeNumbers = [101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379]
        const notPrimes = []

        /**
         * there are 50 primeNumbers on this test, thus we create 50 numbers that are NOT
         * primes by counting from 100 and avoiding saving numbers that we know are primes
         */
        for (var i = 0, number = 100; i < primeNumbers.length; i++, number++)
            if (!primeNumbers.includes(number))
                notPrimes.push(number)

        primeNumbers.forEach(prime => {
            expect(checkPrimeNumber(prime)).to.be.true
        })

        notPrimes.forEach(notPrime => {
            expect(checkPrimeNumber(notPrime)).to.be.false
        });
    })

    it("Should throw if not enough or wrong arguments are sent", () => {
        const test1 = () => {
            checkPrimeNumber()
        }
        const test2 = () => {
            checkPrimeNumber("1")
        }

        expect(test1).to.throw("You must send a number, received undefined")
        expect(test2).to.throw("You must send a number, received string")
    })
})