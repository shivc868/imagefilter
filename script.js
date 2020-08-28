var $grid = $('.row').isotope({
  // options
  itemSelector: '.col-md-4',
  layoutMode: 'fitRows'
});



$('.filter button').on("click",function(){
  var value = $(this).attr('data-name');
  $grid.isotope({
    filter:value
  })
})
