// Carousel

const carousel = document.querySelector('.carousel');
const container = document.querySelector('.carousel-container');
const slides = document.querySelectorAll(".slide");
const prevButton = document.querySelector('#prev');
const nextButton = document.querySelector('#next');

let currentSlide = 0;




function showSlide(index) {


    slides.forEach((slide) => {
        slide.style.opacity = 0 // hide all the slides
    });

    slides[index].style.opacity = 1 // show the slides at the given index

}

function nextSlide() {
    if (currentSlide < container.children.length - 1) {
        currentSlide++

    } else {
        currentSlide = 0;
    }

    showSlide(currentSlide);
}

function prevSlide() {

    if (currentSlide > 0) {
        currentSlide--

    } else {
        currentSlide = container.children.length - 1
    }

    showSlide(currentSlide)
}

// autoplay carousel

let autoplay = setInterval(() => {
    nextSlide();
}, 5000);


nextButton.addEventListener('click', () => {
    clearInterval(autoplay);

    nextSlide();

    autoplay = setInterval(() => {
        nextSlide();
    }, 5000);

});

prevButton.addEventListener('click', () => {
    clearInterval(autoplay)

    prevSlide();

    autoplay = setInterval(() => {
        nextSlide();
    }, 5000);

})

showSlide(currentSlide);

// carousel hover to appear buttons

let carouselH = document.querySelector('.carousel')

carouselH.addEventListener('mouseover', () => {
    if (window.matchMedia('(max-width: 991px)').matches) {
        prevButton.style.display = 'none'
        nextButton.style.display = 'none'
    } else {
        prevButton.style.display = 'block'
        nextButton.style.display = 'block'
    }
})

carouselH.addEventListener('mouseout', () => {
    prevButton.style.display = 'none'
    nextButton.style.display = 'none'
})

// event on scroll

let gheteFotbal = document.querySelector('#gheteFotbal');
let toggleGheteFotbal = document.querySelector('#toggleGhete');
let portari = document.querySelector('#portari');
let mingi = document.querySelector('#mingi');
let reduceri = document.querySelector('#reduceri');

let header = document.querySelector('#header')
let nav = document.querySelector('#nav')


function scrollEvent() {
    if (window.scrollY > 0) {
        header.style.backgroundColor = `black`
        nav.style.backgroundColor = `white`
        nav.style.border = '1px solid #eef0f6'
        gheteFotbal.style.color = `black`
        portari.style.color = 'black'
        mingi.style.color = 'black'

    } else {
        header.style.backgroundColor = `rgba(0, 0, 0, 0)`
        nav.style.backgroundColor = `rgba(0, 0, 0, 0)`
        nav.style.border = 'none'
        gheteFotbal.style.color = `white`
        portari.style.color = `white`
        mingi.style.color = `white`
    }
}

window.addEventListener('scroll', scrollEvent)

header.addEventListener('mouseover', () => {
    header.style.backgroundColor = 'black'
    nav.style.backgroundColor = 'white'
    gheteFotbal.style.color = `black`
    portari.style.color = 'black'
    mingi.style.color = 'black'


})

function mouseout() {
    if (window.scrollY > 0) {
        header.style.backgroundColor = 'black'
        nav.style.backgroundColor = 'white'
    } else {
        header.style.backgroundColor = 'transparent'
        nav.style.backgroundColor = 'transparent'
        gheteFotbal.style.color = `white`
        portari.style.color = 'white'
        mingi.style.color = 'white'
    }
}

header.addEventListener('mouseout', mouseout)

function mouseover() {
    header.style.backgroundColor = 'black'
    nav.style.backgroundColor = 'white'
    gheteFotbal.style.color = `black`
    portari.style.color = 'black'
    mingi.style.color = 'black'
}

nav.addEventListener('mouseover', mouseover)

nav.addEventListener('mouseout', mouseout)

gheteFotbal.addEventListener('mouseenter', () => {
    gheteFotbal.style.color = 'greenyellow'
})

gheteFotbal.addEventListener('mouseleave', () => {
    if (window.scrollY > 0) {
        gheteFotbal.style.color = 'black'
    } else {
        gheteFotbal.style.color = 'white'
    }
})

portari.addEventListener('mouseenter', () => {
    portari.style.color = 'greenyellow'
})

portari.addEventListener('mouseleave', () => {
    if (window.scrollY > 0) {
        portari.style.color = 'black'
    } else {
        portari.style.color = 'white'
    }
})

mingi.addEventListener('mouseenter', () => {
    mingi.style.color = 'greenyellow'
})

mingi.addEventListener('mouseleave', () => {
    if (window.scrollY > 0) {
        mingi.style.color = 'black'
    } else {
        mingi.style.color = 'white'
    }
})

// login and register pages

