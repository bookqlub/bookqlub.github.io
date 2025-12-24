document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft" && document.querySelector("a.next")) {
    window.location.href = document.querySelector("a.next").href;
  }
  if (e.key === "ArrowRight" && document.querySelector("a.prev")) {
    window.location.href = document.querySelector("a.prev").href;
  }
});