//navbar ++++++++++++++++


$(document).ready(function(){
    $("#abcd").click(function(){
        $("#tgl").toggle();
    });
});

$(document).ready(function(){
    $(".bar_txt").click(function(){
        $("#tgl").hide();
    });
});

window.onscroll = function() {
  myFunction();
};

function myFunction() {
  
  var navbar = document.getElementById("h01");
  var lnk = document.getElementsByClassName("bar_txt");
  var cng = document.getElementById("list");
  var b;

  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    for (b = 0; b < lnk.length; b++) {
      lnk[b].style.color += "black";
      lnk[b].classList.remove("cb");
      lnk[b].classList.add("cg");
    }
    
    navbar.className =
      " nbar" +
      " box-shadow" +
      " navbar-animate-top" +
      " nbgc";
    
    cng.className = "nbgc";
    
  } else {
    for (b = 0; b < lnk.length; b++) {
      lnk[b].style.color = lnk[b].style.color.replace("black", "");
      lnk[b].classList.remove("cg");
      lnk[b].classList.add("cb");
    }
    
    navbar.className = navbar.className.replace(
      "navbar-animate-top nbgc",
      ""
    );
    cng.className = cng.className.replace(
      "nbgc",
      ""
     );
  }
}

//navbar ---------------------

//jquery fade in on scroll ++++++++++

$(window).on("scroll.two", function () {
    var oneDivHeight = $(".one").height();
    var viewPortSize = $(this).height();

    var triggerAt = 100;
    var triggerHeight = (oneDivHeight - viewPortSize) + triggerAt;

    if ($(window).scrollTop() >= triggerHeight) {
       $(document).ready(function(){
        $(".two").addClass("at");
});
    }
});

$(window).on("scroll.three", function () {
    var oneDivHeight = $(".one").height();
    var twoDivHeight = $(".two").height();
    var viewPortSize = $(this).height();

    var triggerAt = 100;
    var triggerHeight = (oneDivHeight + twoDivHeight - viewPortSize) + triggerAt;

    if ($(window).scrollTop() >= triggerHeight) {
        $(document).ready(function(){
        $(".three").addClass("at");
});
    }
});

$(window).on("scroll.four", function () {
    var oneDivHeight = $(".one").height();
    var twoDivHeight = $(".two").height();
    var threeDivHeight = $(".three").height();
    var viewPortSize = $(this).height();

    var triggerAt = 100;
    var triggerHeight = (oneDivHeight + twoDivHeight + threeDivHeight - viewPortSize) + triggerAt;

    if ($(window).scrollTop() >= triggerHeight) {
        $(document).ready(function(){
        $(".four").addClass("at");
});
    }
});

$(window).on("scroll.five", function () {
    var oneDivHeight = $(".one").height();
    var twoDivHeight = $(".two").height();
    var threeDivHeight = $(".three").height();
    var fourDivHeight = $(".four").height();
    var viewPortSize = $(this).height();

    var triggerAt = 100;
    var triggerHeight = (oneDivHeight + twoDivHeight + threeDivHeight + fourDivHeight - viewPortSize) + triggerAt;

    if ($(window).scrollTop() >= triggerHeight) {
        $(document).ready(function(){
        $(".five").addClass("at");
});
    }
});


//jquery fade in on scroll ---------------

//textillate.js text animation

$('.animation01').textillate({
  in:  { effect: 'fadeInUpBig', delay:150,shuffle: true},
//  out: { effect: 'rollOut', sync:true,delay:100},
// loop:true
});

$(window).on("scroll.two", function () {
    var oneDivHeight = $(".one").height();
    var viewPortSize = $(this).height();

    var triggerAt = 400;
    var triggerHeight = (oneDivHeight - viewPortSize) + triggerAt;

    if ($(window).scrollTop() >= triggerHeight) {
       $('.animation02').textillate({
  in:  { effect: 'fadeIn', delay:3,shuffle: true},
//  out: { effect: 'rollOut', sync:true,delay:100},
// loop:true
}); 
    }
});

$(window).on("scroll.three", function () {
    var oneDivHeight = $(".one").height();
    var twoDivHeight = $(".two").height();
    var viewPortSize = $(this).height();

    var triggerAt = 350;
    var triggerHeight = (oneDivHeight + twoDivHeight - viewPortSize) + triggerAt;

    if ($(window).scrollTop() >= triggerHeight) {
        $('.animation03').textillate({
  in:  { effect: 'fadeIn', delay:5,shuffle: true},
//  out: { effect: 'rollOut', sync:true,delay:100},
// loop:true
});
    }
});

//textillate.js text animation