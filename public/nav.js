window.addEventListener("load", () => {
    // NAVBAR STUFF
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
        console.log(allAnchors);
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
});
