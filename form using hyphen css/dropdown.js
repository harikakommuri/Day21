$(document).ready(function() {
  $("select option[value = 'quotedetails']:selected").function() {
    $(".additionalinformation").hide();
    $(".quotedetails").show();
  };
  $("select option"[value = "additionalinformation"]:selected).function() {
    $(".quotedetails").hide();
    $(".additionalinformation").show();
  };
});
