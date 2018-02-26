$('#formBtn').click(function(){
  console.log('form btn clicked');
  $('.form-popup-container').addClass('formActive');
})

$('.form-popup-x').click(function(){
  $('.form-popup-container').removeClass('formActive');
})


$('#sendBtn').click(function(){
  $('.form-popup-x').click();
  $('.thank').fadeIn(1000);
  $('.thank').fadeOut(4000);
})
