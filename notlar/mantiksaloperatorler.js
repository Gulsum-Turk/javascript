console.log(!!2);

// ==

var a = 10;
var b = "10";
console.log(a==b) // "Ekranda çıkan sonuç = true"

// ===

var a = 10;
var b = "10";
console.log(a===b) // "Ekranda çıkan sonuç = false"

// !=

var a = 10;
var b = "10";
console.log(a!=b)  // "Ekranda çıkan sonuç = false"
console.log(a!==b) // "Ekranda çıkan sonuç = true"

var c= "kodluyoruz"
var d= "javascript"
console.log(c!=d)  // "Ekranda çıkan sonuç = true"


// < <= > >=
var a = 10;
var b = 10;
console.log(a<b) // "Ekranda çıkan sonuç = false"

// &&

var a = 10;
var b = "kodluyoruz";
console.log(a>11 && b=="kodluyoruz") // "Ekranda çıkan sonuç = false"


// || 

var a = 10;
var b = "kodluyoruz";
console.log(a>11 || b=="kodluyoruz") // "Ekranda çıkan sonuç = true"

// !
// not: !! -> true

var a = 10;
var b = "kodluyoruz";
console.log(!(a>11 || b="kodluyoruz"))  "Ekranda çıkan sonuç = false"