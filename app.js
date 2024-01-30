const output=document.getElementById("output")
const input=document.getElementById("input")


function capital(){
    if(input.value==""){
        output.innerHTML=""
        let paragraph=document.createElement("p")
        output.appendChild(paragraph)
        // paragraph.classList.add("capital")
        paragraph.innerHTML="Enter prompt first🤨"
        paragraph.style.color="red"
    }
    else {
        output.innerHTML=""
        let paragraph=document.createElement("p")
        output.appendChild(paragraph)
        paragraph.classList.add("capital")
        paragraph.innerHTML=input.value
    } 
}
function small(){
    if(input.value==""){
        output.innerHTML=""
        let paragraph=document.createElement("p")
        output.appendChild(paragraph)
        // paragraph.classList.add("lower")
        paragraph.innerHTML="Enter prompt first🤨"
        paragraph.style.color="red"
    }
    else {
        output.innerHTML=""
        let paragraph=document.createElement("p")
        output.appendChild(paragraph)
        paragraph.classList.add("lower")
        paragraph.innerHTML=input.value
    } 
 }
 function first(){
    if(input.value==""){
        output.innerHTML=""
        let paragraph=document.createElement("p")
        output.appendChild(paragraph)
        // paragraph.classList.add("first")
        paragraph.innerHTML="Enter prompt first🤨"
        paragraph.style.color="red"
    }
    else {
        output.innerHTML=""
        let paragraph=document.createElement("p")
        output.appendChild(paragraph)
        paragraph.classList.add("first")
        paragraph.innerHTML=input.value
    } 
 }
 function bolder(){
    if(input.value==""){
        output.innerHTML=""
        let paragraph=document.createElement("p")
        output.appendChild(paragraph)
        // paragraph.classList.add("bolder")
        paragraph.innerHTML="Enter prompt first🤨"
        paragraph.style.color="red"
    }
    else {
        output.innerHTML=""
        let paragraph=document.createElement("p")
        output.appendChild(paragraph)
        paragraph.classList.add("bolder")
        paragraph.innerHTML=input.value
    } 
 }
 function italic(){
    if(input.value==""){
        output.innerHTML=""
        let paragraph=document.createElement("p")
        output.appendChild(paragraph)
        // paragraph.classList.add("italic")
        paragraph.innerHTML="Enter prompt first🤨"
        paragraph.style.color="red"
    }
    else {
        output.innerHTML=""
        let paragraph=document.createElement("p")
        output.appendChild(paragraph)
        paragraph.classList.add("italic")
        paragraph.innerHTML=input.value
    } 
 }
 function underline(){
    if(input.value==""){
        output.innerHTML=""
        let paragraph=document.createElement("p")
        output.appendChild(paragraph)
        // paragraph.classList.add("underline")
        paragraph.innerHTML="Enter prompt first🤨"
        paragraph.style.color="red"
    }
    else {
        output.innerHTML=""
        let paragraph=document.createElement("p")
        output.appendChild(paragraph)
        paragraph.classList.add("underline")
        paragraph.innerHTML=input.value
    } 
 }