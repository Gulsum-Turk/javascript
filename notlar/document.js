let baslik = document.querySelector("#title")
baslik.style.color="red";
console.log(baslik.innerHTML)

// id ye göre elemana ulaşma
// id ismi direk yazılır
const unicorn = document.getElementById('unicorn');

// tag ismine göre elemana ulaşma sırasıyla tag isimleri yazlır
const animals = document.getElementsByTagName('p');
// p taglarının tamamına ulaşır
// tüm etiketlere ulaşma
document.getElementsByTagName('*')

// class ismi ile elemana ulaşma
const kuslar = document.getElementsByClassName('kusu');

// queri ile tüm claslara ulaşma
const elems = document.querySelectorAll('.bird, .animal');
// bird ve animal claslı elemanların hepsine ulaşılır


/*
<form id="signup">
    <input type="text" name="email">
    <input type="tel" name="phone">
    <input type="date" name="date-of-birth">
</form>
*/ 
// yukarıdaki örnekte verlen tüm input elemanlarına ulaşmak için
const inpus = document.getElementById('signup').getElementsByTagName('input');// yada
// query selector ile id seçmek için başına diyez konur
// byid ile seçerken konmaz
// queri ile class seçerken başına nokta konur
// byclass ile seçerken konmaz
const inputs = document.querySelector('#signup').querySelectorAll('input');

document.innerHTML = "elemanın textini bu şekilde değiştiriyorum"
document.classList.add("btn") // elemana class ekleme yapıyorum
document.style.color="red" // stil veriyorum