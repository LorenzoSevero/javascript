const objs=document.getElementsByTagName("div")

var num = [10,20,30,40,50]

for(n of objs){
    console.log(n.innerHTML="curso")
}

for(n in objs){
    console.log(objs[n].innerHTML)
}
