
// 1. Capitalize the first letter
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// 2. Reverse a string
function reverseString(str) {
    return Array.from(str).reverse().join("");
}

// 3. Count words in a string
function wordCount(str) {
    if (str.trim() === "") return 0;
    return str.trim().split(/\s+/).length;
}

// 4. Convert string to title case
function titleCase(str) {
    return str.toLowerCase().replace(/\b\w/g, char => char.toUpperCase());
}

// 5. Remove extra spaces
function removeExtraSpaces(str) {
    return str.trim().replace(/\s+/g, " ");
}

// Export all five functions
module.exports = {
    capitalize,
    reverseString,
    wordCount,
    titleCase,
    removeExtraSpaces
};
