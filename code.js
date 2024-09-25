const carouselText = [
  { text: "Stunning", color: "#FF5733", bgImage: "images/i1.jpg" },
  { text: "Gorgeous", color: "#33FF57", bgImage: "images/i2.jpg" },
  { text: "Exquisite", color: "#3357FF", bgImage: "images/i3.jpg" },
  { text: "Elegant", color: "#FF33F1", bgImage: "images/i4.jpg" },
  { text: "Alluring", color: "#33FFF1", bgImage: "images/i5.jpg" },
  { text: "Captivating", color: "#F1FF33", bgImage: "images/i6.jpg" },
  {text: "Breathtaking",color: "#FF3333",bgImage: "images/i7.jpg" },
  { text: "Radiant", color: "#33FFFF", bgImage: "images/i8.jpg" },
  { text: "Magnificent", color: "#FF33AB", bgImage: "images/i9.jpg" },
  { text: "Enchanting", color: "#AB33FF", bgImage: "images/i10.jpg" },
  { text: "Dazzling", color: "#FFAB33", bgImage: "images/i1.jpg" },
  { text: "Splendid", color: "#33ABFF", bgImage: "images/i2.jpg" },
  { text: "Ravishing", color: "#FF5733", bgImage: "images/i3.jpg" },
  { text: "Striking", color: "#33FF57", bgImage: "images/i4.jpg" },
  { text: "Picturesque", color: "#5733FF", bgImage: "images/i5.jpg" },
];

document.addEventListener("DOMContentLoaded", function () {
  // Wait 3 seconds after the "Happy Birthday!" heading is revealed
  setTimeout(function () {
    document.getElementById("greeting-section").classList.add("reveal");
    document.getElementById("footer").classList.add("reveal");
  }, 3000); // 3000ms = 3 seconds delay
});


$(document).ready(async function () {
  carousel(carouselText, "#feature-text");
});

async function typeSentence(sentence, eleRef, delay = 100) {
  const letters = sentence.split("");
  let i = 0;
  while (i < letters.length) {
    await waitForMs(delay);
    $(eleRef).append(letters[i]);
    i++;
  }
  return;
}

async function deleteSentence(eleRef) {
  const sentence = $(eleRef).html();
  const letters = sentence.split("");
  let i = 0;
  while (letters.length > 0) {
    await waitForMs(100);
    letters.pop();
    $(eleRef).html(letters.join(""));
  }
}

async function carousel(carouselList, eleRef) {
  var i = 0;
  while (true) {
    updateFontColor(eleRef, carouselList[i].color);
    updateBackgroundImage(carouselList[i].bgImage);
    await typeSentence(carouselList[i].text, eleRef);
    await waitForMs(1500);
    await deleteSentence(eleRef);
    await waitForMs(1500);
    i++;
    if (i >= carouselList.length) {
      i = 0;
    }
  }
}

function updateFontColor(eleRef, color) {
  $(eleRef).css("color", color);
}

function updateBackgroundImage(imageUrl) {
  $("body").css("background-image", `url(${imageUrl})`);
  $("body").css("background-size", "cover");
  $("body").css("background-position", "center");
}

function waitForMs(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
