document.getElementById("searchBtn").addEventListener("click", function() {
  var query = document.getElementById("newsQuery").value;

  console.log("Search for: " + query);
});


document.querySelector('.breaking-news-section marquee').addEventListener('mouseover', function () {
  this.stop();
});



document.querySelector('.breaking-news-section marquee').addEventListener('mouseout', function () {
  this.start();
});


