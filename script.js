function openMenu() {
  document.getElementById("side-nav").style.transform = "translateX(0)";
  document.getElementById("overlay").style.display = "initial";
}

function closeMenu() {
  document.getElementById("side-nav").style.transform = "translateX(100%)";
  document.getElementById("overlay").style.display = "none";
}