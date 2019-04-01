
function toggleEdge() {
    let shape = document.getElementById("shape").value;
    if(shape === 'square') {
        document.getElementById("secondEdgeValue").style.display = "none";
        document.getElementById("secondEdgeLabel").style.display = "none";
        document.getElementById("firstEdgeLabel").innerText = 'Edge';
    } else {
        document.getElementById("secondEdgeValue").style.display="block";
        document.getElementById("secondEdgeLabel").style.display="block";
        document.getElementById("firstEdgeLabel").innerText='First Edge';
    }
    calculateArea();
}
function calculateArea() {
    let shape = document.getElementById("shape").value;
    let firstEdge = document.getElementById("firstEdgeValue").value;
    let secondEdge = document.getElementById("secondEdgeValue").value;
    document.addEventListener('keydown', checkKey);
    function checkKey(e) {
        var keyCode = (event.key);
        if (keyCode == '+' || keyCode == '-') {
            e.preventDefault()
        }
    }
    switch (shape) {
        case "square":
            area = firstEdge * firstEdge;
        break;
        case "rectangle":
            area = firstEdge * secondEdge;
        break;
        case "rightTriangle":
            area = (firstEdge * secondEdge) / 2;
        break;
    }
    if (area == 0) {
        document.getElementById("area").value = "";
    }  else {
        document.getElementById("area").value = area
    }
}