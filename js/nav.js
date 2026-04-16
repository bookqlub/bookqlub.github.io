document.addEventListener("keydown", (e) => {
  MANGA = false;
  if (MANGA) {
    if (e.key === "ArrowLeft" && document.querySelector("a.next")) {
      window.location.href = document.querySelector("a.next").href;
    }
    if (e.key === "ArrowRight" && document.querySelector("a.prev")) {
      window.location.href = document.querySelector("a.prev").href;
    }
  } else {
    if (e.key === "ArrowLeft" && document.querySelector("a.prev")) {
      window.location.href = document.querySelector("a.prev").href;
    }
    if (e.key === "ArrowRight" && document.querySelector("a.next")) {
      window.location.href = document.querySelector("a.next").href;
    }
  }
});