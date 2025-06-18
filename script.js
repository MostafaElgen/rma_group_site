const translations = {
  ar: {
    title: "شركة RMA Group للرخام والجرانيت",
    gallery: " الصور",
    videos: "فيديوهات",
    btnGallery: " الصور",
    btnVideos: "الفيديوهات",
    footer: "© 2025 شركة RMA Group للرخام والجرانيت - تواصل معنا: info@rmagroup.com"
  },
  en: {
    title: "RMA Group Marble & Granite",
    gallery: "Photo ",
    videos: "Videos",
    btnGallery: "Photo",
    btnVideos: "Videos",
    footer: "© 2025 RMA Group Marble & Granite - Contact us: info@rmagroup.com"
  }
};



function switchLanguage(lang) {
  const t = translations[lang];

  // تغيير العناوين
  document.getElementById("site-title").textContent = t.title;
  document.getElementById("gallery-title").textContent = t.gallery;
  document.getElementById("videos-title").textContent = t.videos;
  document.getElementById("btn-gallery").textContent = t.btnGallery;
  document.getElementById("btn-videos").textContent = t.btnVideos;
  document.getElementById("site-desc").textContent = 
    document.getElementById("site-desc").dataset[lang];
    document.getElementById("footer-text").textContent = t.footer;

  // تغيير اتجاه الصفحة
  document.documentElement.setAttribute("lang", t.lang);

  // تغيير وصف الصور والفيديوهات
  document.querySelectorAll('.caption').forEach(el => {
    el.textContent = el.dataset[lang];
  });
}

let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}
let refreshInterval = setInterval(()=> {next.click()}, 5000);
function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';
    // 
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 5000);

    
}

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active = key;
         reloadSlider();
    })
})
window.onresize = function(event) {
    reloadSlider();
};


function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}
