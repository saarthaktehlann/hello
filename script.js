$(document).ready(function(){
  $(window).scroll(function(){
    if(this.scrollY>20){
      $('.navbar').addClass("sticky");
    }
    else{$('.navbar').removeClass("sticky");}

  });

  //toggle menu/navbar script
  $('.menub').click(function(){
    $('.navbar .menu').toggleClass("active");
    $('.menub i').toggleClass("active");
  });



// typing

  var typed = new Typed(".typing",{
    strings: ["I Create.", "I Innovate.", "I Solve.", "I Design."],
    typeSpeed:100,
    backSpeed:60,
    loop:true
  });


// owl carousel

  $('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responvive: {
      0:{items: 1 , nav: false},

      600:{items:2 , nav: false},

      1000:{items:3 , nav:false}

    }
  });




////////////////////////////////////////////////////////////////////////////////////////////////fusic
  var figure = $(".fusic");
  var vid = figure.find("video");

  [].forEach.call(figure, function (item,index) {
      item.addEventListener('mouseover', hoverVideo.bind(item,index), false);
      item.addEventListener('mouseout', hideVideo.bind(item,index), false);
  });

  function hoverVideo(index, e) {
      vid[index].play();
  }

  function hideVideo(index, e) {
      vid[index].pause();
  }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////isustain(ALWAYS CHANGE VARIABLE NAMESSSSS)
  var figure1 = $(".isustain");
  var vid1 = figure1.find("video");

  [].forEach.call(figure1, function (item1,index1) {
      item1.addEventListener('mouseover', hoverVideo1.bind(item1,index1), false);
      item1.addEventListener('mouseout', hideVideo1.bind(item1,index1), false);
  });

  function hoverVideo1(index1, e1) {
      vid1[index1].play();
  }

  function hideVideo1(index1, e1) {
      vid1[index1].pause();
  }
/////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////cswitch(ALWAYS CHANGE VARIABLE NAMESSSSS)
  var figure2 = $(".colourswitch");
  var vid2 = figure2.find("video");

  [].forEach.call(figure2, function (item2,index2) {
      item2.addEventListener('mouseover', hoverVideo2.bind(item2,index2), false);
      item2.addEventListener('mouseout', hideVideo2.bind(item2,index2), false);
  });

  function hoverVideo2(index2, e2) {
      vid2[index2].play();
  }

  function hideVideo2(index2, e2) {
      vid2[index2].pause();
  }
/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////covid(ALWAYS CHANGE VARIABLE NAMESSSSS)
  var figure3 = $(".covid");
  var vid3 = figure3.find("video");

  [].forEach.call(figure3, function (item3,index3) {
      item3.addEventListener('mouseover', hoverVideo3.bind(item3,index3), false);
      item3.addEventListener('mouseout', hideVideo3.bind(item3,index3), false);
  });

  function hoverVideo3(index3, e3) {
      vid3[index3].play();
  }

  function hideVideo3(index3, e3) {
      vid3[index3].pause();
  }
/////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////covid(ALWAYS CHANGE VARIABLE NAMESSSSS)
  var figure4 = $(".6feet");
  var vid4 = figure4.find("video");

  [].forEach.call(figure4, function (item4,index4) {
      item4.addEventListener('mouseover', hoverVideo4.bind(item4,index4), false);
      item4.addEventListener('mouseout', hideVideo4.bind(item4,index4), false);
  });

  function hoverVideo4(index4, e4) {
      vid4[index4].play();
  }

  function hideVideo4(index4, e4) {
      vid4[index4].pause();
  }
/////////////////////////////////////////////////////////////////////////////////////////////////





  //
  // ///////////////////////////////////////
  // var $polystar = $('.polystar');
  //
  // $polystar.on('mouseenter focus', function(){
  //   $polystar.get(0).play();
  // });
  //
  // $polystar.on('mouseout blur', function(){
  //   $polystar.get(0).pause();
  // });
  //
  //
  //
  // ///////////////////////////////////////
  //
  // ///////////////////////////////////////
  // var $polystar2 = $('.polystar2');
  //
  // $polystar2.on('mouseenter focus', function(){
  //   $polystar2.get(0).play();
  // });
  //
  // $polystar2.on('mouseout blur', function(){
  //   $polystar2.get(0).pause();
  // });
  //
  //
  //
  // ///////////////////////////////////////

});
