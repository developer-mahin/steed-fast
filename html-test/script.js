/* This function is for Hamburger menu */
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

fetch('./fakedata.json')
    .then(response => response.json())
    .then(data => {
        const productSection = document.getElementById('productSection');
        const productContainer = document.createElement("div");
        productContainer.classList.add("product__container");

        data.forEach(slideData => {
            const { img, title, description } = slideData;

            const productSlide = document.createElement("div");
            productSlide.classList.add("product");

            productSlide.innerHTML = `
                <div class="">
                    <img src="${img}" alt="${title}" />
                    <div class="product__details">
                        <p class="title">${title}</p>
                        <p class="details">${description}</p>
                    </div>
                </div>
            `;

            productContainer.append(productSlide);
        });

        productSection.append(productContainer);
    })
    .catch(error => console.error(error));

document.querySelectorAll('.smooth-scroll').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});