const toggleButton = document.querySelectorAll("#toggleButton");

toggleButton.addEventListener("click", () => {
  if (this.innerText == "공개") {
    this.innerHTML = "비공개";
    this.classList.toggle(openNotOpen);
  } else if (this.innerText == "비공개") {
    this.innerHTML = "비공개";
    this.classList.toggle(openNotOpen);
  }
});
