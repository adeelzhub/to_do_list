const buttonAdd = document.getElementById("add");
const buttonClear = document.getElementById("clear");
const list = document.getElementById("list");
// const li = document.getElementsByTagName("li");
const li = document.querySelectorAll("li");
const input = document.getElementById("input");
const heading4 = document.getElementById("head4");

input.addEventListener("click",()=>{
    input.value = ""
    input.style.color = "black"
    
    })
    

buttonAdd.addEventListener("click",()=>{
    if(input.value != "" ){
        list.innerHTML+= `<li>${input.value}</li>`
        input.value = "Your Text";
        input.style.color = "grey";
        heading4.innerText = `There are ${document.querySelectorAll("li").length} things on  your 'To Do List' today.`;
    }else{
        alert("Please enter a text in the box.")
    }})
    
    

buttonClear.addEventListener("click",()=>{
    list.innerHTML = ""
    input.style.color = "grey"
    heading4.innerText = "To Do List is empty"
})