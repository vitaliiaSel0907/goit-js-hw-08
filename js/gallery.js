const images = [
  { preview: 'images/photo-one.png', original: 'images/photo-one.png', description: 'Photo One' },
  { preview: 'images/photo-two.png', original: 'images/photo-two.png', description: 'Photo Two' },
  { preview: 'images/photo-three.png', original: 'images/photo-three.png', description: 'Photo Three' },
  { preview: 'images/photo-four.png', original: 'images/photo-four.png', description: 'Photo Four' },
  { preview: 'images/photo-five.png', original: 'images/photo-five.png', description: 'Photo Five' },
  { preview: 'images/photo-six.png', original: 'images/photo-six.png', description: 'Photo Six' },
];


const galleryContainer = document.querySelector('.gallery');

const galleryMarkup = images.map(({ preview, original, description }) => {
  return `
    <li class="gallery-item">
      <a class="gallery-link" href="${original}">
        <img class="gallery-image" src="${preview}" alt="${description}" data-source="${original}">
      </a>
    </li>
  `;
}).join('');

galleryContainer.innerHTML = galleryMarkup;


galleryContainer.addEventListener('click', event => {
  event.preventDefault(); 

  if (event.target.nodeName !== 'IMG') return; 

  const largeImageSrc = event.target.dataset.source;

  
  const instance = basicLightbox.create(`
    <img src="${largeImageSrc}" alt="${event.target.alt}">
  `);
  instance.show();
});




