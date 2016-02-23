$(document).ready(function() {
  function getTweets() {
    //TODO: add connection if check to handle errors
    $.getJSON("/tweets/show",function (data) {
      var list = $(".tweets");

      var allTweest = ""
      for (var i = 0; i < 15; i++) {
        var profilePic = data[i].user.profile_image_url;
        var userName = data[i].user.name;
        var userTweet = data[i].text;
        var finishedTweet = '<div class="twitt"><img src="' + profilePic + '" class="twitPic"><p>' + userTweet +'<br> BY: ' + userName + '</p></div>';
        // list.append(finishedTweet);
        allTweest += finishedTweet;
        // $(".tweets").innerHTML = finishedTweet;
        // $('p.tweets').linkify(); somthing is up with the linkify javascript?
        console.log(data[i]);
        console.log(finishedTweet);
        }
        list.innerHTML = allTweest;
      $('.tweets').linkify();
    });

  }
  getTweets();
  setInterval (getTweets, 180000);
  // setInterval ($('.tweets').linkify(), 180000);
});
