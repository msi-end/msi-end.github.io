var globle = false
function Ujr1N5RrecT4Np7() {
    let input = document.getElementsByClassName('inputCopy')
    for (const e of input) {
        e.classList.add('copy')
        e.classList.add('animate__bounceInDown')
    }
    globle = true;
    var VisitorAPI = function (t, e, a) { var s = new XMLHttpRequest; s.onreadystatechange = function () { var t; s.readyState === XMLHttpRequest.DONE && (200 === (t = JSON.parse(s.responseText)).status ? e(t.data) : a(t.status, t.result)) }, s.open("GET", "https://api.visitorapi.com/api/?pid=" + t), s.send(null) };
    VisitorAPI(
        "b5GyyrihsSMCl8SP5ZzA",
        function (data) { console.log(data) },
        function (errorCode, errorMessage) { console.log(errorCode, errorMessage) }
    );
}
function copyText(e) {
    if (globle) {
        let input = e.querySelector("input");
        input.removeAttribute("disabled");
        input.select();
        document.execCommand("copy");
        input.setAttribute('disabled', true);
    }
}
let userAgent = navigator.userAgent;

function getDeviceInfo() {
    const userAgent = navigator.userAgent;
    const deviceInfo = {};
    const deviceInfo2 = {};

    // Get device model and manufacturer from user agent string
    const modelRegex = /\((.*?)\)/;
    const match = modelRegex.exec(userAgent);
    if (match && match.length > 1) {
        const modelString = match[1];
        const modelInfo = modelString.split(';');
        deviceInfo.manufacturer = modelInfo[0];
        deviceInfo.model = modelInfo[1];
        console.log(modelInfo);
    }

    // Example additional device info extraction (customize as needed)
    // const anotherRegex = /<regex_pattern_here>/;
    // const anotherMatch = anotherRegex.exec(userAgent);
    // if (anotherMatch && anotherMatch.length > 1) {
    //     deviceInfo.anotherInfo = anotherMatch[1];
    // }

    return deviceInfo
}

// Example usage
const deviceInfo = getDeviceInfo();
console.log(deviceInfo);
for (const e in deviceInfo) {

    document.body.innerHTML += deviceInfo[e]

}

document.body.innerHTML += userAgent


