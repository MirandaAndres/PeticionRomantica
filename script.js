function showSection(sectionId) {
    // Ocultar todas las secciones
    document.querySelectorAll('.content').forEach(function(content) {
        content.style.display = 'none';
    });
    // Mostrar la sección seleccionada
    document.getElementById(sectionId + '-content').style.display = 'block';
}

function moveButton() {
    var btn = document.getElementById('no-move');
    var randomX = Math.floor(Math.random() * 200) + 10;
    var randomY = Math.floor(Math.random() * 200) + 10;
    btn.style.position = 'absolute';
    btn.style.left = randomX + '%';
    btn.style.top = randomY + '%';
}

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById('container');
    const images = ['img/taylorswitf1.jpg','img/morat1.jpg',
                    'img/taylorswitf2.jpg','img/morat2.jpg',
                    'img/taylorswitf3.jpg','img/morat3.jpg',
                    'img/taylorswitf4.jpg','img/morat4.jpg',
                    'img/taylorswitf5.jpg','img/morat5.jpg',
                    'img/taylorswitf6.jpg','img/morat6.jpg',
                    'img/taylorswitf7.jpg','img/morat7.jpg',
                    'img/taylorswitf8.jpg','img/morat8.jpg',
                    'img/taylorswitf9.jpg','img/morat10.jpg'];

    function getRandomPosition() {
        const x = Math.floor(Math.random() * (window.innerWidth - 100)); // Ajuste para mantener las imágenes dentro de los límites
        const y = Math.floor(Math.random() * (window.innerHeight - 100)); // Ajuste para mantener las imágenes dentro de los límites
        return { x, y };
    }                    

    function getRandomRotation() {
        return (Math.random() - 0.5) * 90; // Rango de -45 a 45 grados
    }

    function createImageElement(src) {
        const wrapper = document.createElement('div');
        wrapper.className = 'image-wrapper';

        const img = document.createElement('img');
        img.src = src;
        img.onload = () => {
            const { x, y } = getRandomPosition();
            wrapper.style.left = `${x}px`;
            wrapper.style.top = `${y}px`;
            wrapper.style.transform = `rotate(${getRandomRotation()}deg)`;
        };

        wrapper.appendChild(img);
        return wrapper;
    }

    function addImage() {
        const randomImage = images[Math.floor(Math.random() * images.length)];
        const imgElement = createImageElement(randomImage);
        container.appendChild(imgElement);

        setTimeout(() => {
            imgElement.style.opacity = 1;
        }, 100);

        setTimeout(() => {
            imgElement.style.opacity = 0;
            setTimeout(() => {
                container.removeChild(imgElement);
            }, 2000);
        }, 3000); // Tiempo que la imagen permanecerá visible
    }

    setInterval(addImage, 1000); // Intervalo para agregar nuevas imágenes

    // Crear partículas
    function createParticle(x, y) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        document.body.appendChild(particle);

        setTimeout(() => {
            particle.remove();
        }, 2000); // Eliminar la partícula después de 2 segundos
    }

    // Crear partículas cuando se mueve el ratón
    document.addEventListener('mousemove', (event) => {
        createParticle(event.clientX, event.clientY);
    });

    // Crear partículas automáticamente
    setInterval(() => {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        createParticle(x, y);
    }, 100); // Intervalo para agregar nuevas partículas

    //Música
    document.addEventListener("DOMContentLoaded", function() {
        var music = document.getElementById("background-music");
        music.volume = 0.5;  // Ajusta el volumen entre 0.0 (silencio) y 1.0 (volumen máximo)
        const audio = document.getElementById('background-music');
        if (audio) {
            audio.play().catch((error) => {
            console.log('No se pudo reproducir la música automáticamente. Error:', error);
            });
        }
    });
});