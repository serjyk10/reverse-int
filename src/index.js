module.exports = function reverse(n) {
    return +(n < 0 ? -n : n).toString().split('').reduceRight((finNum, cur) => finNum += cur, '');
}
