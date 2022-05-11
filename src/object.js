let userA = {
    "firstName": "Anakin",
    "lastName": "Lusso",
    "age": 30,
    "address": {
        "city": "New York",
        "zipCode": 1000
    },
    "hobbies": ["cinema", "walking"]
}
let userB = {
    "firstName": "Amanda",
    "lastName": "Fry",
    "age": 20,
    "address": {
        "city": "LA",
        "zipCode": 1001
    },
    "hobbies": ["fashion", "make up"]
}
let info;
info = userA.firstName;
info = userA.lastName;
info = userA["age"];
info = userA.address.city;
info = userA.address.zipCode;
info = userA.hobbies[0];
info = userA.hobbies[1];

let users = [
    userA,
    userB
];
info = users[1];
console.log(info);
