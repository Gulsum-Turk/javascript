var myname = document.querySelector("#myName")
const gunler = {
    "Sun": "Pazar",
    "Mon": "Pazartesi",
    "Tue": "Salı",
    "Wed": "Çarşamba",
    "Thu": "Perşembe",
    "Fri": "Cuma",
    "Sat": "Cumartesi",
  };

function istek() {
    // kulanıcıdan bir popart ile bilgi alır ve html sayfasına yazdırır.
    var isim=prompt("Bir değer giriniz","lütfen sadece kelime giriniz..")
    return isim
    
  }
  function showTime() {
   
    let today=new Date()
    let todayy= Date()
    let gun = todayy.split(" ")
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    
  
    // Tarih ve saati istediğiniz formatta gösterin
    let timeElement = document.getElementById("myClock");
    timeElement.innerHTML = `${hours}:${minutes}:${seconds} ${gunler[gun[0]]}`;
  }
  
  setInterval(showTime, 1000); // Her saniyede bir showTime fonksiyonunu çalıştır



  var isim = istek()
  myname.innerHTML =`${isim}`

 