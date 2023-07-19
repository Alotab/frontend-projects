/*============ SHOW MENU =================== */
// const navMenu = document.getElementById('nav-menu')
// const navToggle = document.getElementById('nav-toggle');
// const navClose = document.getElementById('nav-close');

const primaryNav = document.querySelector('.primary-navigation');
const navToggleMobile = document.querySelector('.mobile-nav-toggle');
const navCloseToggle = document.querySelector('.mobile-nav-toggle-close');


//document.querySelector('#element').style.display = 'none';  bard
const elSearcIcon = document.querySelector('.search-icon')
const elSearchMenu = document.querySelector('.middle-colume-search')

// variables for chatbot 
const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");
const chatbox = document.querySelector(".chatbox");
const chatBotToggler = document.querySelector(".chatbot-toggler");
const chatbotCloseBtn = document.querySelector(".close-btn");









// prevent and enable scrolling when hambuger menu is clicked
function disableScroll() {
    // Get the current page scroll position
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  
        // if any scroll is attempted, set this to the previous value
        window.onscroll = function() {
            window.scrollTo(scrollLeft, scrollTop);
        };
  }
  
function enableScroll() {
    window.onscroll = function() {};
}  




/*============ middle search bar =================*/

if(elSearcIcon){
    elSearcIcon.addEventListener('click', ()=>{
        elSearchMenu.classList.add('middle-search');
    })
}


/*========== Hambuger Menu for small devices =============*/

navToggleMobile.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible');
    // const hamMenuVisibility = navToggleMobile.getAttribute('data-visible');
    // const closeMenuVisiblity =  navCloseToggle.getAttribute('data-visible');
    disableScroll() 
    if(visibility === "false"){
        primaryNav.setAttribute('data-visible', true);
        navToggleMobile.setAttribute('aria-expanded', true);
        navCloseToggle.setAttribute('aria-expanded', true);
    } 
});


navCloseToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible');

    enableScroll()
    if(visibility === 'true'){
        navCloseToggle.setAttribute('aria-expanded', false);
        primaryNav.setAttribute('data-visible', false);  
        navToggleMobile.setAttribute('aria-expanded', false);
    }
});





function preventScrolling() {
    document.addEventListener('click', function(event) {
        if (event.target.classList.contains('mobile-nav-toggle')) {
        event.preventDefault();
        document.body.classList.add('no-scroll');
        } else if (event.target.classList.contains('close-menu')) {
        document.body.classList.remove('no-scroll');
        }
    });
}

window.onload = preventScrolling;




//external share links

const detailImage = document.querySelector(".post-image");

const sharelinkOne = document.querySelector(".share-link");
const postdetailOne = document.querySelector(".post-main-detail");
const externalOne = document.querySelector(".external-share-container");


// Create a function to check if the div is reached
function isDivReached() {
  // Get the current scroll position
  const scrollPosition = window.scrollY;

  // Check if the scroll position is greater than or equal to the top of the div
  return scrollPosition >= externalOne.offsetTop - 750;
}

// Add an event listener to the window scroll event
window.addEventListener('scroll', function (e) {
    e.preventDefault();
  // Check if the div is reached
  if (isDivReached()) {
    sharelinkOne.classList.add('share-java');
  }
  else {
    sharelinkOne.classList.remove('share-java');
  }

});


function Reached() {
    // Get the current scroll position
    const scrollPosition = window.scrollY;

    // Check if the scroll position is greater than or equal to the top of the div
    return scrollPosition <= externalOne.offsetTop;
}


window.addEventListener('scroll', function (e) {
   
    if(Reached){
        sharelinkOne.classList.add("share-scroll");
    }
});


window.addEventListener('scroll', function (e) {
    const scrollPosition = window.pageYOffset;
    
    if (scrollPosition <= externalOne.offsetTop - 798) {  //>= externalOne.offsetTop
        sharelinkOne.classList.add('share-scroll');
    } else {
        sharelinkOne.classList.remove('share-scroll');
        

    }
});


// show the social media links when the share icon is clicked
const shareEl = document.querySelector('.share-share');
const socialContainerEl = document.querySelector('.social-cs99');

shareEl.addEventListener('click', () => {
    // socialContainerEl.classList.add('social-cs99-scroll');
});
















// const sectionOneOption = {
   
// };
// const sectionOneOption = {
//     // rootMargin: "-100px 0px 0px 0px"
// };

// const sectionOneObserver = new IntersectionObserver(function(entries, sectionOneObserver){

//         entries.forEach(entry => {
//             if(!entry.isIntersecting){
//                 sharelinkOne.classList.add('share-scroll');
//             }
           
//         })
// }, sectionOneOption);

// sectionOneObserver.observe(sharelinkOne);



// const detailObserver  = new IntersectionObserver(function(entries, sectionOneObserver){
//     entries.forEach(entry => {
//         if(!entry.isIntersecting){
            
//         }
//         else{
            
//             sharelinkOne.classList.add('share-java');
//         }
//     })
// }, sectionOneOption)

// detailObserver.observe(postdetailOne);





















  


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400
})
sr.reveal(`.home__data, .footer__container, .footer__group`);
sr.reveal(`.portfolio-container, .portfolio-card`, {delay: 700, origin: 'bottom'})
sr.reveal(`.portfolio-container, .portfolio-card`, {interval: 100})
sr.reveal(`.my-profile-introduction`, {origin: 'left'})
sr.reveal(`.my-profile-image`, {origin: 'right'})