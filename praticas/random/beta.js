const simbotao=document.getElementById("beta1");
const naobotao=document.getElementById("beta2");
const titulo=document.getElementById("titulo");
const chadbotao=document.getElementById("chad");
const fundo=document.getElementById("fundo");

naobotao.addEventListener("mouseout",function(){
    naobotao.innerHTML="Não";
});

simbotao.addEventListener("mouseover",function(){
    simbotao.innerHTML="Não";
});

simbotao.addEventListener("mouseout",function(){
    simbotao.innerHTML="Sim";
});

simbotao.addEventListener("click",function(){
    titulo.innerHTML="Você é um True Beta!";
    fundo.style.backgroundImage="URL('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.M_3VoLp4f_5-aJ9kKF7gjAHaGF%3Fr%3D0%26pid%3DApi&f=1&ipt=01774e0b8180bb216d03267195ee0e0ab102630e6b42ead7cd351eb1e22d5297&ipo=images')"
    fundo.style.backgroundSize="cover"
});

naobotao.addEventListener("click",function(){
    titulo.innerHTML="Você é um True Beta!";
    fundo.style.backgroundImage="URL('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.M_3VoLp4f_5-aJ9kKF7gjAHaGF%3Fr%3D0%26pid%3DApi&f=1&ipt=01774e0b8180bb216d03267195ee0e0ab102630e6b42ead7cd351eb1e22d5297&ipo=images')"
    fundo.style.backgroundSize="cover"
});

chadbotao.addEventListener("click",function(){
    titulo.innerHTML="Você é um true Chad!";
    fundo.style.backgroundImage="URL('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.MYLcZkdXa3GiQ1lEdp2OZAHaIU%3Fpid%3DApi&f=1&ipt=939adaf61c87d42cee693c6d6a4e465866ce59d3c1acbecb3306c3b31f6c9956&ipo=images')";
    fundo.style.backgroundSize="cover";
});

