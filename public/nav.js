window.addEventListener("load", () => {
  
    slider();
    pager();
  

});

const slider = () => {

    const menu = document.querySelector(".menu"); 
    const nav  = document.querySelector(".nav-links");

    const navLinks = document.querySelectorAll(".nav-links li");



    menu.addEventListener("click", () => {
      
      // Toggle nav
      nav.classList.toggle("nav-active");

      // Toggle animation
      navLinks.forEach((link, index) => {
        if(link.style.animation) {

          link.style.animation = '';

        } else {

         link.style.animation = `navLinksFade 0.5s ease forwards ${index / 5 + 0.5}s`;

        }

      });

    });
}

const pager = () => {
    // Section check
    const sections = document.querySelectorAll("section");
    const options = {
      threshold: 0.8
    };
    let observer = new IntersectionObserver(navCheck, options);

    function navCheck(entries) {
      entries.forEach(entry => {
        const entryId = entry.target.id;
        const activeAnchor = document.querySelector(`[data-page=${entryId}]`);
        const allAnchors = document.getElementsByClassName("nav-a");
        if(entry.isIntersecting) {
          for(let i = 0; i < allAnchors.length; i++) {
            allAnchors[i].classList.remove("active");
          }
          activeAnchor.classList.add("active");
        }
      });
    }

    sections.forEach(section => {
      observer.observe(section);
    });
}
