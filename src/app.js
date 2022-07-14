const cancel = document.querySelector(".cancel");
const divider = document.querySelector(".divider");
const input = document.querySelector("input");


input.addEventListener('input',search)

function search(){
if(input.value.length>0){
    cancel.classList.add('show');
    divider.classList.add('show');
    }
}

cancel.addEventListener('click', canCel)

function canCel(){
   
    if(input.value.length>=1){
     input.value=""
     cancel.classList.remove('show');
    divider.classList.remove('show');
    }  


    
    
}

// for(let i=0; i<cancel.length; i++){
    
//     language.addEventListener('click', ()=>{
//        language[i].textContent = "Hello"
//     })


// }