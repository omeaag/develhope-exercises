// Exercise 3 - Create and use CommonJS modules

// Create a script that uses module.exports to export a function.
// Create another script that uses require() to import the function and then calls it.

module.exports = function sayMyName(name) {
  console.log("welcome: " + name);
};
