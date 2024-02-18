// listenin son öğesine erişme
// id si liste ulan ul nin içindeki son li ye ulaşır
let sonoge = document.querySelector("ul#liste>li:last-child")
//ilk öğeye erişir
let ilkoge = document.querySelector("ul#liste>li:first-child")

// listeye elemen ekleme
// eleman oluşturm: bir li elemanı oluşturuldu
let yenielemen = document.createElement("li")
yenielemen.innerHTML="yeni eleman"
// içine eklenecek id si liste olan ul ye ulaşma

let ul = document.querySelector("ul#liste")

ul.append(yenielemen) // listenin sonuna ekler
ul.prepend(yenielemen) // listenin başına ekler