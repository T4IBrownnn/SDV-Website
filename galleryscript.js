function scrollGallery(distance) {
    const gallery = document.querySelector('.gallery');
    gallery.scrollBy({ left: distance, behavior: 'smooth' });
  }
  
  window.addEventListener('scroll', function() {
  const layers = document.querySelectorAll('.layer');
  const scrollTop = window.pageYOffset;

  layers.forEach(layer => {
    const speed = layer.getAttribute('data-speed');
    const yPos = -(scrollTop * speed);
    layer.style.transform = `translateY(${yPos}px)`;
  });
});


const images = document.querySelectorAll('.carousel-image');
let currentIndex = 0;

function showImage(index) {
  images.forEach(img => img.classList.remove('active'));
  images[index].classList.add('active');
}

document.getElementById('prevBtn').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
});

document.getElementById('nextBtn').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
});
