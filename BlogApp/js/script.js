/*============ SHOW MENU =================== */
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



/*=============== EXTERNAL LINK SCREEN  ===============*/
// const detailImage = document.querySelector(".post-image");
const sharelinkOne = document.querySelector(".share-link");
const postdetailOne = document.querySelector(".post-main-detail");
const externalOne = document.querySelector(".external-share-container");

function shareLinkfun(entries){
    const bottom = window.innerHeight - 30;
    if (entries[0].intersectionRect.bottom >= bottom) {
        console.log('Element is visible');
    }
}

const options = {
    // root: null,
   rootMargin: "0px 0px 30px 0px",
//    rootMargin: "30px",
   threshold: 0,
}
const shareLinkObserver =  new IntersectionObserver(shareLinkfun, options);
// shareLinkObserver.observe(sharelinkOne);



// const shareLinkScroll = new IntersectionObserver((entries, observe) => {
//     // const bottom = window.innerHeight - 50;
//     // if (entries[0].intersectionRect.bottom <= bottom) {
//     //     // console.log('Element is bottom');

//     // }
//     const bottom = window.innerHeight - 30;
    
//     if(entries[0].intersectionRect.bottom >= bottom && sharelinkOne.getBoundingClientRect.top <= window.innerHeight / 2){
//         console.log('hi');
//         shareLinkScroll.unobserve(sharelinkOne);
//     }
// }, {
//     root: null,
//     threshold: 0
// });

// shareLinkScroll.observe(sharelinkOne);

const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
    //   sharelinkOne.classList.add('share-java');
    //   sharelinkOne.classList.remove('share-scroll');
     
    
      console.log('hi');
      
    } else {
        // sharelinkOne.classList.add('share-scroll');
    }
  }, {
    // rootMargin: '-750px 0px 0px 0px',
    // rootMargin: "0px 0px 0px 0px",
    threshold: 0,
  });
  
//   observer.observe(sharelinkOne);


//   const sharelinkOne = document.querySelector('#your-div-id');
  let isDivReached = false;
  
  const checkDivPosition = () => {
    const divTop = externalOne.offsetTop - 750;
    const divBottom = externalOne.offsetTop + externalOne.offsetHeight - 30;
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
  
    if (scrollPosition >= divTop && scrollPosition <= divBottom && !isDivReached) {
    //   sharelinkOne.classList.add('share-java');
      isDivReached = true;
    } else if ((scrollPosition < divTop || scrollPosition > divBottom) && isDivReached) {
    //   sharelinkOne.classList.remove('share-java');
    //   isDivReached = false;
    }else {
        sharelinkOne.classList.remove('share-java');
    }
  
    // if (scrollPosition + windowHeight >= divBottom && !isDivReached) {
    //   sharelinkOne.classList.add('share-scroll');
    //   isDivReached = true;
    // } else if (scrollPosition + windowHeight < divBottom && isDivReached) {
    //   sharelinkOne.classList.remove('share-scroll');
    //   isDivReached = false;
    // }
  };
  
  window.addEventListener('scroll', checkDivPosition);
  
 







/// Create a function to check if the div is reached
// function isDivReached() {
//   /// Get the current scroll position
//   const scrollPosition = window.scrollY;

//   /// Check if the scroll position is greater than or equal to the top of the div
//   return scrollPosition >= externalOne.offsetTop - 750;
// }

// Add an event listener to the window scroll event
// window.addEventListener('scroll', function (e) {
//     e.preventDefault();
//   // Check if the div is reached
//   if (isDivReached()) {
//     sharelinkOne.classList.add('share-java');
//   }
//   else {
//     sharelinkOne.classList.remove('share-java');
//   }
// });

const socialBox = () => {
    const scrollPosition = window.scrollY;


    if(scrollPosition <= externalOne.offsetTop || scrollPosition <= externalOne.offsetTop - 750){
        // sharelinkOne.classList.add("share-scroll");
        sharelinkOne.classList.add('share-java');
    } else {
        sharelinkOne.classList.remove('share-java');
    }

    if(scrollPosition <= externalOne.offsetTop){
        sharelinkOne.classList.add("share-scroll");
    }

    if(window.scrollY <= externalOne.offsetTop - 705){
        sharelinkOne.classList.add('share-scroll');
    } else {
        sharelinkOne.classList.remove('share-scroll');
    }
}


window.addEventListener('scroll', socialBox);


// function Reached() {
//     /// Get the current scroll position
//     const scrollPosition = window.scrollY;

