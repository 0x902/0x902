const formEl = document.querySelector("form");
const urlInputEl = document.querySelector(".input-url");
const resultEl = document.querySelector(".result");
const qrEl = document.querySelector(".qrcode");
const alertEl = document.querySelector(".alert");
const urlEl = document.querySelector(".url");

let isFirst = true;
let qrcode;
let siteUrl = "";

urlInputEl.addEventListener("input", () => {
    if (isValidUrl(urlInputEl.value)) {
        alertEl.classList.add("hidden");
    } else {
        alertEl.classList.remove("hidden");
    }
});

formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    userInput = urlInputEl.value;
    if (isValidUrl(userInput)) {
        resultEl.classList.remove("hidden");
        urlEl.innerHTML = `<a target="_blank" href="https://${userInput}">${userInput} &rarr;</a>`;
        siteUrl = userInput;
        if (isFirst) {
            qrcode = new QRCode(document.querySelector(".qrcode"), {
                text: userInput,
                width: 300,
                height: 300,
                colorDark: "#000000",
                colorLight: "#ffffff",
                correctLevel: QRCode.CorrectLevel.H,
            });

            isFirst = false;
        } else {
            qrcode.clear();
            qrcode.makeCode(userInput);
        }
    } else {
        pass;
    }
});

// Assuming you have a download button with id "downloadButton"
const downloadButton = document.querySelector(".btn-download");
downloadButton.addEventListener("click", () => {
    // Convert the QR code to an image
    const qrImageSrc = document.querySelector(".qrcode img").src;

    // Create a temporary anchor element
    const link = document.createElement("a");
    link.download = `QRapid-${siteUrl.toLowerCase().replaceAll(" ", "")}.png`; // Set the filename for the download
    link.href = qrImageSrc;

    // Simulate click on the anchor element to trigger download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

const isValidUrl = (urlString) => {
    var urlPattern = new RegExp(
        "^(https?:\\/\\/)?" + // validate protocol
            "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // validate domain name
            "((\\d{1,3}\\.){3}\\d{1,3}))" + // validate OR ip (v4) address
            "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // validate port and path
            "(\\?[;&a-z\\d%_.~+=-]*)?" + // validate query string
            "(\\#[-a-z\\d_]*)?$",
        "i"
    ); // validate fragment locator
    return !!urlPattern.test(urlString);
};
