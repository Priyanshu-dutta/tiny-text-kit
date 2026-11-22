
# Priyanshu Tiny Text Kit

A lightweight JavaScript utility package for common text manipulation tasks.

## Features

- Capitalize the first letter of a string
- Reverse a string
- Count words in a string
- Convert text into title case
- Remove extra spaces from text

## Installation

```bash
npm install priyanshu-tiny-text-kit
```

## Usage

```javascript
const {
    capitalize,
    reverseString,
    wordCount,
    titleCase,
    removeExtraSpaces
} = require("priyanshu-tiny-text-kit");

// Capitalize
console.log(capitalize("hello"));
// Hello

// Reverse string
console.log(reverseString("hello"));
// olleh

// Count words
console.log(wordCount("Hello how are you"));
// 4

// Title case
console.log(titleCase("hello world"));
// Hello World

// Remove extra spaces
console.log(removeExtraSpaces("hello    world"));
// hello world
```

## Functions

| Function | Description |
|---|---|
| capitalize() | Capitalizes the first letter |
| reverseString() | Reverses a string |
| wordCount() | Counts words |
| titleCase() | Converts text to title case |
| removeExtraSpaces() | Removes extra spaces |

## Running Tests

```bash
npm test
```

## Author

Priyanshu Dutta

## License

MIT
