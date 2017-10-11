
        var slide_index = 1;  
        displaySlides(slide_index);  
  
        function plusSlides(n) {  
            displaySlides(slide_index += n);  
        }  
  
        function currentSlide(n) {  
            displaySlides(slide_index = n);  
        }  
  
        function displaySlides(n) {  
            var i;  
            var halma = document.getElementsByClassName("halma1"); 
            if (n > halma.length) { slide_index = 1 }  
            if (n < 1) { slide_index = halma.length }  
            for (i = 0; i < halma.length; i++) {  
                halma[i].style.display = "none";  
            } 
            
            halma[slide_index - 1].style.display = "block"; 

        }  
       