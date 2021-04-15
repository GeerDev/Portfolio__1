// Evento que se dispara cuando el documento HTML ha sido cargado y parseado
document.addEventListener('DOMContentLoaded', () =>{
    
        // Referencias al documento HTML
        const navBar = document.querySelector('.navbar');
        const navbarMenu = document.querySelector('.navbar_menu');
        const scrollUp = document.querySelector('.scroll-up-btn');
        const cruz = document.querySelector('#cruz');
        const botonNavegacion = document.querySelector(".menu-btn");
        const navbarEnlace = document.querySelectorAll('.navbar_enlace');
        const botonScroll = document.querySelector('.scroll-up-btn');
        const carouselLista = document.querySelector('.carousel__lista');

        // Scroll - Mostrar Barra de Navegación Sticky y Mostrar el Botón Scroll
        window.onscroll = function() {scrollFunction()};

        function scrollFunction() {
        if (window.scrollY > 40 && !navbarMenu.classList.contains('active')) {
            navBar.classList.add("sticky");
        } else {
            navBar.classList.remove("sticky");
        }

        if (window.scrollY > 500 && !navbarMenu.classList.contains('active')) {
            scrollUp.classList.add("show");
        } else {
            scrollUp.classList.remove("show");
        }
        } 

        // Eventos - Botón Menú Desplegable y Enlaces- Toggle
        botonNavegacion.addEventListener('click', () => {
            navbarMenu.classList.toggle("active");
            cruz.classList.toggle("active");
            scrollUp.classList.remove("show");
            navBar.classList.toggle("sticky");
        });

        navbarEnlace.forEach(elemento => {
            elemento.addEventListener('click', () => {
                if(navbarMenu.classList.contains('active')){
                    navbarMenu.classList.toggle("active");
                    cruz.classList.toggle("active");
                }
            });
        })
    
        // Botón Scroll arriba
        botonScroll.addEventListener('click',() =>{
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Carousel
        new Glider(carouselLista, {
            slidesToShow: 1,
            slidesToScroll: 1,
            draggable: true,
            dots: '.carousel__indicadores',
            arrows: {
              prev: '.carousel__anterior',
              next: '.carousel__siguiente'
            },
            responsive: [
                {
                  breakpoint: 775,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                  }
                },{
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                  }
                }
              ]
          });
       
        // Maquina de escribir
        const typed = new Typed("#typing", {
            strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true
        });
    
        const typed2 = new Typed("#typing-2", {
            strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true
        });
});