let user = document.querySelector('#user')
let login = document.querySelector('#logIn')
let main = document.querySelector('main')

user.addEventListener('click', () => {
    main.style.display = 'none'
    login.style.display = 'flex'
    window.removeEventListener('scroll', scrollEvent)
    header.removeEventListener('mouseout', mouseout)
    header.style.backgroundColor = 'black'
    nav.removeEventListener('mouseout', mouseout)
    registerForm.style.display = 'none'
    productPage.style.display = 'none'
})

let register = document.querySelector('#register')
let registerForm = document.querySelector('#registerForm')


register.addEventListener('click', () => {
    login.style.display = 'none'
    registerForm.style.display = 'flex'
    registerForm.style.minHeight = '70vh'
    window.removeEventListener('scroll', scrollEvent)
    header.removeEventListener('mouseout', mouseout)
    nav.removeEventListener('mouseout', mouseout)
})

let pLogIn = document.querySelector('#pLogIn')

pLogIn.addEventListener('click', () => {
    login.style.display = 'flex'
    registerForm.style.display = 'none'
})

let logo = document.querySelector('#logo')

logo.addEventListener('click', () => {
    main.style.display = 'block'
    login.style.display = 'none'
    registerForm.style.display = 'none'
    window.addEventListener('scroll', scrollEvent)
    header.addEventListener('mouseout', mouseout)
    nav.addEventListener('mouseout', mouseout)
    productPage.style.display = 'none'

})

// log in and register functionality

const newUser = [{
    email: '',
    parola: ''
}]

let createEmail = document.querySelector('#createEmail')
let createParola = document.querySelector('#createParola')

let createAccount = document.querySelector('#createAccount')

createAccount.addEventListener('click', (event) => {

    if (createParola.value.length > 7) {
        newUser[0].email = createEmail.value
        newUser[0].parola = createParola.value
        registerForm.style.display = 'none'
        login.style.display = 'flex'
    } else {
        alert('parola trebuie sa contina 8 caractere')
    }

    event.preventDefault()
})

let userName = document.querySelector('#checkMail')
let password = document.querySelector('#checkPass')

let checkLogin = document.querySelector('#log-in')

checkLogin.addEventListener('click', (event) => {
    event.preventDefault()

    if (userName.value == newUser[0].email && password.value == newUser[0].parola) {
        location.href = 'user.html'
    } else {
        alert('user sau parola gresita')
    }
})

// product page

