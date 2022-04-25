import { galleryItems } from "./gallery-items.js";
// Change code below this line

// 1.Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
const gallery = document.querySelector(".gallery");

function makeGalleryMarkup({ preview, original, description }) {
  return  `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`;
}

const galleryMarkup = galleryItems.map(makeGalleryMarkup).join("");
gallery.insertAdjacentHTML("afterbegin", galleryMarkup);

// 2.Реалізація делегування на div.gallery і отримання url великого зображення.

function onOpenLargeImage(e) {
  const target = e.target;
  if (target.nodeName !== "IMG") {
    return;
  }
  e.preventDefault();
  const originalImgLink = target.dataset.source;
  basicLightbox
    .create(
      `<img
    src="${originalImgLink}"
    alt="${target.alt}"
  />`
    )
    .show();
}

gallery.addEventListener("click", onOpenLargeImage);

// 3.Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані (.min) файли бібліотеки.
// 4.Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.
// 5.Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям. Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.
