import { galleryItems } from './gallery-items.js';

const galleryListEl = document.querySelector('.gallery');
const newGalleryItem = onNewGalleryItemCreate(galleryItems);
galleryListEl.insertAdjacentHTML('beforeend', newGalleryItem);

function onNewGalleryItemCreate(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
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

galleryListEl.addEventListener('click', onGalleryItemClick);

function onGalleryItemClick(event) {
    if (event.target.classList.contains('gallery__image')) {
        event.preventDefault();
        let gallery = new SimpleLightbox('ul.gallery a', { captions: true }, {docClose: false});

// let gallery = new SimpleLightbox('ul.gallery', {captions: true});
// gallery.on('error.simplelightbox', function () {
// 	console.log("sdgdhgbd"); //
// });;
}
}
// galleryListEl.addEventListener('click', onGalleryItemClose);

// function onGalleryItemClose (e) { 
// if (e.target.classList.contains('sl-close')) {
//         e.preventDefault();
//         const gallery = $('.gallery a').simpleLightbox();

//         gallery.close(); 
//     }
// }