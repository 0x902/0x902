const formEl = document.querySelector("form");
const urlInputEl = document.querySelector(".input-url");

let isFirst = true;
formEl.addEventListener("submit", (e) => {
    if (isFirst) {
        e.preventDefault();
        var qrcode = new QRCode(document.querySelector(".qrcode"), {
            text: urlInputEl.value,
            width: 500,
            height: 500,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H,
        });
        isFirst = false;
    } else {
        qrcode.clear(); // clear the code.
        qrcode.makeCode(urlInputEl.value); // make another code.
    }
});
