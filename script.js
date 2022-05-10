function openMenu() {
  document.getElementById("side-nav").style.transform = "translateX(0)";
  document.getElementById("overlay").style.display = "initial";
}

function closeMenu() {
  document.getElementById("side-nav").style.transform = "translateX(100%)";
  document.getElementById("overlay").style.display = "none";
}

function toggleDropdownMenu(node) {
  const isShown = node.nextElementSibling.style.display === "flex";
  node.nextElementSibling.style.display = isShown ? "none" : "flex" ;
  node.lastElementChild.src = isShown ? "./images/icon-arrow-down.svg" : "./images/icon-arrow-up.svg";
}