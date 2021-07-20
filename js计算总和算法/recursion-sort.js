//获取1~100的和
let total = null;
for (let i = 1; i <= 100; i++) {
    total += i;
}
console.log(total);

function sum(n) {
    if (n === 0) {
        return 0;
    }
    return n + sum(n - 1);
}
let result=sum(100);
console.log(result);