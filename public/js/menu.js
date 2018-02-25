var currentSignatureMenuIndex = 0;
var totalNumberofSignatureMenu = 4;

$(document).ready(function(){
  $('.item1').click(function(){
    console.log('item1 is clicked');
    currentSignatureMenuIndex = 0;
    hideAllArrowDown();
    showArrowDown(currentSignatureMenuIndex);
    hideAllSignatureOne();
    showSignatureOne(currentSignatureMenuIndex);
  })
  $('.item2').click(function(){
    console.log('item2 is clicked');
    currentSignatureMenuIndex = 1;
    hideAllArrowDown();
    showArrowDown(currentSignatureMenuIndex);
    hideAllSignatureOne();
    showSignatureOne(currentSignatureMenuIndex);
  })
  $('.item3').click(function(){
    console.log('item3 is clicked');
    currentSignatureMenuIndex = 2;
    hideAllArrowDown();
    showArrowDown(currentSignatureMenuIndex);
    hideAllSignatureOne();
    showSignatureOne(currentSignatureMenuIndex);
  })
  $('.item4').click(function(){
    console.log('item4 is clicked');
    currentSignatureMenuIndex = 3;
    hideAllArrowDown();
    showArrowDown(currentSignatureMenuIndex);
    hideAllSignatureOne();
    showSignatureOne(currentSignatureMenuIndex);
  })

});

function hideAllArrowDown(){
  for (var i = 0; i < totalNumberofSignatureMenu; i++) {
    var arrowDownId= '#arrow-down-'+ i;
    $(arrowDownId).removeClass('arrowActive');
  }
}

function showArrowDown(index){
  var arrowDownId= '#arrow-down-'+ index;
  $(arrowDownId).addClass('arrowActive');
}

function showSignatureOne(index){
  var arrowDownId= '#one-item-'+ index;
  $(arrowDownId).addClass('oneActive');
}


function hideAllSignatureOne(){
  for (var i = 0; i < totalNumberofSignatureMenu; i++) {
    var arrowDownId= '#one-item-'+ i;
    $(arrowDownId).removeClass('oneActive');
  }
}
