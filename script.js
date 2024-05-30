let array = ["non, banan, suv, olma, orik, mashina, gul"];
let box = [];

for (const iterator of array) {
    if (iterator.includes("n")){
        box.push(iterator)
    }
}
console.log(array);
console.log(box);