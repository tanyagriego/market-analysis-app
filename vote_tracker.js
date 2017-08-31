var ImageOption = function (name, tally, fileName) {
  this.name = name
  this.tally = 0
  this.fileName = name + ".jpg"
}

imageNames = [];
imageNames.push(new ImageOption("bag"));
imageNames.push(new ImageOption("banana"));
imageNames.push(new ImageOption("boots"));
imageNames.push(new ImageOption("chair"));
imageNames.push(new ImageOption("cthulhu"));
imageNames.push(new ImageOption("dragon"));
imageNames.push(new ImageOption("pen"));
imageNames.push(new ImageOption("scissors"));
imageNames.push(new ImageOption("shark"));
imageNames.push(new ImageOption("sweep"));
imageNames.push(new ImageOption("unicorn"));
imageNames.push(new ImageOption("usb"));
imageNames.push(new ImageOption("water_can"));
imageNames.push(new ImageOption("wine_glass"));



function addImage(imageObject) {
  var container = document.getElementById ("image-container");
  var image = document.createElement("img");
  image.src = "images/" + imageObject.fileName;
  image.addEventListener("click", recordClick);
  container.appendChild(image);
}


function showImages() {
  var index = Math.floor(Math.random() * 14)
  addImage(imageNames[index]);

  var indexTwo = Math.floor(Math.random() * 14)
  while (index == indexTwo) {
    indexTwo = Math.floor(Math.random() * 14)
  }
  addImage(imageNames[indexTwo]);

  var indexThree = Math.floor(Math.random() * 14)
  while (indexTwo == indexThree || index == indexThree) {
    indexThree = Math.floor(Math.random() * 14)
  }
  addImage(imageNames[indexThree]);

}

function congratsAlert () {
  alert("You Voted!");
}

function recordClick(event) {
  var imageSource = event.target.src;
  // imageNames this.tally +
  console.log("Image Clicked "+ imageSource);
}

document.getElementById('image-container').addEventListener("click", congratsAlert);
window.addEventListener("load", showImages);
