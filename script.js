const formEl = document.querySelector("form");
const urlInputEl = document.querySelector(".input-url");
const resultEl = document.querySelector(".result");
const qrEl = document.querySelector(".qrcode-container");
const alertEl = document.querySelector(".alert");
const urlEl = document.querySelector(".url");

let isFirst = true;
let qrcode;
let siteUrl = "";

urlInputEl.addEventListener("input", () => {
    if (isValidUrl(urlInputEl.value)) {
        alertEl.classList.add("hidden-none");
    } else {
        alertEl.classList.remove("hidden-none");
    }
});

formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    userInput = urlInputEl.value;
    if (isValidUrl(userInput)) {
        resultEl.classList.remove("hidden-none");
        urlEl.innerHTML = `<a class="url" target="_blank" href="https://${userInput}">${userInput} &rarr;</a>`;
        siteUrl = userInput;
        if (isFirst) {
            qrcode = new QRCode(qrEl, {
                text: userInput,
                width: 280,
                height: 280,
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

const downloadButton = document.querySelector(".btn-download");
downloadButton.addEventListener("click", async () => {
    const qrImageSrc = document.querySelector(".qrcode-container img").src;

    // Fetch the image
    const response = await fetch(qrImageSrc);
    const blob = await response.blob();

    // Create a temporary anchor element
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `QRapid-${siteUrl.toLowerCase().replaceAll(" ", "")}.png`;

    // Simulate click on the anchor element to trigger download
    document.body.appendChild(link);
    link.click();

    // Clean up
    document.body.removeChild(link);
    URL.revokeObjectURL(link.href);
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
