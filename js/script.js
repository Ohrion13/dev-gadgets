const nextBtn = document.querySelector('.pictures-next');
const prevBtn = document.querySelector('.pictures-prev');

const currentImg = document.querySelector('.pictures-img');
const thumbImgs = document.querySelectorAll('.thumbs-itm img');

const addBtn = document.querySelector('.add-cta');
let addQty = document.querySelector('.add-qty');
let cartNumb = document.querySelector('.cart-nb');

const AdvantagesBtn = document.querySelector('.product-acrd-lnk:nth-of-type(1)');
const FeaturesBtn = document.querySelector('.product-acrd-lnk:nth-of-type(2)');
const displayAdvantages = document.querySelector('.product-advantages');
const displayFeatures = document.querySelector('.product-car');

let currentIndex = 0;


/**
 * allows you to move to the next image by clicking on the right button.
 */
function skipNextImageMobile() {
    currentIndex = (currentIndex + 1) % thumbImgs.length;
    const nextImgSrc = thumbImgs[currentIndex].getAttribute('src');
    currentImg.setAttribute('src', nextImgSrc);
}

nextBtn.addEventListener('click', skipNextImageMobile);


/**
 * allows you to return to the previous image by clicking on the left button.
 */
function skipPrevImageMobile() {
    currentIndex = (currentIndex - 1 + thumbImgs.length) % thumbImgs.length;
    const prevImgSrc = thumbImgs[currentIndex].getAttribute('src');
    currentImg.setAttribute('src', prevImgSrc);
}

prevBtn.addEventListener('click', skipPrevImageMobile);


/**
 * allows you to change the top image by hovering over the image thumbnails.
 */

function changeDesktopImage() {
    for (let index = 0; index < thumbImgs.length; index++) {

        thumbImgs[index].addEventListener('mouseover', function () {

            currentImg.src = this.src;

        });
    }
}

changeDesktopImage()


/**
 * allows by clicking on the button to add the quantity of chosen products then to deactivate the button by changing the text it contains.
*/
function addProduct() {
    addBtn.addEventListener('click', () => {

        let qty = parseInt(addQty.value);

        let CartQty = parseInt(cartNumb.innerHTML);
        let newQty = CartQty + qty;

        newQty > 99 ? cartNumb.innerHTML = "99+" : cartNumb.innerHTML = newQty

        addBtn.disabled = true;

        addBtn.textContent = "Déjà au panier";

    });
};

addProduct();


/**
 * allows you to display or not the content of the Advantages by clicking on the corresponding  accordion.
 */
function displaysAdvantagesOrNot() {

    AdvantagesBtn.addEventListener('click', () => {
        AdvantagesBtn.classList.toggle('closed') ? displayAdvantages.style.display = "none" : displayAdvantages.style.display = "contents"
    });
}

displaysAdvantagesOrNot();


/**
 * allows you to display or not the content of the characteristics by clicking on the corresponding  accordion.
 */
function displaysFeaturesOrNot() {

    FeaturesBtn.addEventListener('click', () => {
        FeaturesBtn.classList.toggle('closed') ? displayFeatures.style.display = "none" : displayFeatures.style.display = "contents"
    });
}

displaysFeaturesOrNot();