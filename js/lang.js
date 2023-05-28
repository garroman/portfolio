showLanguageMenu();

document.addEventListener("click", closeLanguageMenu);

window.addEventListener("load", () => {
    const alterElement = document.getElementById("alter");
    if (alterElement === null) {
        return;
    }

    const date = new Date();
    const month = date.getMonth();
    
    const alter = (month >= 9) ? date.getFullYear() - 2002 : date.getFullYear() - 2003;

    alterElement.innerHTML = alter;
});

function closeLanguageMenu(event) {
  const menu = document.getElementById("sprache-div");
  const target = event.target;

  const isSpracheButton = target === (document.getElementById("sprache-button"));
  console.log("is sprache button " + isSpracheButton)
  if (!menu.contains(target) && !isSpracheButton) {
    menu.style.display = "none";
  }

}


function showLanguageMenu() {
  const menu = document.getElementById("sprache-div");
  if (menu.style.display === "none") {
    menu.style.display = "flex";
  } else {
    menu.style.display = "none";
  }
}
