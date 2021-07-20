/**
 * 冒泡排序 js的底层写法
 * @param ary
 * @returns {*}
 */
function bubble(ary) {
    for (let i = 0; i < ary.length - 1; i++) {
        for (let j = 0; j < ary.length - 1 - i; j++) {
            if (ary[j] > ary[j+1]) {
                let temp = null;
                temp = ary[j];
                ary[j] = ary[j + 1];
                ary[j + 1] = temp;
            }
        }
    }
    return ary;
}

let ary = [12, 24, 2, 15, 34, 17, 3, 18, 25, 1];
let result = bubble(ary);
console.log(result);