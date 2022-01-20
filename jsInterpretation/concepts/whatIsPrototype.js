// Prototypes are the mechanism by which JavaScript objects inherit features from one another.
// If you create object in JS world - in JS btw almost everything is object including function -
// almost all object has property called __proto__

// This __proto__ can be think of as link to another object in higher chain.
// Objects inherit properties and methods from its prototype ancestry.
// This is why we can call array methods like .sort() or .map() without using libraries
// simply because when we create an array object, that array is automatically linked to ancestry by prototype.

// When we call array.sort() and when js compiler engine from browser looks at it,
// it first looks the array properties and tries to figure out if sort is defined. if not, if looks at the prototype
// and goes up to the chain until finds it.

// if we want to add new properties to a function or method which will be shared across all the instance or objects
// protoype is the answer.

//JavaScript is a prototype based language, so,
//whenever we create a function using JavaScript, JavaScript engine adds a prototype property inside a function,
//Prototype property is basically an object (also known as Prototype object),
//where we can attach methods and properties in a prototype object,
// which enables all the other objects to inherit these methods and properties.
