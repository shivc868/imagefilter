var $grid = $('.row').isotope({
  // options
  itemSelector: '.col-md-3',
  layoutMode: 'fitRows'
});



$('.filter button').on("click",function(){
  var value = $(this).attr('data-name');
  $grid.isotope({
    filter:value
  })
})