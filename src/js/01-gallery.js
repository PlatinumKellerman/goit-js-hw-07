// Виконуй це завдання у файлах 01-gallery.html і 01-gallery.js. Розбий його на декілька підзавдань:

//1. Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
//2. Реалізація делегування на div.gallery і отримання url великого зображення.
//3. Підключення скрипту і стилів бібліотеки модального вікна basicLightbox.Використовуй CDN сервіс jsdelivr 
// і додай у проект посилання на мініфіковані(.min) файли бібліотеки.
//4. Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.
//5. Заміна значення атрибута src елемента < img > в модальному вікні перед відкриттям.Використовуй готову розмітку 
// модального вікна із зображенням з прикладів бібліотеки basicLightbox.

// Розмітка елемента галереї
// Посилання на оригінальне зображення повинно зберігатися в data - атрибуті source на елементі < img >,
// і вказуватися в href посилання.Не додавай інші HTML теги або CSS класи, крім тих, що містяться в цьому шаблоні.
 
// * <div class="gallery__item">
//   {<a class="gallery__link" href="large-image.jpg">
//     <img
//       class="gallery__image"
//       src="small-image.jpg"
//       data-source="large-image.jpg"
//       alt="Image description"
//     />
//   </a>
// </div > *}
// Зверни увагу на те, що зображення обгорнуте посиланням, отже по кліку за замовчуванням користувач буде 
// перенаправлений на іншу сторінку.Заборони цю поведінку за замовчуванням.

import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);


galleryContainer.addEventListener('click', onGalleryItemClick);
function onGalleryItemClick(event) {
    event.preventDefault();
    if (event.target.classList.contains('gallery__image')) {
    console.log(event.target.dataset.source);
    }
    
}



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
 



https://cdn.jsdelivr.net/npm/basiclightbox@5/dist/basicLightbox.min.js