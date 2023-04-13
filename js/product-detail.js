const params = window.location.search;

console.log(params)

const index = params.split ("id=")[1].split("&")[0];

//obtener id de url. Metodo recomendado para obtener queryParams es usando URLSearchParams

const paramsUrl = new URLSearchParams(params);

const paramsEntries = Object.fromEntries(paramsUrl)

console.log(paramsEntries)

const indice= paramsEntries.id;

const products = JSON.parse(localStorage.getItem("products"));

const product = products[indice];

// document.body.innerHTML = `<p>${JSON.stringify(product)}</p>
//     <img src = ${product.image}>`

document.body.innerHTML = ` 
//!------------------HEADER--------------------
<header id="home" class="header">
<nav class="navbar">
    <a href="/index.html" class="navbar__nav-link">
        <img class="navbar__logo" src="/assets/images/logo1.abascay-sin fondo.png" alt="Logo del ecommerce">
    </a>
    <div class="user-navbar">
        <a href="/pages/order/order.html" class="user-navbar__cart-icon-container">
            <i class="fa-solid fa-cart-shopping"></i>
            <div class="user-navbar__cart-badge" id="cart-count">0</div>
        </a>
        <div class="__cart-icon-container">

        </div>
        <a href="/pages/login/login.html"> <div class="user-navbar__user-avatar-container">
            <!-- <i class="fa-solid fa-user loginLogo" class="user-navbar__user-avatar" alt="Imagen de usuario" id="loginLogo"></i> -->
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/100px-Default_pfp.svg.png" class="user-navbar__user-avatar" alt="Imagen de usuario">
        </div>
        </a>
        <!-- TODO: avatar de la persona logueada o nombre -->
    </div>
    
    <input type="checkbox" class="navbar__menu-btn" id="menu-btn">

    <label for="menu-btn" class="navbar__menu-label">
        <span class="navbar__menu-icon"></span>
    </label>


    <ul class="navbar__nav-links-container" id="navbar-list">
        <li class="navbar__nav-item">
            <a href="/index.html" class="navbar__nav-link">Inicio</a>
        </li>
        <li class="navbar__nav-item">
            <a href="/pages/contact/contact.html" class="navbar__nav-link">Contacto</a>
        </li>
        <li class="navbar__nav-item">
            <a href="/pages/about-us/about-us.html" class="navbar__nav-link">Nosotros</a>
        </li>
        <li class="navbar__nav-item">
            <a href="/pages/register/register.html" class="navbar__nav-link" target="_self">Registro</a>
        </li>
        <li class="navbar__nav-item" id="sign-in">
            <a href="/pages/login/login.html" class="navbar__nav-link" target="_blank">Login</a>
        </li>
    </ul>
</nav>



</header>

<main class="main">
<section class="section-cards">
    <div class="cards-container" id="card-container">
  
        <article class="card">
            <div class="card__header">
                <img src="/assets/images/Imagen3.webp" alt="Product Image" class="card__img">
            </div>
            <div class="card__body">
                <div class="card__title">
                    MAPLE POR 30 HUEVOS
                </div>
                <div class="card__description">
                    <p class="card__texto">Huevos de gallinas libres de jaula</p> 
                    
                </div>
                <div class="card__info">
                    <div class="card__date">
                    12/01/2023
                    </div>
                    <div class="card__price">
                    $900,00
                    </div>
                </div>
            </div>
            <div class="card__footerCard">
                <a class="card__btn-buy" href="#">
                    Comprar
                </a>
                <div class="card__btn-container">
                    <a class="card__btn" href="#">
                        Detalle
                    </a>
                </div>
            </div>
        </article> 
        </main>
    </div>
</section>
<footer class="footer">
<div class="footer__column">
    <ul class="footer__contact-container">
        <li class="footer__contact-item"> 
            <a href="https://www.facebook.com/casacampo.abascay" class="footer__contact-link">
                <i class="fa-brands fa-facebook footer__contact-icon footer__contact-icon--facebook"></i>
                Facebook
            </a>
        </li>
        <li class="footer__contact-item">
            <a href="https://www.instagram.com/elabascaybrandsen/" class="footer__contact-link">
                <i class="fa-brands fa-instagram 
                footer__contact-icon
                footer__contact-icon--instagram"></i>
                Instagram
            </a>
        </li>
        <li class="footer__contact-item">
            <a href="https://www.linkedin.com/in/consuelo-maff%C3%ADa-a25853112/" class="footer__contact-link">
                <i class="fa-brands fa-linkedin 
                footer__contact-icon
                footer__contact-icon--linkedin"></i>
                LinkedIn
            </a>
        </li>
    </ul>
</div>
<div class="footer__column">
    <img src="/assets/images/abascay.png" alt="Company Logo" class="footer__logo" width="100">
    <h2 class="footer__company-name">
        @ELABASCAYBRANDSEN
    </h2>
    <p class="footer__copyrigth">
        Todos los derechos reservados al Abascay
    </p>
</div>
<div class="footer__column">
    <ul class="footer__contact-container">
        <li class="footer__contact-item">
            <a href="tel:+5491156182673" class="footer__contact-link">
                <i class="fa-solid 
                fa-square-phone-flip 
                footer__contact-icon--phone"></i>
                Telefono
            </a>
        </li>
        <li class="footer__contact-item">
            <a href="/pages/contact/location.html" class="footer__contact-link">
                <i class="fa-solid 
                fa-location-dot 
                footer__contact-icon--location"></i>
                Localizacion
            </a>
        </li>
        <li class="footer__contact-item">
            <a href="mailto:holaabascay@gmail.com" class="footer__contact-link">
            
                
                <i class="fa-solid 
                fa-envelope 
                footer__contact-icon--email"></i>
                Email
            </a>
        </li>

    </ul>
</div>
</footer>

`
