// NAVIGATION
const navSelection = document.querySelectorAll('nav a');
navSelection[0].textContent = 'Services';
navSelection[1].textContent = 'Product';
navSelection[2].textContent = 'Vision';
navSelection[3].textContent = 'Features';
navSelection[4].textContent = 'About';
navSelection[5].textContent = 'Contact';

navSelection[0].style.color = 'green';
navSelection[1].style.color = 'green';
navSelection[2].style.color = 'green';
navSelection[3].style.color = 'green';
navSelection[4].style.color = 'green';
navSelection[5].style.color = 'green';

const newA = document.createElement('a');
newA.textContent = 'File Complaint';
const newNavA = document.querySelector('nav');
newNavA.append(newA);
newA.style.color = 'green';

const newNewA = document.createElement('a');
newNewA.textContent = 'Donate';
const newNewNavA = document.querySelector('nav');
newNewNavA.prepend(newNewA);
newNewA.style.color = 'green';

const logoImg = document.querySelector('#logo-img');
logoImg.src = "img/logo.png";

// TOP CONTENT
var topContent = document.querySelector('.cta-text h1');
topContent.innerHTML = 'DOM<br>Is<br>Awesome';

// TOP IMAGE
const topImg = document.querySelector('.cta img');
topImg.src = "img/header-img.png";

// BUTTON 
const getStartedBtn = document.querySelector('.cta button');
getStartedBtn.textContent = 'Get Started';

// MAIN CONTENT
const mainContHeadings = document.querySelectorAll('.text-content h4');
mainContHeadings[0].textContent = 'Features';
mainContHeadings[1].textContent = 'About';
mainContHeadings[2].textContent = 'Services';
mainContHeadings[3].textContent = 'Product';
mainContHeadings[4].textContent = 'Vision';


const textContent = document.querySelectorAll('.text-content p');
textContent[0].textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
textContent[1].textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
textContent[2].textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
textContent[3].textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
textContent[4].textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

const midImg = document.querySelector('#middle-img');
midImg.src = "img/mid-page-accent.jpg";

// CONTACT
const contactHeading = document.querySelector('.contact h4');
contactHeading.textContent = 'Contact';

const contactPar = document.querySelectorAll('.contact p');
contactPar[0].innerHTML = '123 Way 456 Street<br>Somewhere, USA';
contactPar[1].textContent = '1 (888) 888-8888';
contactPar[2].textContent = 'sales@greatidea.io';

// FOOTER
const footerText = document.querySelector('footer p');
footerText.textContent = 'Copyright Great Idea! 2018';

// const siteContent = {
//   {
//     "nav-item-1": "Services",
//     "nav-item-2": "Product",
//     "nav-item-3": "Vision",
//     "nav-item-4": "Features",
//     "nav-item-5": "About",
//     "nav-item-6": "Contact",
//     "img-src": "img/logo.png"
//   },
//   "cta": {
//     "h1": "DOM Is Awesome",
//     "button": "Get Started",
//     "img-src": "img/header-img.png"
//   },
//   "main-content": {
//     "features-h4":"Features",
//     "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
//     "about-h4":"About",
//     "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
//     "middle-img-src": "img/mid-page-accent.jpg",
//     "services-h4":"Services",
//     "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
//     "product-h4":"Product",
//     "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
//     "vision-h4":"Vision",
//     "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
//   },
//   "contact": {
//     "contact-h4" : "Contact",
//     "address" : "123 Way 456 Street Somewhere, USA",
//     "phone" : "1 (888) 888-8888",
//     "email" : "sales@greatidea.io",
//   },
//   "footer": {
//     "copyright" : "Copyright Great Idea! 2018"
//   },
// };

// Example: Update the img src for the logo
// let logo = document.getElementById("logo-img");
// logo.setAttribute('src', siteContent["nav"]["img-src"])
