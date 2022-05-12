//Ex-0
function printWord(word, number) {
    for (let i = 0; i < number; i++) {
        console.log(word);
    }
}
printWord("Hello World", 2);

//Ex-1
function headsOrTails() {
    let random = Math.random(); //0-1
    if (random < 0.5) {
        console.log("heads");
    } else {
        console.log("tails");
    }
}
headsOrTails();

//Ex-2
function tamBolen(sayi) {
    let sayilar = [];
    for (let i = 2; i < sayi; i++) {
        if (sayi % i == 0) {
            sayilar.push(i);
        }
    }
    return sayilar;
}
console.log(tamBolen(15));
console.log(tamBolen(50));
console.log(tamBolen(220));