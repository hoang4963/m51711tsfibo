let listFibo = [1, 2];
function createListFibo(listFibo) {
    let leng = listFibo.length;
    let max = 10;
    if (leng < max) {
        listFibo.push(listFibo[leng - 1] + listFibo[leng - 2]);
        createListFibo(listFibo);
    }
}
createListFibo(listFibo);
let sum = 0;
for (let i = 0; i < listFibo.length; i++) {
    console.log(listFibo[i]);
    sum += listFibo[i];
}
console.log(sum);
//# sourceMappingURL=main.js.map