var clicks = 0;
function myFunction() {
    clicks+=1;
    document.getElementById("clicks").innerHTML = clicks;
}

$(document).ready(function() {
    $('#check').change(function() {
      if($(this).is(":checked")) {
        $('#credit_card_section').show();
      } else {
        $('#credit_card_section').hide();
      }
    });
 

    var clicks = 0;
    function myFunction() {
        clicks+=1;
        document.getElementById("clicks").innerHTML = clicks;
    }







});