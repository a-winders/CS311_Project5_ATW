
var poemNumber = 5; //initial last poem number

//call function to attach events to the buttons.
addCloseButtonEvents();
addRemoveButtonEvents();

//encapsulate the code to set events for  add buttons in a function.
function addCloseButtonEvents(){
    const buttons = document.querySelectorAll('.addbutton').forEach(button =>{
    button.addEventListener("click", event =>{
        let poem = button.getAttribute("id");
        let div_name = poem.substring(0,5);
        hidePoem(div_name);
        
    });

});
}

//encapsulate the code to set events for remove buttons in a function.
function addRemoveButtonEvents(){
    const buttons = document.querySelectorAll('.removebutton').forEach(button =>{
        button.addEventListener("click", event =>{
            let poem = button.getAttribute("id");
            let div_name = poem.substring(0,5);
            removePoem(div_name);
            
        });
    
    });
}

//Changes color/size of text in poem.
function setHighlightColor(name){

    const poem = document.getElementById(name);
    poem.style.color = "red";
    poem.style.fontSize = "125%";

}

//Changes color/size of text in poem to default.
function setDefaultColor(name){
    const poem = document.getElementById(name);
    poem.style.color = "black";
    poem.style.fontSize = "100%";
}

//Show the poem when link is moused over
function showPoem(name){
    const poem = document.getElementById(name);
    poem.style.display = 'block';
}

//hide poem when button is clicked.
function hidePoem(name){
    const poem = document.getElementById(name);
    poem.style.display = 'none';
}

//Change style of the poet text based on data collected from user input.
function changeStyle(){
                
    let newColor = document.getElementById("font-color").value;
    document.getElementById("poet").style.color = newColor;

    let fontSize = document.getElementById("font-size").value;
    document.getElementById("poet").style.fontSize = fontSize;
 
}

//Add a new poem to the page.
function addPoem(){
    //increase the poem number so the new poem is numbered correctly.
    poemNumber++;

    //generate the poem name
    let identifier = "poem"+poemNumber;

    //get the data for title and poem body.
    const title = document.getElementById("poem-title")
    const data = document.getElementById("poem-body");
   
     //set up the Nav
    let anchor = document.createElement("a");
    let anchorText = document.createTextNode(title.value);
    anchor.appendChild(anchorText);
    anchor.setAttribute('href', '#');
    anchor.setAttribute('id',identifier+'-anchor');
    anchor.setAttribute('onmouseover',"showPoem('"+identifier+"')");
    const nav = document.getElementById("nav");
    nav.appendChild(anchor);
    
    //select the container that holds the poems
    const container = document.getElementById("container");

    //create the new div and set its class and other attributes.
    let box = document.createElement("div");
    box.classList.add("poem");
    box.setAttribute('id',identifier);
    box.setAttribute('onmouseover',"setHighlightColor('"+identifier+"')"); 
    box.setAttribute('onmouseout',"setDefaultColor('"+identifier+"')");
    
    //create the heading for the title.
    let heading = document.createElement("h2");
    let text = document.createTextNode(title.value);
    heading.appendChild(text);

    //create the body of the poem
    let poem = document.createElement("p");
    text = document.createTextNode(data.value);

    //create the button to close the poem with.
    let button = document.createElement("button");
    button.setAttribute('id','poem'+poemNumber+"-button");
    button.classList.add('addbutton');
    button.textContent = "Close";


    //create the button to remove the poem with.
    let removeButton = document.createElement("button");
    removeButton.setAttribute('id','poem'+poemNumber+"-button-close");
    removeButton.classList.add('removebutton');
    removeButton.textContent = "Remove";

    //append everything to container.
    poem.appendChild(text);
    box.appendChild(heading);
    box.appendChild(poem)
    box.appendChild(button);
    box.appendChild(removeButton)
    container.appendChild(box); 
    
    //display the box (the style hides it, so we have to specifically display.)
    let div = document.getElementById(identifier);
    div.style.display = 'block';

    //reread all the buttons and an eventlistener to this new button.
    addCloseButtonEvents();
    addRemoveButtonEvents();

    //empty the input
    title.value = "";
    data.value = "";
}


function removePoem(name){
    const nav = document.getElementById(name+'-anchor');
    nav.remove();

    const div = document.getElementById(name);
    div.remove();
    

}