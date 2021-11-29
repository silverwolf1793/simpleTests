const { describe, it } = require("mocha")
const { expect } = require("chai")
const { obscureName } = require("../index")


// NEVER DO THIS
describe("The obscureName function", () => {
    it("should be true", () => {
        expect(obscureName(3)).to.be.true
    })
})