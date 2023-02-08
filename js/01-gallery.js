import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryElem = document.querySelector('.gallery');

const imagesMarkup = createImagesMarkup(galleryItems);

galleryElem.insertAdjacentHTML('beforeend', imagesMarkup);

galleryElem.addEventListener("click", onImageClick);


function createImagesMarkup(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `<div class="gallery__item">
        <a class="gallery__link"
        href="${original}">
        <img class="gallery__image"
        src="${preview}" 
        data-source="${original}"
        alt="${description}"></a></div>`
        })
        .join('');
};

function onImageClick(event) {
    event.preventDefault();
    
    if (event.target !== event.currentTarget) return
        
    const instance = basicLightbox.create(
        `<img src="${event.target.dataset.source}" width="1400" height="900" >`,
        {
            onShow: (instance) => {
                window.addEventListener("keydown", CloseModal);
            },
            
            onClose: (instance) => {
                window.removeEventListener("keydown", CloseModal);
            },
        }
    );
    instance.show();

    const CloseModal = (event) => {
        if (event.code === "Escape") {
            instance.close();
        }
    }
}

