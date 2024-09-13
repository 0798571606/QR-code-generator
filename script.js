const qrButton = document.querySelector("button");
const qrInput = document.querySelector("input");
const qrCode = document.querySelector(".qr-code");
// const qrImage = document.querySelector("img");
let qrValue;

qrButton.addEventListener("click", () => {
  qrValue = qrInput.value;
  if (!qrValue) {
    return alert("!لطفا یه متن یا آدرس وارد بکن");
  }
  qrButton.innerText = "در حال دریافت QR Code";
  qrCode.classList.remove("hidden");
});

qrInput.addEventListener("keyup", () => {
  if (!qrInput.value) {
    qrCode.classList.add("hidden");
  }
});

//   qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`

//   زمانیکه از انترنت Load رویداد
//   qrImage.addEventListener("load", () => {
//     qrCode.classList.remove("hidden");
//     qrButton.innerText = "تولید QR Code";
//   });
