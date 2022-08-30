import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector(".gallery")
const makeup = galleryItems.reduce((acc, item) => {
    return acc += 
    `<div class="gallery__item">
    <a class="gallery__link" href="${item.original}">
    <img 
    src="${item.preview}"
    alt="${item.description}" 
    data-original = "${item.original}" 
    class="gallery__item gallery__image"
    >
    </a>
  </div>`
}, "")

let origenPicLightbox;

gallery.insertAdjacentHTML('afterbegin', makeup)
gallery.addEventListener("click", openLightbox)

function openLightbox(event){
    event.preventDefault();
  
    if(event.target.tagName !=="IMG"){ 
       console.log(event.currentTarget)
      return
    }
    // ${event.target.dataset.original}
    origenPicLightbox =
    basicLightbox.create(`
		<img 
    src="${event.target.dataset.original}" 
    alt = "${event.target.alt}" 
    class= "origen">`, 
    {
      onShow: (instance) => {document.addEventListener('keydown', closeLightbox)},
      onClose: (instance) => {document.removeEventListener('keydown', closeLightbox)},
    });

    origenPicLightbox.show()
}

function closeLightbox(event){
  if(event.code == "Escape"){
    origenPicLightbox.close();
  } 
}
