function convertRomanToArabic() {
    var romanNumeral = document.getElementById('romanInput').value.toUpperCase();
    var arabicNum = romanToArabic(romanNumeral);

    if (arabicNum !== null) {
        document.getElementById('arabicInput').value = arabicNum;
        document.getElementById('result').innerText = '';
    } else {
        document.getElementById('result').innerText = 'Numero Romano errado';
    }
}

function convertArabicToRoman() {
    var arabicNum = document.getElementById('arabicInput').value;
    var romanNumeral = arabicToRoman(arabicNum);

    if (romanNumeral !== null) {
        document.getElementById('romanInput').value = romanNumeral;
        document.getElementById('result').innerText = '';
    } else {
        document.getElementById('result').innerText = 'Numero Arabico errado'
    }
}

function romanToArabic(romanNumeral) {
    var romanToArabicDict = {
        'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000
    };

    var arabicNum = 0;
    var prevValue = 0;

    for (var i = romanNumeral.length - 1; i >= 0; i--) {
        var value = romanToArabicDict[romanNumeral[i]];

        if (value >= prevValue) {
            arabicNum += value;
        } else {
            arabicNum -= value;
        }
        prevValue = value;
    }
    return arabicNum;
}

function arabicToRoman(arabicNum) {
    var arabicToRomanDict = [
        { value: 1000, numeral: 'M' },
        { value: 900, numeral: 'CM' },
        { value: 500, numeral: 'D' },
        { value: 400, numeral: 'CD' },
        { value: 100, numeral: 'C' },
        { value: 90, numeral: 'XC' },
        { value: 50, numeral: 'L' },
        { value: 40, numeral: 'XL' },
        { value: 10, numeral: 'X' },
        { value: 9, numeral: 'IX' },
        { value: 5, numeral: 'V' },
        { value: 4, numeral: 'IV' },
        { value: 1, numeral: 'I' }
    ];

    if (arabicNum < 1 || arabicNum > 3999) {
        return null;
    }

    var romanNumeral = '';

    for (var i = 0; i < arabicToRomanDict.length; i++) {
        var pair = arabicToRomanDict[i];
        var value = pair.value;
        var numeral = pair.numeral;

        while (arabicNum >= value) {
            romanNumeral += numeral;
            arabicNum -= value;
        }
    }

    return romanNumeral;
}



