import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const galleryDivRef = document.querySelector(".gallery");

const galleryImgItem = galleryItems
  .map(({ preview, original, description }) => {
    return /*html*/ `<li class = "gallery__li">
    <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a></li>`;
  })
  .join("");

galleryDivRef.innerHTML = galleryImgItem;

const modalGallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
