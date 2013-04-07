function isCanvasSupported(){
  var elem = document.createElement('canvas');
  return !!(elem.getContext && elem.getContext('2d'));
}
var contentEditableSupport = "contentEditable" in document.documentElement;
if (!isCanvasSupported()){
  $('body').html('Lo siento. Tu navegador no soporta HTML5 Canvas, por lo que no podrás utilizar este generador. Descarga <a href="http://www.google.com/chrome?hl=es" target="blank">Google Chrome</a> y vuelve a intentarlo.');
}
if (!contentEditableSupport) {
  $('body').html('Lo siento. Tu navegador no soporta HTML5 contentEditable, por lo que no podrás utilizar este generador. Descarga <a href="http://www.google.com/chrome?hl=es" target="blank">Google Chrome</a> y vuelve a intentarlo.');
}

var images = ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png', '9.png', '10.png'];
for (var i = 0; i < images.length; i++) {
  var img = new Image();
  img.src = "img/avatares/" + images[i];
}

function randimg(thing) {
  ran = images[Math.floor(Math.random() * images.length)];
  thing = thing.split(' ')[1];
  console.log(ran);
  console.log(thing);
  $(".img." + thing).css({
    'background-image': 'url(img/avatares/' + ran + ')'
  });
}

$(".img.av1,.img.av2").on("click", function() {
  thingy = $(this).attr("class");
  randimg(thingy);
});

$("#descargar").click(function(e) {
  e.preventDefault();
  html2canvas($("#bigmike"), {
    onrendered: function(canvas) {
      datauri = canvas.toDataURL("image/png");
      $("input#data").val(datauri);
      $('#form').submit();
      // $("#image").html(Canvas2Image.saveAsJPEG(canvas, true));
      // $(window).scrollTop($("#image")[0].scrollHeight);
    }
  });
});

// Social buttons shit
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/es_LA/all.js#xfbml=1&appId=249794381729144";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
