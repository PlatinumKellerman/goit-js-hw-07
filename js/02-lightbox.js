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
        item = `<div class="gallery">
    <a href="images/image1.jpg"><img src="images/thumbs/thumb1.jpg" alt="" title=""/></a>
    <a href="images/image2.jpg"><img src="images/thumbs/thumb2.jpg" alt="" title="Beautiful Image"/></a>
</div>`
        item.open();
    }
}
// gallery.on('error.simplelightbox', function () {
// 	console.log("sdgdhgbd"); //
// });;


// galleryListEl.addEventListener('click', onGalleryItemClose);

// function onGalleryItemClose (e) { 
// if (e.target.classList.contains('sl-close')) {
//         e.preventDefault();
//         const gallery = $('.gallery a').simpleLightbox();

//         gallery.close(); 
//     }
// }