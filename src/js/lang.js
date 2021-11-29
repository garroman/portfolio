window.addEventListener("load", () => {

    const activeColor = "#B16286";
    const title = document.querySelector("title");
    const spanishSwitch = document.getElementById("spanish-switch");
    const englishSwitch = document.getElementById("english-switch");

    if (title.classList.contains("en")) {

      englishSwitch.style.color = activeColor;

    } else if (title.classList.contains("es")) {

      spanishSwitch.style.color = activeColor;

    }

});
