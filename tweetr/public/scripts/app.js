/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

function escape(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}



function createTweetElement(tweet) {
  var name = tweet.user.name;
  var smallAvatars = tweet.user.avatars.small;
  // var regularAvatars = tweet.user.avatars.regular;
  // var largeAvatars = tweet.user.avatars.large;
  var handle = tweet.user.handle;
  var content = tweet.content.text;
  var time = new Date(tweet.created_at).toLocaleString();
  var html =
    `<article class="tweet">
      <header class="tweet-header">
        <img src="${smallAvatars}"/>
        <h2 class="name"> ${name}</h2>
        <span class="handle"> ${handle} </span>
      </header>
      <div class="clearfix">
        <p>${escape(content)}</p>
      </div>
      <footer class="tweet-footer">
        <span class="time"> ${time} </span>
        <div class="social-icons">
          <i class="fa fa-flag fa-2x"></i>
          <i class="fa fa-retweet fa-2x"></i>
          <i class="fa fa-heart fa-2x"></i>
        </div>
      </footer>
    </article>`

  return html;
}


  // <!--     <img src="http://piq.codeus.net/static/media/userpics/piq_8648_400x400.png" alt="pixelated pineapple"> -->
function renderTweets(tweets) {
  tweets.forEach((tweet) => {
    $('#tweet-container').prepend(createTweetElement(tweet))
  });
};

$(document).ready(function() {
  $('form').on('submit', function(event) {
    event.preventDefault();
    if ($('form textarea').val().length > 140) {
      alert('Character count is over the limit!')
    } else if ($('form textarea').val().length === 0 || $('form textarea').val().length === null) {
      alert('Tweet field is empty!')
    } else {
      $.ajax({
        url: '/tweets',
        method: 'POST',
        data: $(this).serialize()
      }).done(function() {
        $('textarea').val("");
        loadTweets();
      });
    }
  });

  function loadTweets() {
    $.ajax({
      url: '/tweets',
      method: 'GET',
      success: renderTweets
    });
  }
  loadTweets();
});
