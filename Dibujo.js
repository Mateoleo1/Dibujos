function setup() {
    canvas = createCanvas(280, 280);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas);
    synth = window.speechSynthesis;
  }
function preload(){
classifier=ml5.imageClassifier("DoodleNet");
}
function draw(){
strokeWeight(10);
stroke(0);
if (mouseIsPressed)
{line (pmouseX,pmouseY,mouseX,mouseY)}
}
function classifyCanvas(){
classifier.classify(canvas, Dib);
}
function Dib(error,results){
if (error){
console.error(error);
}
else{
    console.log(results);
document.getElementById("Etiquetas").innerHTML="Resultado "+results[0].label;
document.getElementById("Confianza").innerHTML="Confianza "+results[0].confidence;
utterThis = new SpeechSynthesisUtterance(results[0].label); synth.speak(utterThis);
}

}
function Borrador(){
background("white")
}