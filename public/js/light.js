window.addEventListener("load", () => {

  // Check which theme to apply when page loads
  const sun = document.getElementById("sun");
  const moon = document.getElementById("moon");

  if(sun.classList.contains("activated")) {

    setColors(sun, false);

  } else {

    setColors(moon, true);

  }

  // When clicking on the buttons after loading the page
  const lightSwitches = document.querySelectorAll(".light-switch");
  lightSwitches.forEach(element =>{

    element.addEventListener("click", () => {

      // Switch theme only if element is not activated
      const elementIsActive = element.classList.contains("activated");

      if (!elementIsActive) {
        switchTheme(element);
      }

    });

  });

});

function switchTheme(element) {

      console.log("entered switchTheme()");
      const sun = document.getElementById("sun");
      const moon = document.getElementById("moon");


      let elId = element.id;
      element.classList.add("activated");

      if(elId == "moon") {
sun.classList.remove("activated");
        setColors(moon, true);

      } else {

        moon.classList.remove("activated");
        setColors(sun, false);

      }

}

function setColors(element, toDarkColors = null) {

  const body = document.querySelector("body");
  if(toDarkColors) {

      body.style.setProperty("--bg", "#1d2021"); 
      body.style.setProperty("--nav-bg", "#000"); 
      body.style.setProperty("--press-h2-fg", "#fff"); 
      body.style.setProperty("--project-desc", "#eee"); 
      body.style.setProperty("--live-button-bg", "#fbf1c7"); 
      body.style.setProperty("--live-button-fg", "#282828"); 
      body.style.setProperty("--live-button-hover", "#b16286"); 
      body.style.setProperty("--code-button-hover", "#b8bb26"); 

  } else if (!toDarkColors){

      body.style.setProperty("--bg", "#eee"); 
      body.style.setProperty("--nav-bg", "#fff"); 
      body.style.setProperty("--press-h2-fg", "#444"); 
      body.style.setProperty("--project-desc", "#1d2021"); 
      body.style.setProperty("--live-button-bg", "#282828"); 
      body.style.setProperty("--live-button-fg", "#fbf1c7"); 
      body.style.setProperty("--code-button-hover", "#b16286"); 
      body.style.setProperty("--live-button-hover", "#b8bb26"); 
  }
}

