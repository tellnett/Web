let texto1btn = document.getElementById("red");
let texto2btn = document.getElementById("blue");
let texto3btn = document.getElementById("black");
let foto1 = document.getElementById("fot");

texto1btn.onclick = function () {
    moto.style.backgroundImage = "url(img/BMW1.png)"
    document.getElementById("modelo").innerHTML = "G310 R";
    document.getElementById("h2").style.color = "red";
    document.getElementById("textomodelo").innerHTML = "Percorra as ruas sem preocupações e de forma descontraída com a G 310 R. Mesmo na correria da cidade, você pode pilotar com total confiança e segurança, graças ao exemplar conjunto, que uniu com perfeição todos os elementos entre motor e ciclística. ";
    document.getElementById("escolha1").innerHTML = "Cor escolhida é red";
}
texto2btn.onclick = function () {
    moto.style.backgroundImage = "url(img/BMW2.png)"
    document.getElementById("modelo").innerHTML = "G310 S";
    document.getElementById("h2").style.color = "blue";
    document.getElementById("textomodelo").innerHTML = "A G 310 R tem características técnicas sofisticadas e exclusivas. O motor de 313 cc vem de uma concepção inovadora e mais eficiente em termos de arquitetura e economia de combustível";
    document.getElementById("escolha1").innerHTML = "Cor escolhida é blue";
}
texto3btn.onclick = function () {
    moto.style.backgroundImage = "url(img/BMW3.png)"
    document.getElementById("modelo").innerHTML = "G410 T";
    document.getElementById("h2").style.color = "black";
    document.getElementById("escolha1").innerHTML = "Cor escolhida é black";
    document.getElementById("textomodelo").innerHTML = "Uma boa imagem é característica pertencente dessa linhagem e a G 310 R traz alguns fortes traços da S 1000 R, irmã mais velha da linha Roadster da BMW. A carenagem esportiva do farol, o friso dinâmico do tanque de combustível e as dimensões típicas de uma naked não deixam este modelo passar despercebido nas ruas.";
}
foto1.onclick = function () {
alert("bem vindo ao curso de web com javascript");
    
}