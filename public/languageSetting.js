document.onload(() => {
  console.log("im active");
  const activeColor = "#D3869B";
  let isInSpanish = true; 

  let spanishSwitch = document.getElementById("spanish-switch");
  let englishSwitch = document.getElementById("english-switch");

  if(isInSpanish) {
    spanishSwitch.style.color = activeColor;
  } else {
    englishSwitch.style.color = activeColor;
  }
});
