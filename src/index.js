const titleInput = document.getElementById("titleInput");
const titleOutput = document.querySelector(".preview__title");
const textInput = document.getElementById("textInput");
const textInputBtn = document.querySelector("#textInputBtn");
const previewBody = document.querySelector(".preview__body");
const titleInputBtn = document.getElementById("titleInputBtn");
const imgInput = document.getElementById("imgInput");
const imgInputBtn = document.getElementById("imgInputBtn");
const imgFileBtn = document.getElementById("imgFileBtn");
const imgFileInput = document.getElementById("imgFileInput");
const addInput = document.getElementById("addInput");
const headingInput = document.getElementById("headingInput");
const headingInputBtn = document.getElementById("headingInputBtn");

headingInputBtn.addEventListener("click", function () {
  const h2 = document.createElement("h2");
  h2.textContent = headingInput.value;

  previewBody.insertAdjacentElement("beforeend", h2);
  headingInput.value = null;
});

addInput.addEventListener("click", function () {
  const div = document.createElement("div");
  const input = document.createElement("input");
  const label = document.createElement("label");
  const rndNum = Math.floor(Math.random());
  const btn = document.createElement("button");
  const id = `input${rndNum}`;

  btn.textContent = "Отправить";

  label.setAttribute("for", id);
  label.textContent = "Введите что-нибудь";
  div.classList.add = "form__group";
  input.setAttribute("type", "text");
  input.setAttribute("id", id);
  div.appendChild(label);
  div.appendChild(input);
  div.appendChild(btn);

  previewBody.insertAdjacentElement("beforeend", div);
});

imgFileBtn.addEventListener("click", function () {
  const img = document.createElement("img");
  img.src = window.URL.createObjectURL(imgFileInput.files[0]);
  previewBody.insertAdjacentElement("beforeend", img);
});

imgInputBtn.addEventListener("click", function () {
  const img = document.createElement("img");
  img.src = imgInput.value;
  previewBody.insertAdjacentElement("beforeend", img);
  imgInput.value = null;
});

titleInputBtn.addEventListener("click", function (e) {
  let value = titleInput.value;
  e.preventDefault();
  titleOutput.textContent = value;
  titleInput.value = null;
});

textInputBtn.addEventListener("click", function () {
  const div = document.createElement("div");
  const changeColor = document.createElement("span");
  const textRed = document.createElement("span");
  const textGreen = document.createElement("span");
  textGreen.style.cssText = `display: inline-block; 
  width: 20px; height: 20px; background-color: green`;
  textRed.style.cssText = `display: inline-block; 
  width: 20px; height: 20px; background-color: red`;
  changeColor.textContent = "Change text color";
  div.textContent = textInput.value;
  div.insertAdjacentElement("beforeend", changeColor);
  div.insertAdjacentElement("beforeend", textRed);
  div.insertAdjacentElement("beforeend", textGreen);

  textRed.addEventListener("click", function () {
    div.style.color = "red";
  });
  textGreen.addEventListener("click", function () {
    div.style.color = "green";
  });
  previewBody.insertAdjacentElement("beforeend", div);
  textInput.value = null;
});