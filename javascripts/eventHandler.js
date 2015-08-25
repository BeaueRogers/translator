var input = $("#text-area").val()
$(".button").on("click", function(){
   if($('#language1').is(':checked')) {
      $(".output").append(Translation.translateToPortugese());
    } else if ($('#languageA').is(':checked')) {
      $(".output").append(Translation.translateToGerman());
    }
});

