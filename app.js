let carousel = document.querySelector('.carousel');
let sliders = [];

let slideIndex = 0;

const createSlide = () => {
    if (slideIndex >= movies.length){
        slideIndex = 0;
    }

    //Criando Elementos no Dom
    let slide = document.createElement('div');
    let imgElement = document.createElement('img');
    let content = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');

    //Inserindo os elementos
    imgElement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);

    //Inserindo as imagens utilizando do slide-data.js
    imgElement.src = movies[slideIndex].image;
    slideIndex++;

    //Inserindo as classes dos elementos
    slide.className = 'slider';
    content.className = 'slider-content';
    h1.className = 'movie-title';
    p.className = 'movie-desc';

    sliders.push(slide);

    // Inserindo Efeito de Deslocamento do Slide

    if(sliders.length) {
        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length -2 )}% - ${30 * (sliders.length -2 )}px)`;
    }

}

//Loopando os slides e inserindo o intervalo de tempo para transição

for(let i = 0; i < 6; i++) {
    createSlide();
}

setInterval(() => {
    createSlide();
}, 3000);

// videos card

const videoCards = [...document.querySelectorAll('.video-card')];

videoCards.forEach(item => {
    item.addEventListener('mouseover', () => {
        let video = item.children[1];
        video.play();
    })
    item.addEventListener('mouseleave', () => {
        let video = item.children[1];
        video.pause();
    })
})
