window.addEventListener("load", () => {

  const lightSwitches = document.querySelectorAll(".light-switch");

  lightSwitches.forEach(element =>{

    element.addEventListener("click", () => {
      switchTheme(element);
    });

  });

});

function switchTheme(element) {

      const sun = document.getElementById("sun");
      const moon = document.getElementById("moon");
      const body = document.querySelector("body");

      if(!element.classList.contains("activated")) { 

        let elId = element.id;
        element.classList.add("activated");
        if(elId == "moon") {
          sun.classList.remove("activated");
          body.style.setProperty("--bg", "#1d2021"); 
          body.style.setProperty("--nav-bg", "#000"); 
          body.style.setProperty("--press-h2-fg", "#fff"); 

        } else {
          moon.classList.remove("activated");
          body.style.setProperty("--bg", "#eee"); 
          body.style.setProperty("--nav-bg", "#fff"); 
          body.style.setProperty("--press-h2-fg", "#444"); 
        }
      }

}
