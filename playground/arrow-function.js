let multiply = (x) => {
    let result = x * x;
    return result;
};

/* can be simply if only need one statement */
let multiplyArrow = (x) => x * x;

console.log(multiply(12))
console.log(multiplyArrow(12))

/* more than */
let user = {
    name: 'Indra Kusuma',
    sayHi: () => {
        console.log(`Hi ${this.name}`)
    },
    sayHiReguler () {
        console.log(`Hi ${this.name}`)
    }
}
/* 
    * arrow function not working for access own variable in object | Arrow functions do not have their own this.
    * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions 
*/

user.sayHi()
/* must to be using reguler function */
user.sayHiReguler()