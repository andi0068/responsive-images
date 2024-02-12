function renderVwInf(element) {
  element.innerHTML = `Viewport Width: <b>${window.innerWidth}px</b>`;
}

window.addEventListener("DOMContentLoaded", () => {
  const vw = document.querySelector(".js-vw");

  renderVwInf(vw);

  window.addEventListener("resize", () => renderVwInf(vw));
});
