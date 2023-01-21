const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const inpArr = [];
    for (let i = 0; i < expr.length; i += 10) {
    inpArr.push(expr.slice(i, i + 10));
    }

    const newArr = Object.keys(MORSE_TABLE);
    const newArr2 = Object.values(MORSE_TABLE);
    const encript = [];
    for (i = 0; i < newArr.length; i++) {
    encript.push(newArr[i].replace(/\./g, '10'));
    }
    const arr2 = encript.map(function(value) {
    return value.replace(/-/g, '11').padStart(10, '0');
    });


    let arr3 = [];
    for (let i = 0; i < inpArr.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
    if (inpArr[i] === '**********') {
        arr3.push(' ');
    }
        if(inpArr[i] === arr2[j]) {
        arr3.push(newArr2[j]);
        } 
    }
    }
    const finStr = arr3.join('').replace(/ +/g, ' ').trim();
    return finStr;
}

module.exports = {
    decode
}