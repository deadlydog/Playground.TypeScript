// Use the node package to write jokes to the console.
const devpun = require("devpun");

console.log(devpun.random()); // returns a random joke
console.log(devpun.random("react")); // returns a random react joke
console.log(devpun.list()); // returns an array of all jokes
console.log(devpun.list("react")); // returns an array of all react jokes
