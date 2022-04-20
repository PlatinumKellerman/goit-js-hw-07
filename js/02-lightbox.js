import { galleryItems } from './gallery-items.js';

const galleryListEl = document.querySelector('.gallery');
const newGalleryItem = onNewGalleryItemCreate(galleryItems);
galleryListEl.insertAdjacentHTML('beforeend', newGalleryItem);

function onNewGalleryItemCreate(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
<li>
    <a class="gallery__item" 
        href= "${original}">
        <img 
            class="gallery__image" 
            src="${preview}" 
            alt="${description}"
        />
    </a>
</li>`
    }).join('');
    
}

let gallery = new SimpleLightbox('ul.gallery a',
    {
        captionsData: "alt",
        captionDelay: 250
    }
);