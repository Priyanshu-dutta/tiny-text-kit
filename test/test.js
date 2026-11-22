
const assert = require("assert");

const {
    capitalize,
    reverseString,
    wordCount,
    titleCase,
    removeExtraSpaces
} = require("../index");

// Test capitalize
assert.strictEqual(capitalize("hello"), "Hello");

// Test reverseString
assert.strictEqual(reverseString("hello"), "olleh");

// Test wordCount
assert.strictEqual(wordCount("Hello how are you"), 4);

// Test titleCase
assert.strictEqual(titleCase("hello world"), "Hello World");

// Test removeExtraSpaces
assert.strictEqual(removeExtraSpaces("hello    world"), "hello world");

console.log("All 5 tests passed successfully!");
