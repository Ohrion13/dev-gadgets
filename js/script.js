const nextBtn = document.querySelector('.pictures-next');
const prevBtn = document.querySelector('.pictures-prev');

const currentImg = document.querySelector('.pictures-img');
const thumbImgs = document.querySelectorAll('.thumbs-itm img');

const addBtn = document.querySelector('.add-cta');
let addQty = document.querySelector('.add-qty');
let cartNumb = document.querySelector('.cart-nb');

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
 * allows by clicking on the button to increase the number of products in the card.
*/
function addProduct() {
    addBtn.addEventListener('click', () => {

        let qty = parseInt(addQty.value);
        
        let CartQty = parseInt(cartNumb.innerHTML);
        let newQty = CartQty + qty;
        
        cartNumb.innerHTML = newQty;

        if (CartQty > 99) {
            cartNumb.innerHTML = "99+";
        }
        else {
            cartNumb.innerHTML = newQty
        }

        addBtn.deaseable = true;

        addBtn.textContent = "";

    });
};


addProduct();
