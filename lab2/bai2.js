let n = 100500;
let dem = 0;

do {
    let s = n % 10;
    if (s == 0) {
        dem += 1;
    }
    n = Math.floor(n / 10);
} while (n > 0);

console.log("Số lượng số 0: " + dem);