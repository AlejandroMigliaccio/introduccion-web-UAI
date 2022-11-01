const logo = document.getElementById('insta');
const card1 = document.getElementById('artTae');
const card2 = document.getElementById('artKwon');
const card3 = document.getElementById('artDo');

logo.addEventListener('click', () => {
    window.open("https://www.instagram.com/ptg.training/",)
})

card1.addEventListener('click', () => {
    window.location.replace('pages/taekwondo.html');
})


card2.addEventListener('click',()=> {
    window.location.replace('pages/sucursales.html');
})


card3.addEventListener('click',()=> {
    window.location.replace('pages/horarios.html');
})