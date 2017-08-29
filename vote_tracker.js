var imageNames = ["bad.jpg","banana.jpg",""]

function addImage(imageFileName) {
  var container = document.getElementById ("image-container");
  var image = document.createElement("img");
  image.src = imageFileName;
  image.addEventListener("click", recordClick);
  container.appendChild(imgae);
}

function showImages() {
  var index = Math.floor(Math.random() * 14)
  addImage("images/" +imageNames[index]);
  var index = Math.floor(Math.random() * 14)
  addImage("images/" +imageNames[index]);
  var index = Math.floor(Math.random() * 14)
  addImage("images/" +imageNames[index]);
}

function recordClick(event) {
  var imageSource = event.target.src;
  console.log("Image Clicked "+ imageSource!);
}

window.addEventListener("load", showImages);
