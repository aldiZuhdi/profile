const body = document.getElementById("body");
window.addEventListener("scroll", function () {
  let offset = window.pageYOffset;
  body.style.backgroundPositionY = offset * 0.8 + "px";
});
