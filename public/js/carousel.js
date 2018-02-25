var currentViewItemIndex = 0;
var totalNumOfImages = 4;


$(document).ready(function(){
  //startAutoplay();
  $('#arrow-left').click(function(){
    showPrev();
  })

  $('#arrow-right').click(function(){
    showNext();
  })

  $('.menu-btn').click(function(){
    showMenu();
  })

  // initialize first bar as active
  $('#bar-0').addClass('activeBar');


});


function showPrev(){
  console.log('Prev clicked');
  hideCurrentImage();
  hideCurrentBar();
  //decrease index by 1
  if(currentViewItemIndex == 0){
    currentViewItemIndex = 4;
  }
  currentViewItemIndex--;

  showCurrentImage();
  showCurrentBar();
};

function showNext(){
  console.log('Next clicked');
  hideCurrentImage();
  hideCurrentBar();


  //increase index by 1
  currentViewItemIndex++;
  if(currentViewItemIndex == totalNumOfImages){
    currentViewItemIndex= 0;
  }
  console.log('currentViewItemIndex: ' + currentViewItemIndex );

  showCurrentImage();
  showCurrentBar();


};

function showMenu(){
  console.log('Menu clicked');
  window.location.href="/menu";
}

function hideCurrentImage(){
  //make current image as display:none
  var currentItemId = '#c'+ currentViewItemIndex;
  console.log('currentItemId: ' + currentItemId);
  $(currentItemId).removeClass('active');
}

function showCurrentImage(){
  //make next image as display:block
  currentItemId = '#c'+ currentViewItemIndex;
  $(currentItemId).addClass('active');
}


function hideCurrentBar(){
  //make current bar as background-color as gray
  var currentItemId = '#bar-'+ currentViewItemIndex;
  console.log('currentItemId: ' + currentItemId);
  $(currentItemId).removeClass('activeBar');
}

function showCurrentBar(){
  //make next image as display:block
  currentItemId = '#bar-'+ currentViewItemIndex;
  $(currentItemId).addClass('activeBar');
}

function startAutoplay(){
  console.log('set');
  setInterval(function(){
      showNext();
 }, 5000);
}
