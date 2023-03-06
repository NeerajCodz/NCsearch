//SEARCH ON ENTER
var input = document.getElementById("search-input");
  input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("image-search-button").click();
  }
});

//SUGGESTIONS
$(document).ready(function() {
  var allorigins = 'https://api.allorigins.win/get?url=';
  var suggestAPI = 'https://suggestqueries.google.com/complete/search?client=firefox&q=';
  function getSuggestions(query) {
    var url = allorigins + encodeURIComponent(suggestAPI + query);
    $.get(url, function(response) {
      var suggestions = JSON.parse(response.contents)[1];
      showSuggestions(suggestions);
    });
  }
  function showSuggestions(suggestions) {
    var html = '';
    for (var i = 0; i < suggestions.length; i++) {
      html += '<div class="suggestion">' + suggestions[i] + '</div>';
    }
    $('.suggestions').html(html);
    $('.suggestions').slideDown();
  }
  function selectSuggestion(index) {
    var suggestions = $('.suggestion');
    var activeSuggestion = $('.active');
    if (activeSuggestion.length) {
      activeSuggestion.removeClass('active');
    }
    suggestions.eq(index).addClass('active');
  }
  $(document).on('keyup', '#search-input', function(e) {
    var query = $(this).val();
    var suggestions = $('.suggestion');
    var activeSuggestion = $('.active');
    if (query.length >= 1) {
      getSuggestions(query);
      if (e.keyCode === 38) { 
        // up arrow key
        if (activeSuggestion.length) {
          var index = suggestions.index(activeSuggestion) - 1;
          if (index >= 0) {
            selectSuggestion(index);
          }
        } else {
          selectSuggestion(suggestions.length - 1);
        }
      } else if (e.keyCode === 40) { 
        // down arrow key
        if (activeSuggestion.length) {
          var index = suggestions.index(activeSuggestion) + 1;
          if (index < suggestions.length) {
            selectSuggestion(index);
          }
        } else {
          selectSuggestion(0);
        }
      }
    } else {
      $('.suggestions').slideUp();
    }
  });
  $(document).on('click', '.suggestion', function() {
    var text = $(this).text();
    $('#search-input').val(text);
    $('.suggestions').slideUp();
  
    // Simulate a click event on the search button
    $('#image-search-button').trigger('click');
  });
});

//NAVIGATION BAR
$(function(){
  $("#nav-placeholder").load("/nav/nav.html");
});

//SEARCH FUNCTIONS
function googleSearch()
    {
        var text=document.getElementById("search-input").value;
        var cleanQuery = text.replace(" ","+",text);
        var url='http://www.google.com/search?q='+cleanQuery;
        window.open(url, '_blank');
    }
    function googleImage()
    {
        var text=document.getElementById("search-input").value;
        var cleanQuery = text.replace(" ","+",text);
        var url='http://www.google.com/search?q='+cleanQuery+'&tbm=isch';
         window.open(url, '_blank');
    }
    function googleVideo()
    {
        var text=document.getElementById("search-input").value;
        var cleanQuery = text.replace(" ","+",text);
        var url='http://www.google.com/search?q='+cleanQuery+'&tbm=vid';
         window.open(url, '_blank');
    }
    function WikipediaSearch()
    {
        var text=document.getElementById("search-input").value;
        var cleanQuery = text.replace(" ","+",text);
        var url='https://en.wikipedia.org/wiki/Special:Search?go=Go&search='+cleanQuery;
         window.open(url, '_blank');
    }
    function GmailSearch()
    {
        var text=document.getElementById("search-input").value;
        var cleanQuery = text.replace(" ","+",text);
        var url='https://mail.google.com/mail/u/0/#search/'+cleanQuery;
         window.open(url, '_blank');
    }
    function YoutubeSearch()
    {
        var text=document.getElementById("search-input").value;
        var cleanQuery = text.replace(" ","+",text);
        var url='https://www.youtube.com/results?search_query='+cleanQuery;
         window.open(url, '_blank');
    }
    function MapsSearch()
    {
        var text=document.getElementById("search-input").value;
        var cleanQuery = text.replace(" ","+",text);
        var url='https://www.google.com/maps/search/'+cleanQuery;
         window.open(url, '_blank');
    }
    function SpotifySearch()
    {
        var text=document.getElementById("search-input").value;
        var cleanQuery = text.replace(" ","%20",text);
        var url='https://open.spotify.com/search/'+cleanQuery;
         window.open(url, '_blank');
    }
    function AmazonSearch()
    {
        var text=document.getElementById("search-input").value;
        var cleanQuery = text.replace(" ","+",text);
        var url='https://www.amazon.in/s?k='+cleanQuery;
         window.open(url, '_blank');
    }
    function GithubSearch()
    {
        var text=document.getElementById("search-input").value;
        var cleanQuery = text.replace(" ","+",text);
        var url='https://github.com/search?q='+cleanQuery;
         window.open(url, '_blank');
    }