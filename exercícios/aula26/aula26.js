const cursos=[...document.querySelectorAll(".curso")]

cursos.forEach((el)=>{
    el.addEventListener("click",(evt)=>{
        const cursoclicad=evt.currentTarget
        cursoclicad.classList.add("destaque")
    })
})

