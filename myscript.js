const form = document.querySelector(".formulário-fale-conosco")
const mascara = document.querySelector(".mascara-formulario")


function mostrarform() {
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"
  
}

function esconderform() {
    form.style.left = "-235px"
    form.style.transform = "translateX(0%)"
    mascara.style.visibility = "hidden"

}

function mostrarImagem() {
    document.getElementById("imagem").style.display = "block";
}

document.addEventListener("click", function(event) {
    let imagem = document.getElementById("imagem");
    
    // Verifica se o clique foi fora da imagem
    if (imagem.style.display === "block" && !imagem.contains(event.target) && event.target.tagName !== "BUTTON") {
        imagem.style.display = "none";
    }
        setTimeout(function() {
        imagem.style.display = "none";
    }, 7000);
}

);

function mostrarImagem(id) {
    var imagem = document.getElementById(id);
    if (imagem.style.display === "none" || imagem.style.display === "") {
        imagem.style.display = "block";
    } else {
        imagem.style.display = "none";
    }

    
}









