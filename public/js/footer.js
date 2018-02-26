$(".back").click(function () {
   //1 second of animation time
   //html works for FFX but not Chrome
   //body works for Chrome but not FFX
   //This strange selector seems to work universally
   $("html, body").animate({scrollTop: 0}, 1000);
});

;

function localChange(){
  var locationSelesction = $('#loc-selc').val();
  var footerAddsDataDiv = $('#footer-adds-data');
  var footerPhoneDataDiv = $('#footer-phone-data');
  console.log(locationSelesction);
  switch (locationSelesction) {
    case 'Denver1':
    console.log('denver1');
    footerAddsDataDiv.text('denver1 Address');
    footerPhoneDataDiv.text('denver1 phone Number');
    break;
    case 'Denver2':
    console.log('denver2');
    footerAddsDataDiv.text('denver2 Address');
    footerPhoneDataDiv.text('denver2 phone Number');
    break;
    case 'Denver3':
    console.log('denver3');
    footerAddsDataDiv.text('denver3 Address');
    footerPhoneDataDiv.text('denver3 phone Number');
    break;

    default:
    break;
  }
}
