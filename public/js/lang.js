
window.addEventListener("load", () => {
    // LANGUAGE STUFF
    const activeColor = "#B16286";
    let isInSpanish = false;
    const title = document.querySelector("title");
    if (title.classList.contains("en")) {
      isInSpanish = false;
    } else {
      isInSpanish = true;
    }

    
    let spanishSwitch = document.getElementById("spanish-switch");
    let englishSwitch = document.getElementById("english-switch");

    if(isInSpanish) {
      spanishSwitch.style.color = activeColor; }
    else {
      englishSwitch.style.color = activeColor;
    }
});
