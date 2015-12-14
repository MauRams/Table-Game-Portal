//~@~~~#######SHAKING BUTTON PART TAKEN FROM STACKOWERFLOW.COM
  jQuery.fn.shake = function(intShakes, intDistance, intDuration) {
                                    intShakes = intShakes || 2;
                                    intDistance = intDistance || 3;
                                    intDuration = intDuration || 200;

                                    this.each(function() {
                                        $(this).css("position","relative"); 
                                        for (var x=1; x<=intShakes; x++) {
                                        $(this).animate({left:(intDistance*-1)}, (((intDuration/intShakes)/4)))
                                    .animate({left:intDistance}, ((intDuration/intShakes)/2))
                                    .animate({left:0}, (((intDuration/intShakes)/4)));
                                    }
                                  });
                                return this;
                                };

                                                       	$( document ).ready(function() {
                                                                   	
                 $("#shake1").hover(function(){
                     $(this).shake();
                      $(this).css('background-color', 'red')
                  }, function() {
                      $(this).css('background-color', '')
                       });
                                            	
                 $(".shake2").hover(function(){

                     $(this).shake();
                      $("#shake2").css('background-color', 'red !important')
                  }, function() {
                      $("#shake2").css('background-color', '')

                       });
                      });

//SCRIPT FOR LAYER CHANGE AND AJAX

//changeLayers
var helper = 'second';
var layerChange =function(url,cond){
    //login_form, singup_form
    //THIS IS JUST FOR DISABLING SOME BUTTONS....
    if(cond==1){
        //all other nav
        document.getElementById('nav_msg').className = 'shake2';
        document.getElementById('nav_rss').className = 'shake2';
        document.getElementById('nav_top').className = 'shake2';
        
    }
    else if(cond == 2){
        //messages
        document.getElementById('nav_msg').className = 'shake2 disable_url';
        document.getElementById('nav_rss').className = 'shake2';
        document.getElementById('nav_top').className = 'shake2';
        
        
    }
    else if(cond==3){
       //rss 
        document.getElementById('nav_msg').className = 'shake2 ';
        document.getElementById('nav_rss').className = 'shake2 disable_url';
        document.getElementById('nav_top').className = 'shake2';
        
    }
    
        else if(cond==4){
       //rss 
        document.getElementById('nav_msg').className = 'shake2 ';
        document.getElementById('nav_rss').className = 'shake2';
        document.getElementById('nav_top').className = 'shake2 disable_url';
    }
    
    
    if(helper == 'second'){
    	    $.ajax({url: url,
    	    beforeSend: function() {
    	        $("#mainGame").html('<h1>LOADING</h1>');
        },
    	    success: function(result){
        $("#mainGame").html(result);
        
        
              $("#mainProfile").slideToggle("slow");
      setTimeout(function(){
      $("#mainGame").slideToggle("slow");
      }, 1000);
      helper = 'first';
        
   		 }});

    }
    else{


    	$.ajax({url: url, success: function(result){
        $("#mainProfile").html(result);
        
              $("#mainGame").slideToggle("slow");
      setTimeout(function(){
      $("#mainProfile").slideToggle("slow");
      }, 1000);
      helper = 'second';
        
        
        
    	}});

    }
    
};
//fill necesarry fields in the app::
function simpleAjax(url,div){
        	    $.ajax({url: url,
        	        	    beforeSend: function() {
    	        $("#"+div).html('<h1>LOADING</h1>');
        },
        	    success: function(result){
        $("#"+div).html(result);
   		 }});
};