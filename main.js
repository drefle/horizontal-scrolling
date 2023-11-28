const galleryContainer = document.querySelector('.gallery-container');
const scrollDistance = 320; // Ajustez cette valeur selon la largeur de chaque élément + espacement

galleryContainer.addEventListener('wheel', (e) => {
    galleryContainer.scrollLeft += e.deltaY;
});

const navBtn = document.querySelector('.navBtn')
const navMenu = document.querySelector('.navMenu')
const navBg = document.querySelector('.navMenu_bg')
const listNaviLink = document.querySelectorAll('.listNaviLink')
const openMenuBtn = document.querySelector('.dots');
const closeMenuBtn = document.querySelector('.closeBtn');

function toggleHide(){
  navBtn.classList.toggle('hide')
  navMenu.classList.toggle('hide')
  closeMenuBtn.classList.toggle('hide')
  navBg.classList.toggle('open')
  listNaviLink.forEach((item)=>{
    item.classList.toggle('hide')
  })
}

openMenuBtn.addEventListener('click',toggleHide)
closeMenuBtn.addEventListener('click',toggleHide)