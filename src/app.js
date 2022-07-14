const language = document.querySelector(".language");

for(let i=0; i<language.length; i++){
    
    language.addEventListener('click', ()=>{
       language[i].textContent = "Hello"
    })


}