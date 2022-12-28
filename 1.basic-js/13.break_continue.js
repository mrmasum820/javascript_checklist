/*
//break
for (var i = 1; i <= 10; i++) {
    if (i == 5) {
        break;
    }
    document.write(" " + i);
}
*/

//continue
for (i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        continue;
    }
    console.log(i);
}
console.log('end');