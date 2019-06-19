const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};


// NAVIGATION
const navLinks = document.querySelectorAll('nav a');

// navSelection[0].textContent = 'Services';
// navSelection[1].textContent = 'Product';
// navSelection[2].textContent = 'Vision';
// navSelection[3].textContent = 'Features';
// navSelection[4].textContent = 'About';
// navSelection[5].textContent = 'Contact';

// navSelection[0].style.color = 'green';
// navSelection[1].style.color = 'green';
// navSelection[2].style.color = 'green';
// navSelection[3].style.color = 'green';
// navSelection[4].style.color = 'green';
// navSelection[5].style.color = 'green';

navLinks.forEach((a, i) => {
  a.style.color = 'green';
  a.textContent = siteContent.nav[`nav-item-${i+1}`]
});

const navHelp = document.createElement('a');
navHelp.textContent = 'Help';
const newNavA = document.querySelector('nav');
newNavA.append(navHelp);
navHelp.style.color = 'green';
navHelp.href = '#';

const navDonate = document.createElement('a');
navDonate.textContent = 'Donate';
const newNewNavA = document.querySelector('nav');
newNewNavA.prepend(navDonate);
navDonate.style.color = 'green';
navDonate.href = '#';

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
const mainHeadings = document.querySelectorAll('.main-content h4');

mainHeadings[0].textContent = siteContent['main-content']['features-h4'];
mainHeadings[1].textContent = siteContent['main-content']['about-h4'];
mainHeadings[2].textContent = siteContent['main-content']['services-h4'];
mainHeadings[3].textContent = siteContent['main-content']['product-h4'];
mainHeadings[4].textContent = siteContent['main-content']['vision-h4'];

// TRYING TO GRAB CONTENT VIA A METHOD

// mainHeadings.forEach((el, i) => {
//   el.textContent = siteContent.main-[`features-${i+1}`]
// });


// mainHeadings.forEach((el, i) => {
//   el.textContent = siteContent["main-content"]["features-h4"][i++]
// });

const featuresContent = document.querySelectorAll('.text-content p');

featuresContent[0].textContent = siteContent['main-content']['features-content'];
featuresContent[1].textContent = siteContent['main-content']['about-content'];
featuresContent[2].textContent = siteContent['main-content']['services-content'];
featuresContent[3].textContent = siteContent['main-content']['product-content'];
featuresContent[4].textContent = siteContent['main-content']['vision-content'];

// TRYING TO GRAB CONTENT VIA A METHOD

// featuresContent.forEach((el, i) => {
//   el.textContent = siteContent['main-content']['features-content'][i++];
// });

const midImg = document.querySelector('#middle-img');
midImg.src = "img/mid-page-accent.jpg";

// CONTACT
const contactHeading = document.querySelector('.contact h4');
contactHeading.textContent = siteContent['contact']['contact-h4'];

const contactPar = document.querySelectorAll('.contact p');
contactPar[0].innerHTML = '123 Way 456 Street<br>Somewhere, USA';
contactPar[1].textContent = siteContent['contact']['phone'];
contactPar[2].textContent = siteContent['contact']['email'];

// FOOTER
const footerText = document.querySelector('footer p');
footerText.textContent = siteContent['footer']['copyright'];


// Example: Update the img src for the logo
// let logo = document.getElementById("logo-img");
// logo.setAttribute('src', siteContent["nav"]["img-src"])
