import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");

function makeGalleryMarkup({ preview, original, description }) {
  return `<div class="gallery__item">
    <a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" title="${description}" />
  </a>
    </div>`;
}

const galleryMarkup = galleryItems.map(makeGalleryMarkup).join("");
gallery.insertAdjacentHTML("afterbegin", galleryMarkup);

function onClickGalleryImg (e){
    const target = e.target;
  if (target.nodeName !== "IMG") {
    return;
  }
  e.preventDefault();

 const lightbox = new SimpleLightbox('.gallery a', {
    captionDelay: 250,
  })


}

gallery.addEventListener('click', onClickGalleryImg);

console.log(galleryItems);
