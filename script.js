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

listTitle.forEach(list => {
    const selectedList = list.nextElementSibling;
    list.addEventListener('mouseover', ()=>{
        listContent.forEach(item => {
            selectedList.classList.add('content-display')
            list.classList.add('orange-bg')
            item.addEventListener('mouseover', ()=>{
                item.classList.add('content-display')
                item.classList.add('orange-bg')
                // item.classList.add('list-white')
                hNav.classList.remove('h-navbar-pos')
                hNav.classList.add('h-navbar-slide')
                
            })
            listContentItems.forEach(selection =>{
                selection.addEventListener('mouseover', ()=>{
                    selection.parentNode.classList.add('orange-bg')
                })
            })
        })
    })
    list.addEventListener('mouseleave', ()=>{
        listContent.forEach(item => {
            selectedList.classList.remove('content-display')
            list.classList.remove('orange-bg')
            item.addEventListener('mouseleave', ()=>{
                item.classList.remove('content-display')
                item.classList.remove('orange-bg')
                if (!searchbar.matches(':focus')){
                hNav.classList.add('h-navbar-pos')
                hNav.classList.remove('h-navbar-slide')
            }
            })
        })
    })
});

// const hNav = document.querySelector('#horizontal-navbar');
// const hNavTop = document.querySelector('#h-navbar-top');
// const hNavLogo = document.querySelector('#h-navbar-logo');
// const listTitle = document.querySelectorAll('.list-title');
// const listContent = document.querySelectorAll('.list-content');
// const searchbar = document.querySelector('#searchbar');

// hNav.addEventListener('mouseover', () => {
//   hNav.classList.remove('h-navbar-pos');
//   hNav.classList.add('h-navbar-slide');
// });

// hNav.addEventListener('mouseleave', () => {
//   if (!searchbar.matches(':focus')) {
//     hNav.classList.add('h-navbar-pos');
//     hNav.classList.remove('h-navbar-slide');
//   }
// });

// listTitle.forEach((list) => {
//   const currentListContent = list.nextElementSibling;

//   list.addEventListener('mouseover', () => {
//     currentListContent.classList.add('content-display');
//     hNav.classList.remove('h-navbar-pos');
//     hNav.classList.add('h-navbar-slide');
//   });

//   list.addEventListener('mouseleave', () => {
//     currentListContent.classList.remove('content-display');
//     if (!searchbar.matches(':focus')) {
//       hNav.classList.add('h-navbar-pos');
//       hNav.classList.remove('h-navbar-slide');
//     }
//   });
// });

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














