function numAdd(n) {
    if(n==1) return 1;
    return numAdd(n-1)+n;
}

console.log(numAdd(100));