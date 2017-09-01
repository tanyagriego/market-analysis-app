var ImageOption = function (name, tally) {
  this.name = name;
  this.tally = 0;
  this.fileName = name + ".jpg";
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
// console.log(imageNames);

// var tableBody =
// document.getElementById ("ImageOption-table");
// for (var index = 0; index < ImageOption.length; index++) {
//   ImageOption[index].recordClick ();
//   tableBody.appendChild(ImageOption[index].getTableRowInfo());
// }



function addImage(imageObject, index) {
  var container = document.getElementById ("image-container");
  var image = document.createElement("img");
  // console.log(image);
  // console.dir(image);
  image.src = imageObject;
  image.dataset.index = index;
  image.addEventListener("click", recordClick);
  container.appendChild(image);
}


function showImages() {
  var index = Math.floor(Math.random() * 14)
  console.log(imageNames[index]);
  addImage("images/" + imageNames[index].fileName, index);

  var indexTwo = Math.floor(Math.random() * 14)
  while (index == indexTwo) {
    indexTwo = Math.floor(Math.random() * 14)
  }
  addImage("images/" + imageNames[indexTwo].fileName, indexTwo);

  var indexThree = Math.floor(Math.random() * 14)
  while (indexTwo == indexThree || index == indexThree) {
    indexThree = Math.floor(Math.random() * 14)
  }
  addImage("images/" + imageNames[indexThree].fileName, indexThree);

}



function recordClick(event) {
  alert("You voted! " + imageSource);
  var imageSource = event.target.src;
  // console.log(event);
  imageNames [event.target.dataset.index].tally++;
  console.log(imageNames [event.target.dataset.index]);
  // for (var index = 0; index < imageNames.length; index++) {
  //   if (imageSource.indexOf(imageNames[index].imageSource) >= 0) {
  //     imageNames[index].tally++;
    // console.log("Image Clicked "+imageSource);
    // }
  // }
  // alert("You voted for "+ imageSource)
  // imageNames this.tally +
  // console.log("Image Clicked "+ imageSource);
}


window.addEventListener("load", showImages);
