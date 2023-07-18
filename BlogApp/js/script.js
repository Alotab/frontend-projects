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


const detailPost = document.querySelector('.main-post');
const bottomShareLink = document.querySelector('.share-link');
const shareScroll = document.querySelector('.share-scroll');


// console.log(detailPost.offsetHeight);

window.addEventListener("scroll", (e) =>{
    e.preventDefault();
    // if(window.scrollY > detailPost.offsetHeight - detailPost.offsetTop + 76){
    //     bottomShareLink.classList.remove('.share-scroll');
    //     // alert('he')
    // }

    // if(window.screenY < detailPost.offsetHeight - detailPost.offsetTop6){
    //     console.log('hi')
    // }
})


$(window).scroll(function() {
    var thirdDiv = $('.detail-post');
    if($(this).scrollTop() + $(this).height() >= thirdDiv.offset().top && $(this).scrollTop() <= thirdDiv.offset().top + thirdDiv.outerHeight()) {
       console.log("You have reached the bottom of the screen and the third div!");
    }
 });


//  $(window).scroll(function() {
//     var thirdDiv = $('.detail-post');
//     if($(this).scrollTop() <= thirdDiv.offset().top && $(this).scrollTop() + $(this).height() >= thirdDiv.offset().top + thirdDiv.outerHeight()) {
//        console.log("You have reached the top of the screen and the third div!");
//     }
//  });









  


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