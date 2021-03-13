module.exports = function reverse (n) {
    let result
    if (n >= 0) {
       result = String (n)
    } else {result = String (n * (-1))};

    let a = result.split('').reverse().join('');
    return Number(a)
}
 