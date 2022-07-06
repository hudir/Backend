const row = +process.argv[2]
      , col = +process.argv[3]
      , char = process.argv[4].toString()
      , eff = process.argv[5]
let res = ''

const effect = {
    Reset : "\x1b[0m",
    Bright : "\x1b[1m",
    Dim : "\x1b[2m",
    Underscore : "\x1b[4m",
    Blink : "\x1b[5m",
    Reverse : "\x1b[7m",
    Hidden : "\x1b[8m",
    
    FgBlack : "\x1b[30m",
    FgRed : "\x1b[31m",
    FgGreen : "\x1b[32m",
    FgYellow : "\x1b[33m",
    FgBlue : "\x1b[34m",
    FgMagenta : "\x1b[35m",
    FgCyan : "\x1b[36m",
    FgWhite : "\x1b[37m",
    
    BgBlack : "\x1b[40m",
    BgRed : "\x1b[41m",
    BgGreen : "\x1b[42m",
    BgYellow : "\x1b[43m",
    BgBlue : "\x1b[44m",
    BgMagenta : "\x1b[45m",
    BgCyan : "\x1b[46m",
    BgWhite : "\x1b[47m"
}

for (let i = 0; i < row; i++) {
    let rowOfChars=''

    for (let j = 0; j < col; j++){    
        j !== col - 1 ? rowOfChars += char + '  '  : rowOfChars += char
    }

    i != row - 1 ? rowOfChars += ' \n' : null

    res += rowOfChars
}

eff && (eff in effect) ? res = effect[eff] + res + effect.Reset : 0

console.log(res)

// test node start.js 5 5 @ Underscore

// @  @  @  @  @ 
// @  @  @  @  @ 
// @  @  @  @  @ 
// @  @  @  @  @ 
// @  @  @  @  @

// console.log('\x1b[33m%s\x1b[0m', res); 