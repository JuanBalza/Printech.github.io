const hamburguesa = document.querySelector('.hamburguesa');
const navegacion= document.querySelector('.navegacion');
const enlaces = document.querySelectorAll('.navegacion a');

document.addEventListener('DOMContentLoaded', ()=>{
    mostrarMenu();
    cerraMenu();
})

function mostrarMenu(){
  hamburguesa.addEventListener('click', ()=>{
     navegacion.classList.toggle('ocultar');

  });
}

function cerraMenu(){
  enlaces.forEach(enlace =>{
    enlace.addEventListener('click', (e) =>{
     if(e.target.tagName === 'A'){
       navegacion.classList.add('ocultar');
     }
    })
  })
}
