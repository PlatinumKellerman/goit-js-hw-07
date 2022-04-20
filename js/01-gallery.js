import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);
let instance;

function createGalleryMarkup(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
        return `
<div class="gallery__item">
    <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
    </a>
</div>
`
    }).join('');
}

galleryContainer.addEventListener('click', onGalleryItemClick);
function onGalleryItemClick(event) {
    event.preventDefault();
    if (event.target.classList.contains('gallery__image')) {
        const imgLink = event.target.dataset.source;
        instance = basicLightbox.create(`
    <img src="${imgLink}" width="1280">`)
        instance.show()
    }
}

galleryContainer.addEventListener('keydown', onModalClose);
function onModalClose(event) {
    if (event.key === "Escape") { 
        instance.close()
    }
}