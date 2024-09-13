const qrButton = document.querySelector("button");
const qrInput = document.querySelector("input");
const qrCodeBox = document.querySelector(".qr-code");
let qrValue;

qrButton.addEventListener("click", () => {
  qrValue = qrInput.value;

  if (!qrValue) {
    return alert("لطفا یه متن یا آدرس وارد بکن");
  }
  qrCodeBox.classList.remove("hidden");
});

qrInput.addEventListener("keyup", () => {
  if (!qrInput.value) {
    qrCodeBox.classList.add("hidden");
  }
});

//  اگراز انترنت
// const qrImage = document.querySelector('img')

// qrImage.addEventListener('load', () => {
//     qrCodeBox.classList.remove("hidden");
// })
