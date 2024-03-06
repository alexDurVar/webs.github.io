/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 



try {
    window.addEventListener('scroll', function () {
        let animacion = document.getElementById('animacion');
        let posicion = animacion.getBoundingClientRect().top;
        let tamanioPantalla = window.innerHeight / 2;

        if (posicion < tamanioPantalla) {
            animacion.classList.add('animacion'); // Agregar clase para iniciar la animación
            animacion.style.opacity = '1'; // Cambiar la opacidad para hacer visible el elemento
            animacion.style.animation = 'mover 1s ease-out';
        }
    });

    // Escuchar el evento animationend para eliminar la clase de animación una vez que ha terminado
    document.getElementById('animacion').addEventListener('animationend', function() {
        this.classList.remove('animacion');
    });
} catch (error) {
    console.error(error);
}

try {
    window.addEventListener('scroll', function () {
        let animacion = document.getElementById('animacion2');
        let posicion = animacion.getBoundingClientRect().top;
        let tamanioPantalla = window.innerHeight / 2;

        if (posicion < tamanioPantalla) {
            animacion.classList.add('animacion2'); // Agregar clase para iniciar la animación
            animacion.style.opacity = '1'; // Cambiar la opacidad para hacer visible el elemento
            animacion.style.animation = 'mover 1s ease-out';
        }
    });

    // Escuchar el evento animationend para eliminar la clase de animación una vez que ha terminado
    document.getElementById('animacion2').addEventListener('animationend', function() {
        this.classList.remove('animacion2');
    });
} catch (error) {
    console.error(error);
}

try {
    window.addEventListener('scroll', function () {
        let animacion = document.getElementById('animacion3');
        let posicion = animacion.getBoundingClientRect().top;
        let tamanioPantalla = window.innerHeight / 2;

        if (posicion < tamanioPantalla) {
            animacion.classList.add('animacion3'); // Agregar clase para iniciar la animación
            animacion.style.opacity = '1'; // Cambiar la opacidad para hacer visible el elemento
            animacion.style.animation = 'mover 1s ease-out';
        }
    });

    // Escuchar el evento animationend para eliminar la clase de animación una vez que ha terminado
    document.getElementById('animacion3').addEventListener('animationend', function() {
        this.classList.remove('animacion3');
    });
} catch (error) {
    console.error(error);
}

try {
    window.addEventListener('scroll', function () {
        let animacion = document.getElementById('animacion4');
        let posicion = animacion.getBoundingClientRect().top;
        let tamanioPantalla = window.innerHeight / 2;

        if (posicion < tamanioPantalla) {
            animacion.classList.add('animacion4'); // Agregar clase para iniciar la animación
            animacion.style.opacity = '1'; // Cambiar la opacidad para hacer visible el elemento
            animacion.style.animation = 'mover 1s ease-out';
        }
    });

    // Escuchar el evento animationend para eliminar la clase de animación una vez que ha terminado
    document.getElementById('animacion4').addEventListener('animationend', function() {
        this.classList.remove('animacion4');
    });
} catch (error) {
    console.error(error);
}


try {
    window.addEventListener('scroll', function () {
        let animacion = document.getElementById('animacion5');
        let posicion = animacion.getBoundingClientRect().top;
        let tamanioPantalla = window.innerHeight / 1;

        if (posicion < tamanioPantalla) {
            animacion.classList.add('animacion5'); // Agregar clase para iniciar la animación
            animacion.style.opacity = '1'; // Cambiar la opacidad para hacer visible el elemento
            animacion.style.animation = 'mover 1s ease-out';
        }
    });

    // Escuchar el evento animationend para eliminar la clase de animación una vez que ha terminado
    document.getElementById('animacion5').addEventListener('animationend', function() {
        this.classList.remove('animacion5');
    });
} catch (error) {
    console.error(error);
}








window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
