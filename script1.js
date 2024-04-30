let str = "telet"
function isPolindrom(str) {
    let strArray = str.split("");
    let reservedArray = [];
    for (let i = strArray.length - 1; i >= 0; i--) {
        reservedArray.push(strArray[i]);
    }
    return str === reservedArray.join("");
}
if (isPolindrom(str)) {
    console.log(str + "polindromdur");
}
else {
    console.log(str + "polindrom deyil");
}