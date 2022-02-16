// Responsize Layout
function sizeElements() {
  // find the header
  let header = document.getElementById('banner');
  // use jquery to get height
  let headerHeight = $(header).height();
  // get window height
  let windowHeight = $(window).height();
  // set column heights to be the full page
  let rowLeft = document.getElementById('left');
  let rowRight = document.getElementById('right');
  let rowHeight = windowHeight - headerHeight;
  $(rowLeft).height(rowHeight);
  // set top left
  let leftHeight = Math.ceil(rowHeight*0.4);
  // print out width of each column
  // console.log("Dimensions of window", $(window).width(), "x", $(window).height());
  // console.log("left column width", $(rowLeft).width());
  // console.log("right column width", $(rowRight).width());
  $(document.getElementById('topleft')).height(leftHeight);
  return 0;
}

sizeElements();

$(document).ready(function () {
  $(window).resize(function() {
    sizeElements();
  });
});

