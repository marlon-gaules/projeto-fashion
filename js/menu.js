let botaoTopo = document.querySelector(".icone a");
botaoTopo.addEventListener("click", function(event){
    event.preventDefault();

    let topo = document.querySelector(".topo");
    topo.classList.toggle("responsivo");
});