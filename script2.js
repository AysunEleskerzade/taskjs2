let array6 = [10, 20, 30, 40, 50];
let edediorta = function (array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        const eded = array[i];
        sum = sum + eded;
    }
    return sum / array.length;
}
console.log(edediorta(array6));