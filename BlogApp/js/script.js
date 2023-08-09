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
const shareScroll = document.querySelector('.share-scroll');


let isAlive = false;
function addShareScrollBig(){
    const scrollPosition = window.scrollY;
    // scrollPosition <= externalOne.offsetTop - 699  desktop  // Small screens, laptops //  
    //  700 Mini Ipads / some large mobile devices 
    //  730 large desktop
    if(scrollPosition <= externalOne.offsetTop - 700){
        shareScroll.classList.add('active');
        shareScroll.classList.remove('share-scroll-position');
        // shareScroll.style.position="fixed";
        // shareScroll.style.background="pink";
    } 
    if(scrollPosition >= externalOne.offsetTop - 700){
        shareScroll.classList.remove('active');
        shareScroll.classList.add('share-scroll-position');
    }
}

window.addEventListener("scroll", addShareScrollBig);



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
const likeMouseOver = document.querySelector('.share-like');
const commentMouseOver = document.querySelector('.share-comment');
const bookmarkMouseOver = document.querySelector('.share-bookmark');
const shareMouseOver = document.querySelector('.share-share');
const likePop = document.querySelector('.pop-like');
const commentPop = document.querySelector('.pop-comment');
const bookmarkPop = document.querySelector('.pop-bookmark');
const sharePop = document.querySelector('.pop-share');

function showWidget() {
    likeMouseOver.addEventListener('mouseover', () =>{

        setTimeout(() => {
            likePop.classList.add('alert-active');
        }, 10);
        likeMouseOver.addEventListener('mouseout', () =>{
            likePop.classList.remove('alert-active');
        })
    });

    commentMouseOver.addEventListener('mouseover', () =>{
        setTimeout(() => {
            commentPop.classList.add('alert-active');
        }, 10);
        commentMouseOver.addEventListener('mouseout', () =>{
            commentPop.classList.remove('alert-active');
        })
    });

    bookmarkMouseOver.addEventListener('mouseover', () =>{
        setTimeout(() => {
            bookmarkPop.classList.add('alert-active');
        }, 10);
        bookmarkMouseOver.addEventListener('mouseout', () =>{
            bookmarkPop.classList.remove('alert-active');
        })
    });

    shareMouseOver.addEventListener('mouseover', () =>{
        setTimeout(() => {
            sharePop.classList.add('alert-active');
        }, 10);
        shareMouseOver.addEventListener('mouseout', () =>{
            sharePop.classList.remove('alert-active');
        })
    });
};
showWidget();




// copy permalink/url when user click permalink button
const button = document.querySelector('.permalink');
const copyArticl = document.querySelector('.permalink-message');

function permalinkShare(){
    if(button){
        button.addEventListener('click', (e) => {

            e.preventDefault()
            const url = window.location.href;
            const copied = navigator.clipboard.writeText(url);
        
            if (copied) {
                copyArticl.classList.add('show-permalink-message');
                e.preventDefault();
        
                setTimeout(()=>{
                    copyArticl.classList.remove('show-permalink-message');
                }, 1500);
            } 
        });
    };
}
permalinkShare();




// const shareLinkElements = document.querySelector('.share-link');
const lists = document.querySelectorAll('.pop');

lists.forEach(list => {
    list.addEventListener('mouseover', (e) => {
        likePop.classList.add('alert-active');
        commentPop.classList.add('alert-active');
    })

    likeMouseOver.addEventListener('mouseout', () =>{
        likePop.classList.remove('alert-active');
    })
})




/*================= REDIRECT TO EXTERNAL SOCIAL APP ===================*/
// Get all share buttons
const shareButtons = document.querySelectorAll('.share-button');

// Add click event listener to each button
shareButtons.forEach(button => {
   button.addEventListener('click', (e) => {
      e.preventDefault();

      // Get the URL of the current page
      const url = window.location.href;

      // Get the social media platform from the button's class name
      const platform = button.classList[1];

      // Set the URL to share based on the social media platform
      let shareUrl;
      switch (platform) {
         case 'facebook':
         shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
         break;
         case 'twitter':
         shareUrl = `https://twitter.com/share?url=${encodeURIComponent(url)}`;
         break;
         case 'linkedin':
         shareUrl = `https://www.linkedin.com/shareArticle?url=${encodeURIComponent(url)}`;
         break;
         case 'reddit':
         shareUrl = `https://reddit.com/submit?url=${encodeURIComponent(url)}`;
         break;
         case 'whatsapp':
         shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(url)}`;
         break;
      }

      // Open a new window to share the URL
      window.open(shareUrl, '_blank');
   });
});















/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400
})
sr.reveal(`.home__data, .footer__container, .footer__group`);
sr.reveal(`.portfolio-container, .portfolio-card`, {delay: 700, origin: 'bottom'});
sr.reveal(`.portfolio-container, .portfolio-card`, {interval: 100});
sr.reveal(`.my-profile-introduction`, {origin: 'left'});
sr.reveal(`.my-profile-image`, {origin: 'right'})