$( document ).ready(function() {
    console.log( "ready!" );
});


$(function () {

$('#secretBox').css('background-color', 'white').html('<h1>Secret Box</h1>')

});

$(function () {
  $('#row1').children().addClass('boxType3')
});

$(function () {
  $('#row4 :last-child').hide()
})

$(function () {
  $('.boxType1').css('background-color', 'white')
})

$(function () {
  $('#row2 :lt(2)').removeClass('box').removeClass('boxType2').removeClass('boxType3')
})

$(function () {
  $('#container *').not('.row').not('#secretBox').css('width', '2px')
})
