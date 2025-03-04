import iziToast from "izitoast"
import simplelightbox from "simplelightbox"
import "simplelightbox/dist/simple-lightbox.min.css"

const gallery = document.querySelector(".gallery")

let lightbox = new simplelightbox(".gallery a", { 
    captionsData: "alt",
    daptionDelay: 250
})

export function rendenImg(images) {
    if (!images || images.length === 0) {
        iziToast.warning({
            title: "oops",
            message: "Sorry, there are no images matching your search query. Please try again!",
            position: "topRight"
        })
        return
    }
    const markup = images.map((img) => `
    <li class="gallery-item">
    <a href="${img.largeImgURL}">
    <img src="${img.webformatURL}" alt="${img.tags}" loading="lazy"/>
    </a>
    <div class="info">
    <p><b>Likes:</b>${img.likes}</p>
    <p><b>Views:</b>${img.views}</p>
    <p><b>Comments:</b>${img.comments}</p>
    <p><b>Downloads:</b>${img.downloads}</p>
    </div>
    </li>
    `).join("")
    gallery.innerHTML = markup
    lightbox.refresh()
}