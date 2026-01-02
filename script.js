// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});

// Scroll reveal animation
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach((el) => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);






// Slider horizontal scroll
const slider = document.getElementById('slider');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
let index = 0;

function showSlide(i){
    const slides = slider.children.length;
    if(i<0) index=slides-1;
    else if(i>=slides) index=0;
    else index=i;
    slider.style.transform = `translateX(${-index*310}px)`; // width + gap
}

prevBtn.addEventListener('click', ()=>showSlide(index-1));
nextBtn.addEventListener('click', ()=>showSlide(index+1));

// Lightbox functionality
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.lightbox .close');

Array.from(slider.children).forEach(img=>{
    img.addEventListener('click', ()=>{
        lightbox.style.display = 'flex';
        lightboxImg.src = img.src;
    });
});

// Close lightbox
closeBtn.addEventListener('click', ()=>{ lightbox.style.display = 'none'; });
lightbox.addEventListener('click', e => { if(e.target===lightbox) lightbox.style.display='none'; });
