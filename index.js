module.exports = {
    "adder": (x, y) => {
        if (y == undefined)
            throw new Error("You must send two numbers")
        if (typeof x != "number")
            throw new Error("You must send two numbers, first argument received " + typeof x)
        if (typeof y != "number")
            throw new Error("You must send two numbers, second argument received " + typeof y)

        return x + y
    },
    "obscureName": (x) => {
        for (var i = 2; i < x; i++)
            if (x % i === 0) return false;
        return x > 1;
    },
    "checkPrimeNumber": (number) => {
        if (typeof number != "number")
            throw new Error("You must send a number, received " + typeof number)
        for (var i = 2; i < number; i++)
            if (number % i === 0) return false;
        return number > 1;
    }

}