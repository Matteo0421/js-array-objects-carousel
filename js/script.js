
const images = [
  {
      url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
      title: 'Svezia',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
  },
  {
      url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
      title: 'Perù',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
  },
  {
      url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
      title: 'Chile',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
  },
  {
      url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
      title: 'Argentina',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
  },
  {
      url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
      title: 'Colombia',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
  },
];

const output = document.querySelector('.output');
const thumbnails = document.querySelectorAll('.my-thumbnail');
let currentImageIndex = 0;

// Mostriamo l'immagine iniziale
showCurrentImage();
thumbnails[currentImageIndex].classList.add('active');

// Gestione del click sul pulsante "Prev"
document.querySelector('.my-previous').addEventListener('click', () => {
  thumbnails[currentImageIndex].classList.remove('active');
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  showCurrentImage();
  thumbnails[currentImageIndex].classList.add('active');
});

// Gestione del click sul pulsante "Next"
document.querySelector('.my-next').addEventListener('click', () => {
  thumbnails[currentImageIndex].classList.remove('active');
  currentImageIndex = (currentImageIndex + 1) % images.length;
  showCurrentImage();
  thumbnails[currentImageIndex].classList.add('active');
});

// Funzione per visualizzare l'immagine corrente
function showCurrentImage() {
  const currentImage = images[currentImageIndex];
  output.innerHTML = `
      <div class="my-carousel-item active">
          <img class="img-fluid" src="${currentImage.url}" alt="${currentImage.title} picture">
          <div class="item-description px-3">
              <h2>${currentImage.title}</h2>
              <p>${currentImage.description}</p>
          </div>
      </div>
  `;
}
