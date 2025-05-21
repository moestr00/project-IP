const btnOpen = document.querySelector('.open-btn');
const popup = document.querySelector('.popup');
const closePopup = document.querySelector('.popup-close');

btnOpen.addEventListener('click', function() {
    if(popup.style.display === 'none' || popup.style.display === 'none' || popup.style.display === '') { 
        popup.style.display = 'flex';
    }
})
closePopup.addEventListener('click', function() {
    popup.style.display = 'none';
})
const btnOpen0 = document.querySelector('.open-btn0');
const popup0 = document.querySelector('.popup0');
const closePopup0 = document.querySelector('.popup-close0');

btnOpen0.addEventListener('click', function() {
    if(popup0.style.display === 'none' || popup0.style.display === 'none' || popup0.style.display === '') { 
        popup0.style.display = 'flex';
    }
})
closePopup0.addEventListener('click', function() {
    popup0.style.display = 'none';
})
const btnOpen2 = document.querySelector('.open-btn2');
const popup2 = document.querySelector('.popup2');
const closePopup2 = document.querySelector('.popup-close2');

btnOpen2.addEventListener('click', function() {
    if(popup2.style.display === 'none' || popup2.style.display === 'none' || popup2.style.display === '') { 
        popup2.style.display = 'flex';
    }
})
closePopup2.addEventListener('click', function() {
    popup2.style.display = 'none';
})