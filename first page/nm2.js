const scrollBtn = document.getElementById("scrollBtn");

window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 200) {
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }
});

scrollBtn.addEventListener("click", () => {
  document.documentElement.scrollTop = 0;
});

