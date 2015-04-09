$(document).ready(function() {
  
  function draggableApply() {
    $('#clock-container').draggable({ scroll: false, cursor: 'move', snap: true, stack: ".drag", containment: 'parent', grid: [ 10, 10 ]});
    // $('#signFrom').draggable({ scroll: false, cursor: 'move', snap: true, stack: ".drag" , containment: 'parent', grid: [ 10, 10 ]});
    $('#todoHide').draggable({ scroll: false, cursor: 'move', snap: true, stack: ".drag",  grid: [ 10, 10 ]});
    $('.weather').draggable({ scroll: false, cursor: 'move', snap: true, stack: ".drag", containment: 'parent', grid: [ 10, 10 ]});
    $('.tweetBox').draggable({ scroll: false, cursor: 'move', snap: true, stack: ".drag", containment: 'parent', grid: [ 10, 10 ]});
    $('.timeline').draggable({ scroll: false, cursor: 'move', snap: true, stack: ".drag", containment: 'parent', grid: [ 10, 10 ]});
  }
  
  // to do list functionality
  function flexibleList() {
    // $( "#todoHide" ).resizable();
  }

   $( ".weather" ).on( "click", function() {
  // grab values onClick //
    var weatherPosTop = $(".weather").css("top");
    var weatherPosLeft = $(".weather").css("left");
  // store settings in localStorage //
    localStorage.weatherTop = weatherPosTop;
    localStorage.weatherLeft = weatherPosLeft; 
  });


  $( "#clock-container" ).on( "click", function() {
  // grab values onClick //
    var clockPosTop = $("#clock-container").css("top");
    var clockPosLeft = $("#clock-container").css("left");
  // store settings in localStorage //
    localStorage.clockTop = clockPosTop;
    localStorage.clockLeft = clockPosLeft; 
  });
 
  $( ".tweetBox" ).on( "click", function() {
  // grab values onClick //
    var tweetBoxPosTop = $(".tweetBox").css("top");
    var tweetBoxPosLeft = $(".tweetBox").css("left");
  // store settings in localStorage //
    localStorage.tweetBoxTop = tweetBoxPosTop;
    localStorage.tweetBoxLeft = tweetBoxPosLeft; 
  });

  $( "#todoHide" ).on( "click", function() {
  // grab values onClick //
    var todoPosTop = $("#todoHide").css("top");
    var todoPosLeft = $("#todoHide").css("left");
  // store settings in localStorage //
    localStorage.todoTop = todoPosTop;
    localStorage.todoLeft = todoPosLeft;
  });

  $( ".timeline" ).on( "click", function() {
  // grab values onClick //
    var timelinePosTop = $(".timeline").css("top");
    var timelinePosLeft = $(".timeline").css("left");
  // store settings in localStorage //
    localStorage.timelineTop = timelinePosTop;
    localStorage.timelineLeft = timelinePosLeft; 
  });

  // load settings from localStorage //
  function loadSettings() {
    $( "#clock-container" ).css("top", localStorage.clockTop);
    $( "#clock-container" ).css("left", localStorage.clockLeft);
    $( "#todoHide" ).css("top", localStorage.todoTop);
    $( "#todoHide" ).css("left", localStorage.todoLeft);
    $( ".tweetBox" ).css("top", localStorage.tweetBoxTop);
    $( ".tweetBox" ).css("left", localStorage.tweetBoxLeft);
    $( ".timeline" ).css("top", localStorage.timelineTop);
    $( ".timeline" ).css("left", localStorage.timelineLeft);
    $( ".weather" ).css("top", localStorage.weatherTop);
    $( ".weather" ).css("left", localStorage.weatherLeft);
  }


// run functions onload //
  // $(draggableApply);
  $(loadSettings);
  $(flexibleList);
  setInterval(draggableApply, 1000);
  setInterval(console.log("draggableApply"), 1000);


});

