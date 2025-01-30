document.addEventListener("DOMContentLoaded", () => {

    // Menu Dropdow
    const btnMenu = document.getElementById("btn-menu");
    const listaMenu = document.getElementById("lista-menu");

    btnMenu.addEventListener("click", () => {

        if (listaMenu.style.display === "block") {
            listaMenu.style.display = "none";
        } else {
            listaMenu.style.display = "block";
        }
    });

    // Painel lateral
    const abrirPainel = document.getElementById("abrir-painel");
    const fecharPainel = document.getElementById("fechar-painel");
    const painel = document.getElementById("painel-lateral");
    

    abrirPainel.addEventListener("click", () => {
        painel.style.right = "0px";
    });

    fecharPainel.addEventListener("click", () => {
        painel.style.right = "-250px";
    });

    // Slider Automático
    const slides = document.querySelector(".slides")
    let index = 0;

    function mudarSlide(){
        index = (index + 1) % 3 ; // calcula o total de resto de slides 
        slides.style.transform =  `translateX(-${index * 100}%);
    }

    setInterval(mudarSlide, 3000);




})
