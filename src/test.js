let urun1 = "iphone 12";
//let urun2 = "iphone 13";
//let urun3 = "iphone 13 pro";
console.log(urun2);

//ya da bir dizi içinde tanımlama yapabiliriz.

let urunler = ["iphone 12", "iphone 13", "iphone 13 pro"];
console.log(urunler[2]);

let renkler = ["gold", "black", "red"]

let fiyatlar = ["10000", "15000", "20000"];
console.log(fiyatlar[2])

console.log(`${urunler[0]}-${fiyatlar[0]}-${renkler[0]}`);
console.log(`${urunler[1]}-${fiyatlar[1]}-${renkler[1]}`);
console.log(`${urunler[2]}-${fiyatlar[2]}-${renkler[2]}`);


let kursAdi = "Javascript - Diziler";
console.log(kursAdi[2]);

let urun3 = [];
urun3[0] = "iphone 13 pro";
urun3[1] = "red";
urun3[2] = "20000";

let urun2 = [
    "iphone 13",
    15000,
    ["siyah", "beyaz", "mavi",["turuncu", "bej"]]
];

console.log(urun3[0]);
console.log(urun2[2]);
console.log(urun2[2][3][0]);
