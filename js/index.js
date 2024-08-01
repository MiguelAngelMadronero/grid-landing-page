
// Obtén el contenedor del menú de navegación
// const menu = document.querySelector(".main__links");

// Agrega un event listener al contenedor del menú
// menu.addEventListener("click", function(event) {
//   Verifica si el clic se hizo en un enlace ('a' con la clase 'nav-link')
//   if (event.target.matches('a.main__link')) {
//     Remueve la clase 'activo' de todos los enlaces
//     const enlaces = document.querySelectorAll(".main__link");
//     enlaces.forEach(function(link) {
//       link.classList.remove("main__link--active");
//     });

//     Agrega la clase 'activo' al enlace clicado
//     event.target.classList.add("main__link--active");
//   }
// });


const buttonLeft = document.querySelector(".main__controlLeft");
const buttonRight = document.querySelector(".main__controlRight");
const contenedorImagen = document.querySelector(".main__hero");

const imagenes=[

    `url("../images/desktop-image-hero-1.jpg")`,
    `url("../images/desktop-image-hero-2.jpg")`,
    `url("../images/desktop-image-hero-3.jpg")`,
]

let contador= 0;
buttonLeft.addEventListener("click", ()=>{
    contador = (contador-1 + imagenes.length) % imagenes.length;

    contenedorImagen.style.backgroundImage=imagenes[contador];

})


buttonRight.addEventListener("click", ()=>{
    contador= (contador+1) % imagenes.length;

    contenedorImagen.style.backgroundImage=imagenes[contador];
   
    

        
    
    
})