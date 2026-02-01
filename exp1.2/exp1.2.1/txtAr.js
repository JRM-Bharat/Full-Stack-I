const textInput=document.getElementById("textInput");
const counter=document.getElementById("counter");
const MAX_CHARS=150;

textInput.addEventListener("input",()=>{
    const len=textInput.value.length;
    counter.textContent=`${len}/${MAX_CHARS}`;
    if(len>=130){
        counter.classList.add("warning");
    }else{
        counter.classList.remove("warning");
    }
});