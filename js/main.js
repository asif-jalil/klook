(function ($) {

  "use strict";



  //home search
  $('.category').niceSelect();
  $('.place').niceSelect();


  // init Isotope
  var $grid = $('.isotope-grid').isotope({
    // options
    // itemSelector = '.isotope-item asia';
    // layoutMode = 'fitRows';
    getSortData: {
      days: '.days parseInt',
      budget: '.budget parseInt',
    }
  });
  // filter items on button click
  $('.filter-sub-menu').on('click', 'li', function () {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({
      filter: filterValue
    });
  });

  // sort items on button click
  $('.sort-menu').on('click', 'li', function () {
    var sortByValue = $(this).attr('data-sort-by');
    $grid.isotope({
      sortBy: sortByValue
    });
  });

  //wow js
  new WOW().init();


  //menu active
  $('.toggle-open').click(function () {
    $('.main-menu').addClass('active');
  })

  $('.toggle-close').click(function () {
    $(this).parent().removeClass('active');
  })



})(jQuery);