// Typing Text

let bannerText = new Array("The decision to get help", "starts now!");

var iSpeed = 50; // time delay of print out
var iIndex = 0; // start printing array at this position
var iArrLength = bannerText[1].length; // the length of the text array

var iScrollAt = 20; // start scrolling up at this many lines

var iTextPos = 0; // initialise text position
var sContents = ""; // initialise contents variable
var iRow; // initialise current row

function typewriter() {
  sContents = " ";
  iRow = Math.max(0, iIndex - iScrollAt);
  var destination = document.getElementById("typedtext");

  while (iRow < iIndex) {
    sContents += bannerText[iRow++] + "<br />";
  }
  destination.innerHTML = sContents + bannerText[iIndex].substring(0, iTextPos);
  if (iTextPos++ == iArrLength) {
    iTextPos = 0;
    iIndex++;
    if (iIndex != bannerText.length) {
      iArrLength = bannerText[iIndex].length;
      setTimeout("typewriter()", 100);
    }
  } else {
    setTimeout("typewriter()", iSpeed);
  }
}

typewriter();

// Carousel Function

$(".slider").slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: "linear",
});

function afterType() {
  setTimeout(function () {
    $(".after-typed").fadeIn(200);
  }, 1700);
}

afterType();