const products = [{
    poza: 'https://gfx.r-gol.com/media/res/products/90/160090/465x605/fb8399-060_1.jpg',
    text: 'Ghete de fotbal Nike Zoom Mercurial Vapor 15 Academy XXV FG/MG',
    link: 'https://www.r-gol.com/ro/ghete-de-fotbal-nike-zoom-mercurial-vapor-15-academy-xxv-fg-mg,p-160090',
    pret: '427 lei'
},
{
    poza: 'https://gfx.r-gol.com/media/res/products/89/160089/465x605/fb8397-060_7.jpg',
    text: 'Nike Zoom Mercurial Superfly 9 Elite XXV FG',
    link: 'https://www.r-gol.com/ro/nike-zoom-mercurial-superfly-9-elite-xxv-fg,p-160089',
    pret: '1387 lei'
},
{
    poza: 'https://gfx.r-gol.com/media/res/products/93/160093/465x605/fj2034-060_6.jpg',
    text: 'Nike Zoom Mercurial Superfly 9 Pro XXV FG Junior',
    link: 'https://www.r-gol.com/ro/nike-zoom-mercurial-superfly-9-pro-xxv-fg-junior,p-160093',
    pret: '587 lei'
},
{
    poza: 'https://gfx.r-gol.com/media/res/products/91/160091/465x605/fb8402-060_1.jpg',
    text: 'Nike Zoom Mercurial Superfly 9 Academy XXV FG/MG',
    link: 'https://www.r-gol.com/ro/nike-zoom-mercurial-superfly-9-academy-xxv-fg-mg,p-160091',
    pret: '480 lei'
},
{
    poza: 'https://gfx.r-gol.com/media/res/products/101/160101/465x605/dj4978-605_1.jpg',
    text: 'Ghete de fotbal Nike Zoom Mercurial Vapor 15 Elite FG',
    link: 'https://www.r-gol.com/ro/ghete-de-fotbal-nike-zoom-mercurial-vapor-15-elite-fg,p-160101',
    pret: '1312 lei'
},
{
    poza: 'https://gfx.r-gol.com/media/res/products/103/160103/465x605/dj5603-605_1.jpg',
    text: 'Ghete de fotbal Nike Mercurial Zoom Vapor 15 Pro FG',
    link: 'https://www.r-gol.com/ro/ghete-de-fotbal-nike-mercurial-zoom-vapor-15-pro-fg,p-160103',
    pret: '747 lei'
},
{
    poza: 'https://gfx.r-gol.com/media/res/products/106/160106/465x605/dj5631-605_1.jpg',
    text: 'Ghete de fotbal Nike Zoom Mercurial Vapor 15 Academy FG/MG',
    link: 'https://www.r-gol.com/ro/ghete-de-fotbal-nike-zoom-mercurial-vapor-15-academy-fg-mg,p-160106',
    pret: '427 lei'
},
{
    poza: 'https://gfx.r-gol.com/media/res/products/291/160291/465x605/dj5958-605_1.jpg',
    text: 'Ghete de fotbal Nike Mercurial Vapor 15 Club FG/MG Junior',
    link: 'https://www.r-gol.com/ro/ghete-de-fotbal-nike-mercurial-vapor-15-club-fg-mg-junior,p-160291',
    pret: '267 lei'
},
{
    poza: 'https://gfx.r-gol.com/media/res/products/298/160298/465x605/dj4977-605_1.jpg',
    text: 'Nike Zoom Mercurial Superfly 9 Elite FG',
    link: 'https://www.r-gol.com/ro/nike-zoom-mercurial-superfly-9-elite-fg,p-160298',
    pret: '1387 lei'
},
{
    poza: 'https://gfx.r-gol.com/media/res/products/292/160292/465x605/dj5598-605_6.jpg',
    text: 'Nike Zoom Mercurial Superfly 9 Pro FG',
    link: 'https://www.r-gol.com/ro/nike-zoom-mercurial-superfly-9-pro-fg,p-160292',
    pret: '800 lei'
},
{
    poza: 'https://gfx.r-gol.com/media/res/products/296/160296/465x605/dj5625-605_1.jpg',
    text: 'Nike Zoom Mercurial Superfly 9 Academy FG/MG ',
    link: 'https://www.r-gol.com/ro/nike-zoom-mercurial-superfly-9-academy-fg-mg,p-160296',
    pret: '480 lei'
},
{
    poza: 'https://gfx.r-gol.com/media/res/products/297/160297/465x605/dj5959-605_1.jpg',
    text: 'Nike Mercurial Superfly 9 Club FG/MG Junior',
    link: 'https://www.r-gol.com/ro/nike-mercurial-superfly-9-club-fg-mg-junior,p-160297',
    pret: '267 lei'
}]

let productsButton = document.querySelector('#productsButton')
let productPage = document.querySelector('.produse')

function addProducts(database, parent, clasa, tag) {
    for (let i = 0; i < database.length; i++) {
        let customElement = document.createElement(tag);
        customElement.setAttribute('class', `${clasa}`)

        parent.appendChild(customElement)

        let poza = document.createElement("img");
        poza.setAttribute("class", "card-image");
        poza.setAttribute("src", database[i].poza);

        customElement.appendChild(poza)

        let ancora = document.createElement("a");
        ancora.setAttribute("href", database[i].link);
        ancora.innerHTML = database[i].text;

        customElement.appendChild(ancora)

        let pret = document.createElement("p");
        pret.innerHTML = database[i].pret;
        pret.setAttribute("class", "pretProdus");

        customElement.appendChild(pret)
    }
}

let executeOnce = false

function runOnce() {
    if (!executeOnce) {
        addProducts(products, productPage, 'card', 'figure')
        executeOnce = true
    }
}

productsButton.addEventListener('click', () => {
    main.style.display = 'none'
    window.removeEventListener('scroll', scrollEvent)
    header.removeEventListener('mouseout', mouseout)
    nav.removeEventListener('mouseout', mouseout)
    productPage.style.display = 'flex'
    runOnce()

})

// nav on media query

let navButtons = document.querySelectorAll('.navButtons')
let headerButtons = document.querySelector('.headerButtons')
let body = document.querySelector('body')
const cloneNav = nav.cloneNode(true)
cloneNav.style.zIndex = 4

function addToNav() {

    if (window.innerWidth <= 991) {
        nav.remove()

        cloneNav.insertBefore(user, cloneNav.children[1])
        cloneNav.insertBefore(navButtons[0], cloneNav.children[2])
        cloneNav.insertBefore(navButtons[1], cloneNav.children[3])
        navButtons[2].style.display = 'block'
        body.insertBefore(cloneNav, body.children[1])

    } else {
        navButtons[2].style.display = 'none'
        headerButtons.insertBefore(user, headerButtons.children[1])
        headerButtons.insertBefore(navButtons[0], headerButtons.children[2])
        headerButtons.insertBefore(navButtons[1], headerButtons.children[3])
        cloneNav.remove()
        body.insertBefore(nav, body.children[1])
    }
}

addToNav();

window.addEventListener('resize', addToNav)