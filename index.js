const range = document.querySelector('.range');
const progress = document.querySelector('.progress');
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const value = document.querySelector('.value');
const barra = document.querySelector('.barra');
const max = 23;
const min = 12;
const fator = 100/(max-min);

value.innerHTML = min;

left.addEventListener('click', () => {
    if (Number(value.innerHTML) < max) {
        value.innerHTML = Number(value.innerHTML) + 1;
        barra.style.width = ((value.innerHTML - min)*fator) + "%"
    }
});
right.addEventListener('click', () => {
    if (Number(value.innerHTML) > min) {
        value.innerHTML = Number(value.innerHTML) - 1;
        barra.style.width = ((value.innerHTML - min)*fator) + "%"
    }
});

range.addEventListener("mouseenter", () => {
    progress.classList.remove('progress');
    progress.classList.add('progress-on');
    barra.classList.remove('barra');
    barra.classList.add('barra-on');
});

range.addEventListener("mouseleave", () => {
    progress.classList.remove('progress-on');
    progress.classList.add('progress');
    barra.classList.remove('barra-on');
    barra.classList.add('barra');
});
