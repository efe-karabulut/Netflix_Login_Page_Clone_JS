const inputEmail = document.getElementById("email");
const labelEmail = document.getElementById("labelEmail");
//
const inputPassword = document.getElementById("password");
const labelPassword = document.getElementById("labelPassword");
const showHide = document.getElementById("showHide");
//
const alertEmail = document.getElementById("alertEmail");
const alertPassword = document.getElementById("alertPassword");
//
//
// input email focus olmuşsa email or phone number yazısına animasyon ekle
inputEmail.addEventListener("focus", () => {
  labelEmail.classList.add("active");
});
//
// eğer input e-mailin e tıklandıktan sonra başka bir yere tıklanmışsa inputemailin içerisinde birşey yazmıyosa animasyonu kapat ve altındaki uyarı yazısını aktif hale getir
inputEmail.addEventListener("blur", () => {
  if (!inputEmail.value) {
    labelEmail.classList.remove("active");
    alertEmail.style.display = "block";
  }
});
//
// eğer input e mail in içerisine birşey yazarken karakter sayısı 3 den küçükse yine uyarı yazısını aktif hale getir aksi takdirde yani karakter sayısı 3 den büyükse uyarı yazısını kaldır
inputEmail.addEventListener("input", () => {
  if (inputEmail.value.length <= 3) {
    alertEmail.style.display = "block";
  } else {
    alertEmail.style.display = "none";
  }
});
// email or phone number a tıklanırsa e mail inputuna focuslan
labelEmail.onclick = () => {
  inputEmail.focus();
};
//
//
//
//
//
//
//
// input password focus olmuşsa animasyon ve show/hide butonunu aktif hale getir
inputPassword.addEventListener("focus", () => {
  labelPassword.classList.add("active");
  showHide.classList.add("active");
  // eğer show/hide a tıklanmışsa
  showHide.onclick = () => {
    // eğer show/hide ın içerisinde show yazıyosa hide yap ve türünü text yap
    if (showHide.innerText === "SHOW") {
      showHide.innerText = "HIDE";
      inputPassword.setAttribute("type", "text");
      //  eğer show/hide ın içerisinde hide yazıyorsa show yap ve türünü password yap
    } else if (showHide.innerText === "HIDE") {
      showHide.innerText = "SHOW";
      inputPassword.setAttribute("type", "password");
    }
    // show/hide tıklandığı zaman sürekli olduğu inputtan başlasın
    inputPassword.focus();
  };
});
// input password e tıklandıktan sonra başka bi yere tıklanmışa
inputPassword.addEventListener("blur", (event) => {
  // ve eğer tıklanan öge show/hide butonu değilse show/hide ı kaldır
  if (event.relatedTarget !== showHide) {
    showHide.classList.remove("active");
  }
  //
  // eğer input password un içine birşey girilmemişse animasyonu devre dışı bırak ve uyarı yazısını aktif hale getir
  if (!inputPassword.value) {
    labelPassword.classList.remove("active");
    alertPassword.style.display = "block";
  }
});
// input password una birşeyler yazılırken
inputPassword.addEventListener("input", () => {
  // içerisindeki yazı 3 den küçükse uyarı yazısını ekle
  if (inputPassword.value.length <= 3) {
    alertPassword.style.display = "block";
    // aksi halde yani 3 den büyükse uyarı yazısını kaldır
  } else {
    alertPassword.style.display = "none";
  }
});
// password yazına tıklanırsa inputtan başlasın
labelPassword.onclick = () => {
  inputPassword.focus();
};
//
//
//
//