//     /// Check if the scroll position is greater than or equal to the top of the div
//     return scrollPosition <= externalOne.offsetTop;
// }

//// prevent scroll event
// window.addEventListener('scroll', function (e) {
//     if(Reached){
//         sharelinkOne.classList.add("share-scroll");
//     }
// });
// window.addEventListener('scroll', function (e) {
//     const scrollPosition = window.pageYOffset;
    
//     if (scrollPosition <= externalOne.offsetTop - 798) { 
//         sharelinkOne.classList.add('share-scroll');
//     } else {
//         sharelinkOne.classList.remove('share-scroll');
//     }
// });






/*=============== POPUP SHARE LIKE SCREEN ===============*/
const shareEl = document.querySelector('.share-share');
const socialContainerEl = document.querySelector('.social-scroll-wrapper');
const hidePopupWidget = document.querySelector('.kat');



// function noscrolling(){
//     shareEl.addEventListener('click', () => {
//         isSocialLinks = !isSocialLinks;
    
//         socialContainerEl.classList.toggle('show-social-links');
      
//             // document.body.classList.add('no-scroll');s
    
//     });
//     document.addEventListener('click', (e) => {
//         if (!socialContainerEl.contains(e.target) && !shareEl.contains(e.target)) {
//             // socialContainerEl.classList.remove('show-social-links');
//         }
//     });
// }

let showMes = false;
// var showWidget = true;
if(shareEl){
    shareEl.addEventListener('click', () => {
        socialContainerEl.classList.add('show-social-links');
        likePop.classList.remove('alert-active');
        
        showMes = true;
        if(showMes){
            document.body.style.overflow = 'hidden';
            
        }
    
        document.addEventListener('click', (e) => {
            if (!socialContainerEl.contains(e.target) && !shareEl.contains(e.target)) {
                socialContainerEl.classList.remove('show-social-links');
                document.body.style.overflow = 'auto';
              
            }
        });    
    });
}


/////show widget when mouseover icon
// const likeMouseOver = document.querySelector('.share-like');
// const commentMouseOver = document.querySelector('.share-comment');
// const bookmarkMouseOver = document.querySelector('.share-bookmark');
// const shareMouseOver = document.querySelector('.share-share');
// const likePop = document.querySelector('.pop-like');
// const commentPop = document.querySelector('.pop-comment');
// const bookmarkPop = document.querySelector('.pop-bookmark');
// const sharePop = document.querySelector('.pop-share');

// function showWidget() {
//     likeMouseOver.addEventListener('mouseover', () =>{

//         setTimeout(() => {
//             likePop.classList.add('alert-active');
//         }, 10);
//         likeMouseOver.addEventListener('mouseout', () =>{
//             likePop.classList.remove('alert-active');
//         })
//     });

//     commentMouseOver.addEventListener('mouseover', () =>{
//         setTimeout(() => {
//             commentPop.classList.add('alert-active');
//         }, 10);
//         commentMouseOver.addEventListener('mouseout', () =>{
//             commentPop.classList.remove('alert-active');
//         })
//     });

//     bookmarkMouseOver.addEventListener('mouseover', () =>{
//         setTimeout(() => {
//             bookmarkPop.classList.add('alert-active');
//         }, 10);
//         bookmarkMouseOver.addEventListener('mouseout', () =>{
//             bookmarkPop.classList.remove('alert-active');
//         })
//     });

//     shareMouseOver.addEventListener('mouseover', () =>{
//         setTimeout(() => {
//             sharePop.classList.add('alert-active');
//         }, 10);
//         shareMouseOver.addEventListener('mouseout', () =>{
//             sharePop.classList.remove('alert-active');
//         })
//     });
// };
// showWidget();


// // copy permalink/url when user click permalink button
// const permalinkEl = document.querySelector('.permalink');
// const copyArticl = document.querySelector('.permalink-message');



// permalinkEl.addEventListener('click', (e) => {
//     copyArticl.classList.add('show-permalink-message');
//     e.preventDefault();


//     setTimeout(()=>{
//         copyArticl.classList.remove('show-permalink-message');
//     }, 1000)
// })





// const shareLinkElements = document.querySelector('.share-link');
// const lists = document.querySelectorAll('.pop');

// lists.forEach(list => {
//     list.addEventListener('mouseover', (e) => {
//         likePop.classList.add('alert-active');
//         commentPop.classList.add('alert-active');
//     })

//     likeMouseOver.addEventListener('mouseout', () =>{
//         likePop.classList.remove('alert-active');
//     })
// })













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