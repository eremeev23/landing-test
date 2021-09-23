// VALIDATION
const form = document.querySelector('.form');
const submitButton = document.querySelector('.submit__button');
const checkbox = document.querySelector('#checkbox');
let xhr = new XMLHttpRequest();
const formResponse = document.querySelector('.form-response');
let nameInput = document.querySelector('.name__input');
let phoneInput = document.querySelector('.tel__input');

checkbox.addEventListener('click', () => {
    if(checkbox.checked) {
        submitButton.removeAttribute('disabled');
        console.log(submitButton);
    }
    if(!checkbox.checked) {
        submitButton.setAttribute('disabled', 'false');
        console.log(submitButton);
    }
    console.log(checkbox.checked);
})

form.onsubmit = function(e) {
    e.preventDefault();
    if(nameInput.value && phoneInput.value){
    xhr.open('POST', 'url.php');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send('name__input=' + nameInput.value + '&tel__input=' + phoneInput.value)
    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4 && xhr.status === 200) {
            formResponse.style.display = 'inline-block';
            form.style.display = 'none';
        }
    }
    formResponse.style.display = 'inline-block';
    form.style.display = 'none';
    }

    console.log(nameInput.value);
    console.log(phoneInput.value);
}

//SLIDER
const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
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