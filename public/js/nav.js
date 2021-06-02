window.addEventListener("load", () => {
  

    const smallNav = document.querySelector(".smaller-nav");
    const nav = document.querySelector(".nav-links");
    const smallNavLi = document.querySelectorAll(".smaller-a");
    const navLi = document.querySelectorAll(".nav-a");


    if (window.innerWidth <= 768) {
          removeDataPageAttribute(navLi);
          setDataPageAttribute(smallNavLi);
    } else {
        removeDataPageAttribute(smallNavLi);
        setDataPageAttribute(navLi);
    }

    window.addEventListener("resize", () => {

        const windowWidth = window.innerWidth;

        if (windowWidth >= 768) {

          removeDataPageAttribute(smallNavLi);
          setDataPageAttribute(navLi);

          smallNav.style.display = "none";
        }

        if (windowWidth <= 768) {

          removeDataPageAttribute(navLi);
          setDataPageAttribute(smallNavLi);

        }

    });

    slider();
    navPager(); 

});


let slider = () => {

    const menu = document.querySelector(".menu"); 
    const smallerNav  = document.querySelector(".smaller-nav");
    const smallNavLinks = document.querySelectorAll(".smaller-nav ul li");
    
    menu.addEventListener("click", () => {
      
      // Toggle nav
      const display = smallerNav.style.display;

      if (display == "none") {
        smallerNav.style.display = "flex";
      } else {
        smallerNav.style.display = "none";
      }

      // Toggle animation
      smallNavLinks.forEach((link, index) => {
        if(link.style.animation) {

          link.style.animation = '';

        } else {

          link.style.animation = `navLinksFade 0.5s ease forwards ${index / 5 + 0.5}s`;
          const body = document.querySelector("body");
          //body.style.overflowY = "hidden";

        }

      });

    });
}

const navPager = () => {
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
        let allAnchors = ""; 
        
        // Check which "nav" set active to
        if(document.querySelector(".nav-a").hasAttribute("data-page")) {

          allAnchors = document.querySelectorAll(".nav-a");

        } else {

          allAnchors = document.querySelectorAll(".smaller-a");

        }

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

function removeDataPageAttribute(li) {
    li.forEach((link,index) => {
        link.removeAttribute("data-page");
    });
}

function setDataPageAttribute(li) {
    li.forEach((link,index) => {
        let href = link.hash.split("#")[1];
        link.setAttribute("data-page", href);
    });
}
