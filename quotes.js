

      $(document).ready(function() {
        var random;
        var randomQuote;
        var randomAuthor;
        var cor;
        var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];

        getQuote();


        function getQuote(){

          random = Math.floor((Math.random()*colors.length));

          cor = colors[random];

          $(".container").animate({
        backgroundColor: cor

      }, 1000);

          $('.btn').animate({
            color:cor
          }, 500);


       $("#quote").animate({
          opacity: 0
        }, 500,
        function() {
          $(this).animate({
            opacity: 1
          }, 500);

        });

      $("#author").animate({
          opacity: 0
        }, 500,
        function() {
          $(this).animate({
            opacity: 1
          }, 500);

        });





          var url = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
        $.getJSON(url, function(data){
          randomQuote = data.quoteText;
          randomAuthor = data.quoteAuthor;
          if (randomQuote.length <= 200){

          $('#quote').html(data.quoteText);
          $('#autor').html("- " + data.quoteAuthor);
          };
        });
        };
        /*  var quotes = [["A vida é bela.", "Bellini"], ["Azul ou vermelha.","Matrix"], ["Muros sem vida", "Medianeiras" ], ["Sei lá alguma coisa", "Eu mesmo"]];

          var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];

           random = Math.floor((Math.random()*quotes.length));

           randomQuote = quotes[random][0];
           randomAuthor = quotes[random][1];

          $(".quote").html(randomQuote);
          $(".author").html("- " + randomAuthor);
        }*/

   $('#getwit').on('click', function(){
    window.open("http://www.twitter.com/intent/tweet?text=NewQuote! " + randomQuote +"  -" + randomAuthor);

        });
  $('#getQuote').on('click', function(){



    getQuote();
  });

});






   // $.getJSON('https://crossorigin.me/http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en', function(json){


 //   console.log(json);
 //     $('.message').html(JSON.stringify(json));
