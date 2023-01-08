const form = document.querySelector("form");
const memeContainer = document.querySelector(".meme-container");
const mainContainer = document.querySelector("#main-container");
const imageUrlInput = document.querySelector("#image-url");
const topTextInput = document.querySelector("#top-text");
const bottomTextInput = document.querySelector("#bottom-text");
const logo = document.querySelector("img[alt='logo']");

form.addEventListener("submit", generateMeme);

function generateMeme(event) {
  event.preventDefault();

  let meme = document.createElement("div");
  meme.classList.add("meme");

  let memeImage = document.createElement("img");
  memeImage.setAttribute("src", imageUrlInput.value);
  memeImage.setAttribute("alt", "an image showing a funny meme");
  memeImage.classList.add("meme-image");

  let topText = document.createElement("span");
  topText.textContent = topTextInput.value.toUpperCase();
  topText.classList.add("top-text");

  let bottomText = document.createElement("span");
  bottomText.textContent = bottomTextInput.value.toUpperCase();
  bottomText.classList.add("bottom-text");

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "DELETE ✕";
  deleteBtn.classList.add("delete-btn");

  deleteBtn.addEventListener("click", () => {
    meme.remove();
  });

  //animate the logo
  logo.classList.remove("animate__animated", "animate__bounce");
  void logo.offsetWidth;
  logo.classList.add("animate__animated", "animate__bounce");

  //assemble the meme element
  meme.appendChild(topText);
  meme.appendChild(memeImage);
  meme.appendChild(bottomText);
  meme.appendChild(deleteBtn);

  //newset meme appears first
  memeContainer.prepend(meme);

  //reset the form values
  form.reset();
}
