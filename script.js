let str2 = "Azerbaycan";

function isboyuk(str2) {
    let str2Array = str2.split("");
    if (str2Array.length > 10 && str2Array.length < 20) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isboyuk(str2));