const palindromes = function (string) {
    let cleaned = string.toLowerCase().replace(/[^a-z0-9]/g, "");
    let reverse = cleaned.split("").reverse("").join("");

    return cleaned === reverse;
};

// Do not edit below this line
module.exports = palindromes;
