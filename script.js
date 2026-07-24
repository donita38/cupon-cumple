const boton = document.getElementById("hechizoBtn");
const inicio = document.getElementById("inicio");
const regalo = document.getElementById("regalo");

boton.addEventListener("click", () => {

    boton.disabled = true;
    boton.innerHTML = "✨ Alohomora...";

    setTimeout(() => {

        inicio.style.display = "none";
        regalo.style.display = "block";

        lanzarConfeti();

    }, 2200);

});

function lanzarConfeti(){

    for(let i=0;i<120;i++){

        const confeti = document.createElement("div");

        confeti.innerHTML="✨";

        confeti.style.position="fixed";
        confeti.style.left=Math.random()*100+"vw";
        confeti.style.top="-20px";
        confeti.style.fontSize=(15+Math.random()*20)+"px";
        confeti.style.transition="3s linear";

        document.body.appendChild(confeti);

        setTimeout(()=>{
            confeti.style.top="110vh";
        },50);

        setTimeout(()=>{
            confeti.remove();
        },3000);

    }

}
