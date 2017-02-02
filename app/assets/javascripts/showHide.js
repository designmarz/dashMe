$(document).ready(function(){

    function Visibility_tracking(id, name ) {
        this.id     = id;
        this.name     = name;
        this.hidden  = "false";
// }
// Visibility_tracking
this.save = function () {
    var storageName = this.name+"Data";
    var storageId = this.id;
    var storageHidden = this.hidden;
    var obj = JSON.stringify(this);
    console.log(storageName+" / "+storageId.selector+" / "+storageHidden);
    localStorage.setItem( storageName, obj );
    localStorage.getItem( storageName );
};

this.display = function () {
    if (this.hidden === 'true') {
        console.log('Hidden TRUE!');
    }

    if (this.hidden === 'false') {
        console.log('Not hidden false!');

    }
};
};

clock = new Visibility_tracking( $("#clock"), 'clock' );
todoList = new Visibility_tracking( $("#todo_list"), 'todoList' );
forecast = new Visibility_tracking( $(".forecast_daily"), 'forecast' );

clock.save();
todoList.save();
forecast.save();


// Options Toggle //


    // $( ".slide-toggle" ).slider({
    //   value:0,
    //   min: 0,
    //   max: 1,
    //   step: 1,
    //   slide: function( event, ui ) {
    //     console.log(ui.value)
    //   }
    // });

// $("input[type=checkbox]").switchButton({
//   on_label: 'yes',
//   off_label: 'no'
// });
   
   

// Options Toggle //


// About dev's show hide function
// $(".sliding_div").hide();
// $(".show_hide").show();

$('.about_us_reveal').click(function(e){
    e.preventDefault();
    console.log('.show_hide click')
    $(".about_us").toggleClass('active');
});



// Weather Panel
// $('.forecast_daily').hide();
// Weather Panel
$('#hide_forecast').click(function(e){
    $(".forecast_daily").toggleClass('active');
// AnimateRotate(degArrow,'.fa-arrow-circle-down');
});

// Options Panel
// $(".options_menu_container").hide();
// $(".options_menu").show();
// Options Panel
$('.options_menu').click(function(e){
    e.preventDefault();
    $(".options_menu_container").toggleClass('active');
    $(this).toggleClass('active');
});

// Hide todo
// $("#clock").show();
// $("#show_hide_todo_container").show();

$('#show_hide_todo_container').click(function(e){
    // e.preventDefault();
    $("#todo_list").slideToggle();

    var t = "todoListData";
    if (localStorage.getItem(t) === "true") {
        console.log('!list data');
        todoList.hidden = 'false';

        localStorage.setItem(t, 'false');
        $('#show_hide_todo_container').text('Hide Todo\'s');

    } else
    if (localStorage.getItem(t) === 'false'){
        console.log('list data');
        todoList.hidden = 'true';
        localStorage.setItem(t, 'true');
        $('#show_hide_todo_container').text('Show Todo\'s');
    }
});

$('#show_hide_clock').click(function(e){
    // e.preventDefault();
    $('#clock').slideToggle();

    var t = 'clockData';
    if (localStorage.getItem(t) === 'true') {
        console.log('!clock data');
        clock.hidden = 'false';
        localStorage.setItem(t, 'false');
        $('#show_hide_clock').text('Hide Clock');

    } else
    if (localStorage.getItem(t) === 'false'){
        console.log('clock data');
        clock.hidden = 'true';
        localStorage.setItem(t, 'true');
        $('#show_hide_clock').text('Show Clock');
    }
});

// load settings from localStorage //
function loadHideSettings() {
    if (localStorage.clockData === 'true') { $('#clock').hide(); console.log('hidden true');}
    if (localStorage.clockData === 'false') { $('#clock').show();  console.log('show');}

    if (localStorage.todoListData === 'true') { $('#todo_list').hide(); console.log('hidden true');}
    if (localStorage.todoListData === 'false') { $('#todo_list').show();  console.log('show');}
    console.log("set state");

}



// run functions onload //
loadHideSettings();
});
