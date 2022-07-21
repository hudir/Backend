let count = 0
function attack(url){
    count ++
    fetch(url)
    .then(data=>{
        console.log('Attack ', count, " done")
        attack(url)
    })
    .catch(err=>{
        console.log(err);
        attack(url)
    })
}

// attack('/books/4')