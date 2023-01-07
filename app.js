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

  //trying to hide the scroll bar when not needed
  // memeContainer.style.visibility = "visible";
  // if (memeContainer.childNodes.length <= 2) {
  //   // console.log("less than 3");
  //   memeContainer.style.overflow = "hidden";
  // } else {
  //   memeContainer.style.overflow = "scroll";
  // }

  meme.appendChild(topText);
  meme.appendChild(memeImage);
  meme.appendChild(bottomText);
  meme.appendChild(deleteBtn);

  // memeContainer.style.visibility = "visible";
  //newset meme appears first
  memeContainer.prepend(meme);

  form.reset();
}

// if (
//   mainContainer.childElementCount === 2 &&
//   memeContainer.childElementCount <= 0 &&
//   window.innerWidth > 390
// ) {
//   mainContainer.style.flexDirection = "row";
//   mainContainer.style.alignItems = "center";
//   mainContainer.style.justifyContent = "center";
// }

// memeContainer.style.visibility = "hidden";
