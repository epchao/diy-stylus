//When the window loads, it will run this function
$(window).on("load", function() {
  //When the user scrolls, it will run this function
  $(window).scroll(function() {
    //Declare a variable (?)
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    //When the user sees '.video-gallery', it will run this function

    $(".video-gallery").each(function() {
      //Declare a variable that shows the offset of the top layer and the outerHeight of an element
      var objectBottom = $(this).offset().top + $(this).outerHeight();

      //checks to see if the bottom of the object > the bottom of the window viewer
      if (objectBottom < windowBottom) {
        //if the opacity of this element is set to 0 then it will fade to 500 and view the element.
        if ($(this).css("opacity") == 0) {
          $(this).fadeTo(500, 1);
        }
      else {
        //if opacity of element is set to 1 then it will fade to 500 and view the element. Reload page to get fade animation again
        if ($(this).css("opacity") == 1){
          $(this).fadeTo(500, 1);
        }  
      }
      }
    });

    $(".materials-gallery").each(function() {
      //Declare a variable that shows the offset of the top layer and the outerHeight of an element
      var objectBottom = $(this).offset().top + $(this).outerHeight();

      //checks to see if the bottom of the object > the bottom of the window viewer
      if (objectBottom < windowBottom) {
        //if the opacity of this element is set to 0 then it will fade to 500 and view the element.
        if ($(this).css("opacity") == 0) {
          $(this).fadeTo(500, 1);
        }
      else {
        //if opacity of element is set to 1 then it will fade to 500 and view the element. Reload page to get fade animation again
        if ($(this).css("opacity") == 1){
          $(this).fadeTo(500, 1);
        }  
      }
      }
    });

    $(".howto-steps").each(function() {
      //Declare a variable that shows the offset of the top layer and the outerHeight of an element
      var objectBottom = $(this).offset().top + $(this).outerHeight();

      //checks to see if the bottom of the object > the bottom of the window viewer
      if (objectBottom < windowBottom) {
        //if the opacity of this element is set to 0 then it will fade to 500 and view the element.
        if ($(this).css("opacity") == 0) {
          $(this).fadeTo(500, 1);
        }
      else {
        //if opacity of element is set to 1 then it will fade to 500 and view the element. Reload page to get fade animation again
        if ($(this).css("opacity") == 1){
          $(this).fadeTo(500, 1);
        }  
      }
      }
    });

    // scroll through page
  }).scroll();
});