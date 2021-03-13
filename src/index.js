module.exports = function toReadable(number) {
    var ones = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    var tens = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    if (number === 0) return "zero";

    if (number < 20) {
        return ones[number];
    }

    var numString = number.toString();

    if (numString.length === 2) {
        const actualTens = tens[numString[0]];
        return number % 10 === 0
            ? actualTens
            : actualTens + " " + ones[numString[1]];
    }

    if (numString.length === 3) {
        const actualHundreds = ones[numString[0]] + " hundred";
        return number % 100 === 0
            ? actualHundreds
            : actualHundreds + " " + toReadable(number % 100);
    }
};
