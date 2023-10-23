// Смена фона для header

let i = 0;
let images = [];
let slideTime = 3500; // 4 seconds
let header = document.getElementById('header');

images[0] = '../images/header/bg1.jpg';
images[1] = '../images/header/bg2.jpg';
images[2] = '../images/header/bg3.jpg';

function changePicture() {
    header.style.backgroundImage = "url(" + images[i] + ")";

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout(changePicture, slideTime);
}

window.onload = changePicture;

// Плавный скролл по ссылке

const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};

// Получение данных из input type file



