// Toggle button text change for biography
  const readMoreBtn = document.getElementById('readMoreBtn');
  const bioMore = document.getElementById('bio-more');

  bioMore.addEventListener('shown.bs.collapse', () => {
    readMoreBtn.textContent = "Read Less";
  });
  bioMore.addEventListener('hidden.bs.collapse', () => {
    readMoreBtn.textContent = "Read More";
  });

//bannner 
const carousel = document.querySelector('#modiCarousel');
    const carouselInstance = new bootstrap.Carousel(carousel, {
      interval: 1000, // 3 seconds
      ride: 'carousel',
      pause: false,
      wrap: true
    });


    
   //menu 
  const navbar = document.getElementById("navbarNav");
  const headerContainer = document.getElementById("header-container");

  navbar.addEventListener("show.bs.collapse", () => {
    headerContainer.classList.add("menu-opened");
  });

  navbar.addEventListener("hide.bs.collapse", () => {
    headerContainer.classList.remove("menu-opened");
  });


  //gallery 
   
    let next = document.querySelector('.next');
    let prev = document.querySelector('.prev');
    let slide1 = document.querySelector('.slide1');

      function nextSlidex() {
      let items = document.querySelectorAll('.item');
          slide1.appendChild(items[0]);
        }

        function nextSlidex() {
  const items = document.querySelectorAll('.item');
  slide1.appendChild(items[0]); // move first item to end
  items.forEach((item, i) => {
    item.style.left = `${i * 220}px`; // recalc left dynamically
  });
}

      function prevSlidex() {
      let items = document.querySelectorAll('.item');
          slide1.prepend(items[items.length - 1]);
        }

    next.addEventListener('click', nextSlidex);
    prev.addEventListener('click', prevSlidex);

    setInterval(nextSlidex, 3000);
  
  
  
