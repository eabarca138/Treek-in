/* SMOOTH SCROLLING */

$("nav a").click(function(event){
  if(this.hash !== "") {
    event.preventDefault()

    var gato = this.hash

    $("html, body").animate({
      scrollTop: $(gato).offset().top
    }, 800, function(){
      window.location.hash = gato
    })
  }
})



/* window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
    document.getElementById("uno").className = "a1-bar";
  } else {
    document.getElementById("uno").className = "";
  }
} */