const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const menu = document.querySelector(".nav__items");

// Open NAV menu
menuBtn.addEventListener('click', () => {
    menu.style.display = 'block'; //Show menu items
    menuBtn.style.display = 'none'; //hide the toggle menu
    closeBtn.style.display = 'inline-block'; //Show the closse button to close menu
})

// Close NAV menu
closeBtn.addEventListener('click', () => {
    menu.style.display = 'none'; //hide nav items
    menuBtn.style.display = 'inline-block'; //show toggle menu
    closeBtn.style.display = 'none'; //hide close button
})

// show/hide faqs
const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');
        //change icon
        const icon = faq.querySelector('.faq__icon i');
        if(icon.className === 'uil uil-plus') {
            icon.className = 'uil uil-minus';
        } else {
            icon.className = 'uil uil-plus'
        }
    })
})

//Add background style to navbar
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);
})