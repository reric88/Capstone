// #region NAVBAR
const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');
const nav = document.querySelectorAll('.nav');
const slide = document.querySelector('.slide-out');

openBtn.addEventListener('click', () => {
    if (!openBtn.classList.contains('slide-out')){
        nav.forEach(navEl => navEl.classList.add('visible'));
        openBtn.classList.add('slide-out');
    } else {
        nav.forEach(navEl => navEl.classList.remove('visible'));
        openBtn.classList.remove('slide-out');
    }
});

// closeBtn.addEventListener('click', () => {
//     nav.forEach(navEl => navEl.classList.remove('visible'));
//     openBtn.classList.remove('slide-out');
// });
// #endregion

// #region NAVBAR ACCORDIAN
const toggleBtn = document.querySelectorAll('.dropdown-title');
const toggleBtnParents = document.querySelectorAll('.dropdown');

toggleBtn.forEach(btn => {
    btn.addEventListener('click', ()=>{
        btn.parentNode.classList.toggle('active')
    })
});
    



// #endregion

document.body.onscroll = function headerParallax() {  
    let scrolling = document.scrollingElement.scrollTop;
    let headerIMG = document.getElementById("header-img");
    let xPos = "center";
    let factor = .30;
    let yPos = (scrolling - 1400) * factor;
    headerIMG.style.backgroundPosition = xPos + " " + yPos + "px";
  }














