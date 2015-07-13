# change.js
A simple JavaScript function that detects if a variable has changed. 

Example:

    $(document).scroll(function(){
      var totop = $(window).scrollTop(),
        winht = $(window).height(),
        page = Math.floor(totop/winht); // Detects which section of a site you're viewing
      
      if( change(page) ){ // When you change to a new section...
        // ...do stuff
      }
    });

No jQuery needed, though I used it in the example :)
