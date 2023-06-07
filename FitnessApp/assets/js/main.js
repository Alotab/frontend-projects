/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');


if (navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu')
    })
}


if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = ()=>{
    const navMenu =document.getElementById('nav-menu')
    //when we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')

}

// click any of the nav links to close the show-menu
navLink.forEach(n => n.addEventListener('click', linkAction))





/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrolHeader = () =>{
    const header = document.getElementById('header')
    //when the scroll is greater than 50 viewport height, add the scroll-header classs to the header tag

    this.scrollY >= 50  ? header.classList.add('bg-header')
                        :  header.classList.remove('bg-header')
}

window.addEventListener('scroll', scrolHeader)


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute('id');
        const sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionClass.classList.add('active-link')
        }else{
            sectionClass.classList.remove('active-link')
        }

    })
}

window.addEventListener('scroll', scrollActive)


/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up');

    //when the scroll is higher than 350 viewport height, add the show-scroll class to bo the a tag with the scroll up
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollUp)



/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400
})
sr.reveal(`.home__data, .footer__container, .footer__group`);
sr.reveal(`.home__img`, {delay: 700, origin: 'bottom'})
sr.reveal(`.logos__img, .programe__card, .pricing__card`, {interval: 100})
sr.reveal(`.choose__img,  .calculate__content`, {origin: 'left'})
sr.reveal(`.choose__content, .calculate__img`, {origin: 'right'})


/*=============== CALCULATE JS ===============*/

const calculateForm = document.getElementById('calculate-form');
const calaculateCm = document.getElementById('calculate-cm');
const calculateKg = document.getElementById('calculate-kg');
const calculateMessage = document.getElementById('calculate-message');

const calculateBmi = (e) =>{
    e.preventDefault();
    
    //check if the fields have a value
    if(calaculateCm.value === '' || calculateKg.value === ''){
        // add and remove color
        calculateMessage.classList.remove('color-green');
        calculateMessage.classList.add('color-red');

        //show message
        calculateMessage.textContent = 'Fill in the Height and Weight'

        //Remocve message in three seconds
        setTimeout(() =>{
            calculateMessage.textContent = ''
        }, 3000)
    }else {

        //BMI Formula

        const cm = calaculateCm.value / 100;
        const kg = calculateKg.value;
        const bmi = Math.round(kg / (cm * cm));

        //Show your health status
        if(bmi < 18.5){
            // Add color and display
            calculateMessage.classList.add('color-green');
            calculateMessage.textContent = `Your BMI is ${bmi} and you are skinny`
        } else if(bmi < 25){
            calculateMessage.classList.add('color-green');
            calculateMessage.textContent = `Your BMI is ${bmi} and you are healthy`
        }else {
            calculateMessage.classList.add('color-green');
            calculateMessage.textContent = `Your BMI is ${bmi} and you are overwight`
        }

        // To clear the input field
        calaculateCm.value = '';
        calculateKg.value = '';

        //Remove message four seconds
        setTimeout(() =>{
            calculateMessage.textContent = ''
        }, 4000)
    }
}

calculateForm.addEventListener('submit', calculateBmi);


/*=============== EMAIL JS ===============*/

const contactForm = document.getElementById('contact-form');
const contactMessage = document.getElementById('contact-message');
const contactUser = document.getElementById('contact-user');


const sendEmail = (e) =>{
    e.preventDefault()


    //check if the field has a value
    if(contactUser.value === ''){
        //Add and remove color
        contactMessage.classList.remove('color-green');
        contactMessage.classList.add('color-red')

        //show message
        contactMessage.textContent = 'You must enter your email'

        //remove message three seconds
        setTimeout(()=>{
            contactMessage.textContent = ''
        }, 3000);
    } else {
        //serviceID -templateID -#form -piblickey
        emailjs.sendForm('service_fnnsj3c','template_yurvjrx','#contact-form','j8BCl38cNQFG1N06-')
            .then(() => {
                //show message and add color
                contactMessage.classList.add('color-green');
                contactMessage.textContent = 'You registered successfully'

                //remove message after three seconds
                setTimeout(() => {
                    contactMessage.textContent = ''
                }, 3000)
            }), (error) => {
                //mail sending error
                alert('OOPS! SOMETHING HAS FAILED...', error)
            }



            // to clear the input field
            contactUser.value = ''
    }

}


contactForm.addEventListener('submit', sendEmail);
