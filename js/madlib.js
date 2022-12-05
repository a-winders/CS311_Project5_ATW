let inputName = document.getElementById("input-name").value= "";
let inputAdjective = document.getElementById("input-adjective").value= "";
let inputNoun = document.getElementById("input-noun").value= "";

function processMadLib(){
    
    const questions = document.getElementById("questions");
    questions.style.display= "none";

    const madLib = document.getElementById("madlib");
    madLib.style.display = "block";

    inputName = document.getElementById("input-name").value;

    const outputName = document.getElementById("output-name");
    outputName.innerHTML = inputName;

    inputAdjective = document.getElementById("output-adjective").value;

    const outputAdjective = document.getElementById("output-adjective").innerHTML = inputAdjective;

    inputNoun = document.getElementById("input-noun").value;

    const outputNoun = document.getElementById("output-noun").innerHTML = inputNoun;

} // end processMadLib
