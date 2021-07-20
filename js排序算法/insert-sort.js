/**
 * 插入排序 insert sort
 * @param ary
 * @returns {[]}
 */
function insert(ary) {
    let handAry = [];
    handAry.push(ary[0]);
    for (let i = 1; i < ary.length; i++) {
        let cur = ary[i];
        for (let j = handAry.length - 1; j >= 0; j--) {
            let curHand = handAry[j];
            if (curHand < cur) {
                handAry.splice(j + 1, 0, cur);
                j = -1;
            }
            if (j === 0) {
                handAry.unshift(cur);
            }
        }
    }
    return handAry;
}

let ary = [12, 24, 2, 15, 34, 17, 3, 18, 25, 1];
let result = insert(ary);
console.log(result);