function setDisplay(cssSelector, display) {
  document.querySelector(cssSelector).style.display = display;
}

function addIconsStylesheet() {
  const url = "http://tools.w3clubs.com/pagr/1.sleep-1.css",
    head = document.getElementsByTagName('head')[0];
    link = document.createElement('link');

  link.type = "text/css";
  link.rel = "stylesheet"
  link.href = url;
  link.onload = function() {
    setDisplay("#loader", "none");
    setDisplay("#content", "block");
  }

  head.appendChild(link);
}

function initDataTransferAnimation() {
  const inArrow = document.querySelector(".material-icons.in.arrow");
  const outArrow = document.querySelector(".material-icons.out.arrow");
  setInterval(() => {
    outArrow.classList.toggle("disabled");
  }, 4500);
  setInterval(() => {
    inArrow.classList.toggle("disabled");
  }, 3500)
}

function initTimeAnimation() {
  let now = new Date();
  const timeDisplay = document.getElementById("time");
  let minutes = now.getMinutes();

  minutes = minutes < 10 ? '0' + minutes : minutes.toString();
  timeDisplay.innerText = now.getHours() + ':' + minutes;

  setInterval(() => {
    now = new Date();
    minutes = now.getMinutes();
    minutes = minutes < 10 ? '0' + minutes : minutes.toString();
    timeDisplay.innerText = now.getHours() + ':' + minutes;
  }, 45000)
}

function initAnimations(){
  // addIconsStylesheet();
  initDataTransferAnimation();
  initTimeAnimation();
}

window.addEventListener("load", initAnimations);