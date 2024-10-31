/*~~~~~~~~~~~~~~~ NAVBAR ~~~~~~~~~~~~~~~*/ 
let menuIcon = document.querySelector("#menu-icon")
let navbar = document.querySelector('.navbar')

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle("ri-close-large-line")
    navbar.classList.toggle('active')
})

// active link
let sections = document.querySelectorAll("section")
let navLinks = document.querySelectorAll("header nav a")

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let Offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add("active")
            })
        }
    })
    
    // sticky navbar
    let header = document.querySelector('header')
    header.classList.toggle('sticky', window.screenY > 100)

    // remove toggle icon and navbar when click bar link (scroll)
    menuIcon.classList.remove("ri-close-large-line")
    navbar.classList.remove('active')
}

/*~~~~~~~~~~~~~~~ SHOW SCROLL UP ~~~~~~~~~~~~~~~*/ 
const scrollUp = () => {
    const scrollUp = document.getElementById("scroll-up")

    this.scrollY >= 350 ? scrollUp.classList.add("show-scroll") : scrollUp.classList.remove("show-scroll")
}

window.addEventListener ('scroll', scrollUp)
/*~~~~~~~~~~~~~~~ ANIMATION ~~~~~~~~~~~~~~~*/ 
const sr = ScrollReveal({
    reset: true,
    distance: "80px",
    duration: 2000,
    delay: 200
})

sr.reveal(".home-content, .heading", { origin: 'top'});
sr.reveal(".home-img, .services-container, .portofolio-box, contact-form", { origin: 'bottom'});
sr.reveal(".home-content h1, .about-img", { origin: 'left'});
sr.reveal(".home-content p, .about-content", { origin: 'right'});


/*~~~~~~~~~~~~~~~ TYPED JS ~~~~~~~~~~~~~~~*/
const typedHome = new Typed("multiple-text", {
    Strings: ['Frontend Developer', 'Graphic Designer', 'ICT Technician', 'Social Meadia Manager'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true

})