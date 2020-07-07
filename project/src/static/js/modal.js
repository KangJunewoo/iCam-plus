const modal = document.querySelector(".modal");
const answer = document.querySelector("#answer");

const question_button = document.querySelector(".question_button");
const comment_button = document.querySelector(".comment_button");

const close = document.querySelectorAll(".close");

question_button.onclick = function () {
  modal.style.display = "block";
};

comment_button.onclick = function () {
  answer.style.display = "block";
};

close[0].onclick = function () {
  modal.style.display = "none";
};

close[1].onclick = function () {
  answer.style.display = "none";
};
