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
            return `<a class="gallery__item"
        href="${original}">
        <img class="gallery__image"
        src="${preview}" 
        alt="${description}"></a>`
        })
        .join('');
};

function onImageClick(event) {
    event.preventDefault();

    let gallery = new SimpleLightbox('.gallery__item', {
        captionsDelay: 250,
        captionsData: 'alt',
    });
}

