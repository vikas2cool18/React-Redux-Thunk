// higher order functions
//A function which takes function as argument and or returns function as a value

// a function passed as an argument to another function ia a callback function

const numbers=[10,15,20,25,30]
numbers.filter(function(ele) {
    return ele%2==0
})