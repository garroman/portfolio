
window.addEventListener("load", () => {
    // LANGUAGE STUFF
    const activeColor = "#B16286";
    const page = window.location.href.split("/");
    let isInSpanish = "";
    if (page[page.length-1] === "index.html") {
      isInSpanish = false;
    } else {
      isInSpanish = true;
    }

    
    let spanishSwitch = document.getElementById("spanish-switch");
    let englishSwitch = document.getElementById("english-switch");

    if(isInSpanish) {
      spanishSwitch.style.color = activeColor; } else {
      englishSwitch.style.color = activeColor;
    }
});
