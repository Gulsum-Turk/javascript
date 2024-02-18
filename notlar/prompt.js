function istek() {
    // kulanıcıdan bir popart ile bilgi alır ve html sayfasına yazdırır.
    var kelime=prompt("Bir değer giriniz","lütfen sadece kelime giriniz..")
    
    document.write(kelime)
  }

  function bilgialipekleme (){
    // bu fonksyon prompt ile bir isim alır
    // daha sonra hosgeldiniz claslı elemanı mesaja atar
    // mesaj elemanının nnerhtml ine ad ve soyadı ekler
    
    let adsoyad =prompt("adınızı yazınız: ")
    let mesaj = document.querySelector(".hosgeldiniz")
    mesaj.innerHTML=`${mesaj.innerHTML} <p style="color=red">${adsoyad}<p>`
  }