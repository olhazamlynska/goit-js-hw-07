import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryDivRef = document.querySelector(".gallery");

const galleryImgItem = galleryItems
  .map(({ preview, original, description }) => {
    return /*html*/ `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
  })
  .join("");

galleryDivRef.innerHTML = galleryImgItem;

galleryDivRef.addEventListener("click", onImgClick);

function onImgClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const modalShow = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);

  const onEscKeyPress = (event) => {
    const KEY_ESCAPE_CODE = "Escape";
    if (event.code === KEY_ESCAPE_CODE && modalShow.visible()) {
      modalShow.close(() =>
        window.removeEventListener("keydown", onEscKeyPress)
      );
    }
  };

  modalShow.show(window.addEventListener("keydown", onEscKeyPress));
}
