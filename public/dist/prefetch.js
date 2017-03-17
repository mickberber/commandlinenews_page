(function() {
  var images = [
    './assets/cln_article.png',
    './assets/cln_front.png',
    './assets/cln_service_output.png',
    './assets/cln_prompt.png'
  ];
  for(var i = 0; i < images.length; i++) {
    var img = new Image();
    img.src = images[i];
  }
})();
