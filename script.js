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

// #region HORIZONTAL NAVBAR

const hNav = document.querySelector('#horizontal-navbar')
const hNavTop = document.querySelector('#h-navbar-top')
const hNavLogo = document.querySelector('#h-navbar-logo')
const listTitle = document.querySelectorAll('.list-title')
const listContent = document.querySelectorAll('.list-content')
const listContentItems = document.querySelectorAll('.list-content-items')
const searchbar = document.querySelector('#searchbar')

hNav.addEventListener('mouseover', ()=>{
    hNav.classList.remove('h-navbar-pos')
    hNav.classList.add('h-navbar-slide')
});

hNav.addEventListener('mouseleave', ()=>{
    if (!searchbar.matches(':focus')){
    hNav.classList.add('h-navbar-pos')
    hNav.classList.remove('h-navbar-slide')
    }
});

listTitle.forEach(title=>{
    title.addEventListener('mouseover', ()=>{
        const titleChild = title.firstElementChild
        titleChild.classList.add('content-display')
        listContent.forEach(list=>{
            // list.parentNode.classList.add('content-display')
            title.classList.add('orange-bg')
            list.addEventListener('mouseover', ()=>{
                list.classList.add('content-display')
            })

        })
    })
    title.addEventListener('mouseleave', ()=>{
        const titleChild = title.firstElementChild
        titleChild.classList.remove('content-display')
        listContent.forEach(list=>{
            // list.parentNode.classList.remove('content-display')
            title.classList.remove('orange-bg')
            list.addEventListener('mouseleave', ()=>{
                list.classList.remove('content-display')
            })

        })
    })
})

searchbar.addEventListener('focus', () => {
    hNav.classList.add('h-navbar-slide');
    hNav.classList.remove('h-navbar-pos');
  });
  
  searchbar.addEventListener('blur', () => {
    hNav.classList.remove('h-navbar-slide');
    hNav.classList.add('h-navbar-pos');
  });

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

// #region HEADER PARALLAX
document.body.onscroll = function headerParallax() {  
    let scrolling = document.scrollingElement.scrollTop;
    let headerIMG = document.getElementById("header-img");
    let xPos = "70%";
    let factor = .30;
    let yPos = (scrolling - 1400) * factor;
    headerIMG.style.backgroundPosition = xPos + " " + yPos + "px";
  }
// #endregion














