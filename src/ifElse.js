let isLoggedIn = false;

if (isLoggedIn) {
    (5 > 4)
    console.log("Welcome");
}
/* if (!isLoggedIn) {
console.log("error") //else yerine !isloggenIn de kullanılabilir. ! değilse anlamı taşır.
} */
else {
    console.log("error")
}

let username = "Yunus Olcar";
let password = "12345";

if (username == "Yunus Olcar") {
    if (password == "12345") {
        console.log("welcome");
    } else {
        console.log("user password wrong!");
    }
}else {
    console.log("user id wrong!")
}
