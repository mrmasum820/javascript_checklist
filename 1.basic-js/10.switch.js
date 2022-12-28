// switch, case, break, default

/*
//digit spelling
// 0 - zero, 1 - one.......... 9 - nine, 10 - not a vaild digit
var digit = prompt('Enter any digit: ');
switch (digit) {
    case '0':
        console.log('Zero');
        break;
    case '1':
        console.log('one');
        break;
    case '2':
        console.log('two');
        break;
    case '3':
        console.log('three');
        break;
    case '4':
        console.log('four');
        break;
    case '5':
        console.log('five');
        break;
    case '6':
        console.log('six');
        break;
    case '7':
        console.log('seven');
        break;
    case '8':
        console.log('eight');
        break;
    case '9':
        console.log('nine');
        break;
    default:
        console.log('not a valid digit');
}
*/

// input a letter and check it is vowel or consonent using switch
var letter = prompt('Enter any letter: ');
letter = letter.toLowerCase();
switch (letter) {
    case 'a':
        console.log('vowel')
        break;
    case 'e':
        console.log('vowel')
        break;
    case 'i':
        console.log('vowel')
        break;
    case 'o':
        console.log('vowel')
        break;
    case 'u':
        console.log('vowel')
        break;
    default:
        console.log('consonent');
}