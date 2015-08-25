var Translation = (function(){
  var lexicon = {
      January:"Januar",
      February:"Februar",
      March:"März",
      April:"April",
      May:"Mai",
      June:"Juni",
      July:"Juli",
      August:"August",
      September:"September",
      October:"Oktober",
      November:"November",
      December:"Dezember"
  };

  return {
    translateToGerman: function (input) {
      input = $("#text-area").val().split(' ');
      input.forEach(function(word) {
        $(".output").append("<h2>" + lexicon[word] + "<h2>");
        console.log(lexicon[word])
      });
    }
  }
});
