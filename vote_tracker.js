var ImageOption = function (fileName, source) {
  this.source = source;
  this.y = 0;
  this.label = fileName;
};

imageNames = [];
imageNames.push(new ImageOption("Bag", "bag.jpg"));
imageNames.push(new ImageOption("Banana", "banana.jpg"));
imageNames.push(new ImageOption("Boots", "boots.jpg"));
imageNames.push(new ImageOption("Chair", "chair.jpg"));
imageNames.push(new ImageOption("Cthulhu", "cthulhu.jpg"));
imageNames.push(new ImageOption("Dragon", "dragon.jpg"));
imageNames.push(new ImageOption("Pen", "pen.jpg"));
imageNames.push(new ImageOption("Scissors", "scissors.jpg"));
imageNames.push(new ImageOption("Shark", "shark.jpg"));
imageNames.push(new ImageOption("Sweep", "sweep.jpg"));
imageNames.push(new ImageOption("Unicorn", "unicorn.jpg"));
imageNames.push(new ImageOption("Usb", "usb.jpg"));
imageNames.push(new ImageOption("Water Can", "water_can.jpg"));
imageNames.push(new ImageOption("Wine Glass", "wine_glass.jpg"));
// console.log(imageNames);


// Creates image for container for HTML
function addImage(imageObject, index) {
  var container = document.getElementById ("image-container");
  var image = document.createElement("img");
  image.src = "images/" + imageObject.source;
  image.addEventListener("click", recordClick);
  container.appendChild(image);
}

// Function to choose random images to display
function showImages() {
  var index = Math.floor(Math.random() * imageNames.length);
  addImage(imageNames[index]);

  var indexTwo = Math.floor(Math.random() * imageNames.length);
  while (index == indexTwo) {
    indexTwo = Math.floor(Math.random() * imageNames.length);
  }
  addImage(imageNames[indexTwo]);

  var indexThree = Math.floor(Math.random() * imageNames.length);
  while (indexTwo == indexThree || index == indexThree) {
    indexThree = Math.floor(Math.random() * imageNames.length);
  }
  addImage(imageNames[indexThree]);
}

var clickAmount = 0;
function recordClick(event) {
  var imageSource = event.target.src;
  var imageSourceSplit = imageSource.split("images/")[1];
  for (var index = 0; index < imageNames.length; index++) {
    if (imageSourceSplit == imageNames[index].source){
      imageNames[index].y++;
    }
  }
  clickAmount += 1;
  document.getElementById('image-container').innerHTML = "";
  if (clickAmount < 15) {
    showImages();
  } else {
    showChart.render();
    document.getElementById("chartContainer").style.visibility= "visible";
    document.getElementById("resetButton").style.visibility= "visible";
    }
    document.getElementById("progressBar").setAttribute("value",clickAmount);
    localStorage.setItem("imageData", JSON.stringify(imageNames));
}

function voteAgain () {
  clickAmount = 0;
  document.getElementById("chartContainer").style.visibility = "hidden";
  document.getElementById("progressBar").setAttribute("value",clickAmount);
  document.getElementById("resetButton").style.visibility= "hidden";

  showImages();
}

function loadData () {
  if (localStorage.getItem("imageData") != null) {
   imageNames = JSON.parse(localStorage.getItem("imageData"));
   showChart.options.data[0].dataPoints = imageNames;
  }
  showImages();
}

var showChart = new CanvasJS.Chart("chartContainer", {
  animationEnabled: true,
  theme: "theme3",
  title:{
    text: "Voting Results Chart"
  },
  data: [
    {
      type: "column",
      dataPoints: imageNames
    }
  ]
  // voteAgain();
});
window.addEventListener("load", loadData);
document.getElementById('resetButton').addEventListener("click", voteAgain);
