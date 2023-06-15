// Root
var root = document.querySelector("body");

var themeSwitcherImg = document.getElementById("ts-img");
var resumeImg = document.getElementById("res-img");
var langImg = document.getElementById("lang-img");
var longArrowImg = document.getElementsByClassName("long-arrow");
var gmailImg = document.getElementById("gm-icon");
var linkedinImg = document.getElementById("linkedin-icon");
var githubImg = document.getElementById("github-icon");

manageTheme();



window.addEventListener("load", manageEveryThing);
window.addEventListener("onhaschange", manageEveryThing);

document.addEventListener("click", closeLanguageMenu);

function closeLanguageMenu(event) {
  const menu = document.getElementById("sprache-div");
  const target = event.target;

  const isSpracheButton = target === (document.getElementById("sprache-button"));
  const isSpracheIcon = target === (document.getElementById("sprache-icon"));
  if (!menu.contains(target) && !isSpracheButton && !isSpracheIcon) {
    menu.style.display = "none";
  }

}


function showLanguageMenu() {
  const menu = document.getElementById("sprache-div");
  let menuClosed  = menu.style.display === "none" || menu.style.display.trim().length === 0;
  if (menuClosed) {
    menu.style.display = "flex";
  } else {
    menu.style.display = "none";
  }
}



function manageTheme() {
  let usedTheme = window.localStorage.getItem("dark-enabled");

  if (usedTheme === null || usedTheme === "false") {
    changeTheme(true);
    window.localStorage.setItem("dark-enabled", "true");
  } else {
    changeTheme(false);
    window.localStorage.setItem("dark-enabled", "false");
  }

}

function changeTheme(setToBlack) {

  if (setToBlack) {
    setProperty("--background-color", "#000");
    setProperty("--foreground-color", "#fff");
    setProperty("--feldteiler-fg", "#fff");
    setProperty("--name-color", "#fff");
    setProperty("--name-shadow-color", "#808080");
    setProperty("--cyan", "#fff");
  
    // icons colors
    setProperty("--icons-color", "#fff");
    

    changePropertyToElements(longArrowImg, "src", "./icons/right-simple-arrow-white.png");

  } else {
    setProperty("--background-color", "#fff");
    setProperty("--foreground-color", "#000");
    setProperty("--feldteiler-fg", "#000");
    setProperty("--name-color", "#484848");
    setProperty("--name-shadow-color", "#dfdfdf");
    setProperty("--cyan", "#000");

    // icons color
    setProperty("--icons-color", "#000");

    changePropertyToElements(longArrowImg, "src", "./icons/right-simple-arrow.png");
  }
} 

function setProperty(property, value) {
  root.style.setProperty(property, value);
}

function changePropertyToElements(elements, property, newValue) {
  if (elements === null) {
    return;
  }

  for (let i = 0; i < elements.length; i++) {
    let el = elements[i]; 
    el.setAttribute(property, newValue);
  }

}

function manageEveryThing() {

    manageTheme();

    const themeSwitcher = document.getElementById("theme-switcher");
    if (themeSwitcher !== null) {
      themeSwitcher.addEventListener("click", manageTheme);
    }

    const alterElement = document.getElementById("alter");
    if (alterElement === null) {
        return;
    }

    const languageSwitcher = document.getElementById("sprache-button");
    if (languageSwitcher !== null) {
      languageSwitcher.addEventListener("click", showLanguageMenu);
    }

    const iconSprache = document.getElementById("icon-sprache");
    if (iconSprache !== null) {
      iconSprache.addEventListener("click", showLanguageMenu);
    }

    const date = new Date();
    const month = date.getMonth();
    
    const alter = (month >= 9) ? date.getFullYear() - 2002 : date.getFullYear() - 2003;

    alterElement.innerHTML = alter;
}