//SLIDER
const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let userWidth = window.innerWidth;
let index = 0;

prevBtn.addEventListener('click', () => {
    if(index > 0) {
        index--;
        slider.style = 'margin-left:' + -277 * index + 'px'
        
    }
})
nextBtn.addEventListener('click', () => {
    if(index < 3) {
        index++;
        slider.style = 'margin-left:' + -277 * index + 'px'
        console.log(userWidth);
    }
})



// IMAGE ANIMATION
window.addEventListener('scroll', () => {
    const imageOne = document.querySelector('.image-up');
    const imageTwo = document.querySelector('.image-down');
    let imageOnePosition = imageOne.getBoundingClientRect().top;
    let imageTwoPosition = imageTwo.getBoundingClientRect().top;

    let screenPosition = window.innerHeight;

    if (imageOnePosition < screenPosition) {
        imageOne.style.animation = 'active-up 1.5s ease-in-out'
        
    } else {
        imageOne.style.animation = ''
    }

    if (imageTwoPosition < screenPosition) {
        imageTwo.style.animation = 'active-down 1.5s ease-in-out'
    } else {
        imageTwo.style.animation = ''
    }
})

//SERVICES UL
const ulLink = document.querySelectorAll('.services__link');
ulLink.forEach(link => {
    link.addEventListener('click', (e) => {
    e.preventDefault();
    ulLink.forEach(lnk => {lnk.classList.remove('active-link')});
    if(!link.classList.contains('active-link')) {
        link.classList.add('active-link')
    } else {
        link.classList.remove('active-link')
    }}
)})