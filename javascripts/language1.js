Translation = (function(){
  lexicon = {
    January: "Janerio",
    February: "Fevereiro",
    March: "Marco",
    April: "Abril",
    May: "Maio",
    June: "Junho",
    August: "Agosto",
    September: "Setembro",
    October: "Outubro",
    November: "Novembro",
    December: "Dezembro"
  };

  return {
    translateToPortugese: function (input) {
      input = $("#text-area").val().split(' ');
      input.forEach(function(word) {
        $(".output").append("<h2>" + lexicon[word] + "<h2>");
        console.log(lexicon[word])
      });
    }
  }
}());



