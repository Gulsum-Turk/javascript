let data = JSON.parse(localStorage.getItem('items'));
var li = document.createElement("li");
console.log(data)

data.forEach(element => {
  var li = document.createElement("li");
  var t = document.createTextNode(element);
  li.appendChild(t);
  // ul içerisine li eklenir
  document.getElementById("list").appendChild(li);
  
});




// mevcut olan liste elemanlarına çarpı işateri ekler ve onların tıklanıp tıklanmadığını kontrol eder
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

// taskların işaretlenip işaretlenmediğini kontrol eden uygulama 
var list = document.querySelector("ul");
// listeye tıklanıp tıklanmadığını kontrol eder
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      // tıklanan listenin clasına checked ekler, tekrar tıklandığında kaldırır
    
      ev.target.classList.toggle("checked");
       data = JSON.parse(localStorage.getItem('items'));

      let dizi = ev.target.textContent.split("")
     dizi.pop()
     let deger = dizi.join("");
      console.log(deger)
      let index = data.indexOf(deger)
      console.group(index)
      data.splice(index, 1);
      localStorage.setItem('items', JSON.stringify(data));
      
    }
  },
  false
);


// yeni bir liste elementi oluşturan ve çarpıya tıklandığında silen kodlar

function newElement() {
  // yeni bir li oluşturuyor 
  var li = document.createElement("li");

  // girilen inputu alıyor 
  var inputValue = document.getElementById("task").value;

 



  // kontroller yapılır değer boş ise
  // veya boşluk karakterleri girilmişse sadece toastı gösteriri
  if (inputValue === "" || inputValue.replace(/^\s+|\s+$/g, "").length == 0) {
    $(".error").toast("show");
  } else {
    $(".success").toast("show");


  

    // localstoarge
    let taskList = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
    taskList.push(inputValue)
    localStorage.setItem('items', JSON.stringify(taskList));

    

     // alınan değeri bir metin belgesine örneğin p elementi gibi dönüştürüyor
  var t = document.createTextNode(inputValue);

    // liste içerisine ekliyor
    li.appendChild(t);
    // ul içerisine li eklenir
    document.getElementById("list").appendChild(li);




  }
  // input id si olan task boşaltılır
  document.getElementById("task").value = "";

  // listenin silinmesini sağlayan kodlar 
  // boş bir span oluşturulur ve txtnode ile çarpı işareti oluşturulur
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");

  // clasına close adı verilir listenin içine eklenir
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  // closeclasına sahip her bir liste değeri döndürülür. tıklanırsa gizlenir.
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      
      var li = this.parentElement;
      li.style.display = "none";
      


    };
  }
}
