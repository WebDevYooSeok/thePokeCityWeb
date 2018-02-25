var currentViewItemIndex = 0;
var totalNumOfImages = 4;

$(document).ready(function(){


  $('#arrow-left').click(function(){
    showPrev();
  })

  $('#arrow-right').click(function(){
    showNext();
  })

  $('.menu-btn').click(function(){
    showMenu();
  })
});


function showPrev(){
  console.log('Prev clicked');
};

function showNext(){
  console.log('Next clicked');
  var currentItemId = '#c'+ currentViewItemIndex;
  console.log('currentItemId: ' + currentItemId);
  $(currentItemId).removeClass('active');
  currentViewItemIndex++;
  if(currentViewItemIndex == totalNumOfImages){
    currentViewItemIndex= 0;
  }
  console.log('currentViewItemIndex: ' + currentViewItemIndex );
  currentItemId = '#c'+ currentViewItemIndex;
  $(currentItemId).addClass('active');



};

function showMenu(){
  console.log('Menu clicked');
  window.location.href="/menu";
}
