"use strict"

function comp(...valores) {
    let res=0
    for(let v of valores){
        res += v
    }
    return res
}

console.log(comp(5,8,9,8))