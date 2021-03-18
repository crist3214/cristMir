function contActive() {
    var selector = document.getElementById("cont-color");
    var selector2 = document.getElementById("btn-elemento");
    selector.classList.toggle("active");
    selector2.classList.toggle("active");
    
}
function bgpurple() {
    var selector = document.getElementById("footer");
    selector.className = " " ;
    selector.classList.toggle("purple");

}

function bgyellow() {
    var selector = document.getElementById("body");
    selector.className = " " ;
    selector.classList.toggle("yellow");

}



AOS.init(); 