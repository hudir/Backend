const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question('What\'s your name?', name=>{
    console.log(`Hi ${name}`)
    readline.question("Which city do you live?" , city=>{
        console.log(`${city} is a really nice place, bye ${name}`)
        readline.close();
    })
})