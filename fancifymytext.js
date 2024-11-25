function Bigger() {
    // alert("Hello, world!");
    document.getElementById("textArea").style.fontSize = "24pt";
}

function FancySchmancy(){
    // alert("Hello, world!");
    let element = document.getElementById("textArea");
    element.style.fontWeight = "bold";
    element.style.color = "blue";
    element.style.textDecoration = "underline";
}

function BoringBetty(){
    // alert("Hello, world!");
    let element = document.getElementById("textArea");
    element.style.fontWeight = "normal";
    element.style.color = "black";
    element.style.textDecoration = "none";
}

function Moo(){
    let text = document.getElementById("textArea");
    text.value = text.value.toUpperCase();
    let textSplit = text.value.split(".");
    text.value = textSplit.join("-Moo ")
}