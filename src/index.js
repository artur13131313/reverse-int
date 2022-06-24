module.exports = function reverse (n) {
    const str = (Math.abs(n)).toString()
    let res = ''
    const isNegative = n < 0
    
    for (let i = 0; i < str.length; i++){
    const char = str[i]
    if (char !== '0') res = char + res
    else if (char === '0' && str[i + 1] && str[i + 1] !== '0') res = char + res
    }

    return Math.abs (Math.abs (Number(isNegative ? res * -1 : res)))
}
