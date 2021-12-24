console.log("hello!");
let qr = document.querySelector(".qr");

console.log(qr);

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (qr && qr.currentSrc && message === "QR_REQUEST") {
        sendResponse({QRLink: qr.currentSrc});
    } else {
        sendResponse({error: 1});
    }
    // return true;
})