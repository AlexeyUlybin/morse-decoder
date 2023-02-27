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
    let array = []; 
    for (let i = 0; i < expr.length; i = i + 10) {
        array.push(expr.slice(i, i + 10));
    }
    for (let index = 0; index < array.length; index++) {
        let letterMor = [];
        for (let i = 0; i < array[index].length; i = i + 2) {
            letterMor.push(array[index].slice(i, i + 2));
        }
        for (let i = 0; i < letterMor.length; i++) {
            if (letterMor[i] === '00') {
                letterMor[i] = '';
            } else if (letterMor[i] === '10') {
                letterMor[i] = '.';
            } else if (letterMor[i] === '11') {letterMor[i] = '-';}
        }
        array[index] = letterMor.join('');
        for (let key in MORSE_TABLE) {
            if (key === array[index]) { array[index] = MORSE_TABLE[key];} else if (array[index] === '**********') {array[index] = ' ';}
        }
    }
    let out = array.join('');
    return out;
}

module.exports = {
    decode
}