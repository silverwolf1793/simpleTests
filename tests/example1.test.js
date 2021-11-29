const { describe, it } = require("mocha")
const { expect } = require("chai")
const { adder } = require("../index")
const fake = require("faker")

// This its a simple example test
describe("The adder function", () => {

    it("Should be a function", () => {
        expect(adder).to.be.a("function")
    })

    it("Should be able to add numbers", () => {
        const number1 = fake.datatype.number()
        const number2 = fake.datatype.number()

        expect(adder(
            number1,
            number2
        )).to.be.equal(
            number1 + number2
        )
    })

    it("Should throw if not enough or wrong arguments are sent", () => {
        const test1 = () => {
            adder(1)
        }
        const test2 = () => {
            adder()
        }
        const test3 = () => {
            adder("1", 1)
        }
        const test4 = () => {
            adder(1, "1")
        }

        expect(test1).to.throw("You must send two numbers")
        expect(test2).to.throw("You must send two numbers")
        expect(test3).to.throw("You must send two numbers, first argument received string")
        expect(test4).to.throw("You must send two numbers, second argument received string")
    })
})