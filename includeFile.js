const header = './components/Header.html';
const banner = './components/Banner.html';
const offbanner = './components/OfferBanner.html';
const about = './components/About.html';
const shopHomePage = './components/ShopHomePage.html';
const counter = './components/Counter.html';
const offer = './components/offer.html';
const whoweare = './components/whoweare.html';
const gallery = './components/gallery.html';
const blog = './components/blog.html';
const newslateer = './components/newslateer.html';
const footer = './components/footer.html';
const bannerContact = './components/bannerContact.html';
const inforContact = './components/inforContact.html';
const locationContact = './components/locationContact.html';
const formContact = './components/formContact.html';
const headerShop = './components/headerShop.html';
const bannerShop = './components/bannerShop.html';


fetch(header)
    .then((response) => {
        console.log(response)
        return response.text();
    })
    .then(function (string) {
        const headerSection = document.getElementById("headerSection");
        headerSection.innerHTML = string;
    })
    .catch(function (err) {
        console.log('Fetch Error', err);
    });

fetch(banner)
    .then((response) => {
        console.log(response)
        return response.text();
    })
    .then(function (string) {
        const bannerSection = document.getElementById("bannerSection");
        bannerSection.innerHTML = string;
    })
    .catch(function (err) {
        console.log('Fetch Error', err);
    });

fetch(offbanner)
    .then((response) => {
        console.log(response)
        return response.text();
    })
    .then(function (string) {
        const offbannerSection = document.getElementById("offbannerSection");
        offbannerSection.innerHTML = string;
    })
    .catch(function (err) {
        console.log('Fetch Error', err);
    });

fetch(about)
    .then((response) => {
        console.log(response)
        return response.text();
    })
    .then(function (string) {
        const aboutSection = document.getElementById("aboutSection");
        aboutSection.innerHTML = string;
    })
    .catch(function (err) {
        console.log('Fetch Error', err);
    });

fetch(shopHomePage)
    .then((response) => {
        console.log(response)
        return response.text();
    })
    .then(function (string) {
        const shopHomepageSection = document.getElementById("shopHomepageSection");
        shopHomepageSection.innerHTML = string;
    })
    .catch(function (err) {
        console.log('Fetch Error', err);
    });

fetch(counter)
    .then((response) => {
        console.log(response)
        return response.text();
    })
    .then(function (string) {
        const counterSection = document.getElementById("counterSection");
        counterSection.innerHTML = string;
    })
    .catch(function (err) {
        console.log('Fetch Error', err);
    });

fetch(offer)
    .then((response) => {
        console.log(response)
        return response.text();
    })
    .then(function (string) {
        const offerSection = document.getElementById("offerSection");
        offerSection.innerHTML = string;
    })
    .catch(function (err) {
        console.log('Fetch Error', err);
    });

fetch(whoweare)
    .then((response) => {
        console.log(response)
        return response.text();
    })
    .then(function (string) {
        const whoweareSection = document.getElementById("whoweareSection");
        whoweareSection.innerHTML = string;
    })
    .catch(function (err) {
        console.log('Fetch Error', err);
    });

fetch(gallery)
    .then((response) => {
        console.log(response)
        return response.text();
    })
    .then(function (string) {
        const gallerySection = document.getElementById("gallerySection");
        gallerySection.innerHTML = string;
    })
    .catch(function (err) {
        console.log('Fetch Error', err);
    });

fetch(blog)
    .then((response) => {
        console.log(response)
        return response.text();
    })
    .then(function (string) {
        const blogSection = document.getElementById("blogSection");
        blogSection.innerHTML = string;
    })
    .catch(function (err) {
        console.log('Fetch Error', err);
    });

fetch(newslateer)
    .then((response) => {
        console.log(response)
        return response.text();
    })
    .then(function (string) {
        const newslateerSection = document.getElementById("newslateerSection");
        newslateerSection.innerHTML = string;
    })
    .catch(function (err) {
        console.log('Fetch Error', err);
    });

fetch(footer)
    .then((response) => {
        console.log(response)
        return response.text();
    })
    .then(function (string) {
        const footerSection = document.getElementById("footerSection");
        footerSection.innerHTML = string;
    })
    .catch(function (err) {
        console.log('Fetch Error', err);
    });

fetch(bannerContact)
    .then((response) => {
        console.log(response)
        return response.text();
    })
    .then(function (string) {
        const bannerContactSection = document.getElementById("bannerContactSection");
        bannerContactSection.innerHTML = string;
    })
    .catch(function (err) {
        console.log('Fetch Error', err);
    });

fetch(inforContact)
    .then((response) => {
        console.log(response)
        return response.text();
    })
    .then(function (string) {
        const inforContactSection = document.getElementById("inforContactSection");
        inforContactSection.innerHTML = string;
    })
    .catch(function (err) {
        console.log('Fetch Error', err);
    });

fetch(locationContact)
    .then((response) => {
        console.log(response)
        return response.text();
    })
    .then(function (string) {
        const locationContactSection = document.getElementById("locationContactSection");
        locationContactSection.innerHTML = string;
    })
    .catch(function (err) {
        console.log('Fetch Error', err);
    });

fetch(formContact)
    .then((response) => {
        console.log(response)
        return response.text();
    })
    .then(function (string) {
        const formContactSection = document.getElementById("formContactSection");
        formContactSection.innerHTML = string;
    })
    .catch(function (err) {
        console.log('Fetch Error', err);
    });

fetch(headerShop)
    .then((response) => {
        console.log(response)
        return response.text();
    })
    .then(function (string) {
        const headerShopSection = document.getElementById("headerShopSection");
        headerShopSection.innerHTML = string;
    })
    .catch(function (err) {
        console.log('Fetch Error', err);
    });

fetch(bannerShop)
    .then((response) => {
        console.log(response)
        return response.text();
    })
    .then(function (string) {
        const bannerShopSection = document.getElementById("bannerShopSection");
        bannerShopSection.innerHTML = string;
    })
    .catch(function (err) {
        console.log('Fetch Error', err);
    });

