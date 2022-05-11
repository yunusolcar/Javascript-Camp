let siparis1 =
{
    "siparisId": 101,
    "siparisTarihi": "31.12.2022",
    "odemeSekli": "kredi kartı",
    "kargoAdresi": {
        "mahalle": "Yahya Kaptan Mah.",
        "ilce": "izmit",
        "il": "Kocaeli"
    },
    "satinAlinanUrun": [
        {
            "urunId": 5,
            "urunBasligi": "iPhone 13 Pro",
            "urunUrl": "https://xsite.com/iphone-13-pro",
            "urunFiyat": 22000,
        },
        {
            "urunId": 6,
            "urunBasligi": "iPhone 13 Pro Max",
            "urunUrl": "https://xsite.com/iphone-13-pro-max",
            "urunFiyat": 25000
        }

    ]
};
let siparis2 =
{
    "siparisId": 102,
    "siparisTarihi": "30.12.2022",
    "odemeSekli": "kredi kartı",
    "kargoAdresi": {
        "mahalle": "Yahya Kaptan Mah.",
        "ilce": "izmit",
        "il": "Kocaeli"
    },
    "satinAlinanUrun": [
        {
            "urunId": 6,
            "urunBasligi": "iPhone 13 Pro Max",
            "urunUrl": "https://xsite.com/iphone-13-pro-max",
            "urunFiyat": 25000
        }

    ]
};
let musteri = {
    "musteriId": 12
}
let satici = {
    "firmaId": 34,
    "firmaAdi": "Apple Türkiye"
}

let siparis1Toplam = (siparis1.satinAlinanUrun[0].urunFiyat + siparis1.satinAlinanUrun[1].urunFiyat) * 1.18;
let siparis2Toplam = (siparis2.satinAlinanUrun[0].urunFiyat) * 1.18;

let toplamSiparis = siparis1Toplam + siparis2Toplam;
let siparisler = [siparis1, siparis2];


console.log("Sipariş 1: " + siparis1Toplam);
console.log("Sipariş 2: " + siparis2Toplam);
console.log("toplam ödenen miktar: ", toplamSiparis);



