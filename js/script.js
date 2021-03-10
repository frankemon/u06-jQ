$(() => {
  console.log('JQuery ready');

  // Sortable lists
    $( ".connectedSortable" ).sortable({
      connectWith: ".connectedSortable"
    }).disableSelection();
  
  // Dialog 
    $( "#dialog" ).dialog({
      autoOpen: false,
      show: {
        effect: "fade",
        duration: 200
      },
      hide: {
        effect: "fade",
        duration: 300
      }
    });
    
    $( "#opener" ).on( "click", function() {
      $( "#dialog" ).dialog( "open" );
    });
  
  $('.dialog').dialog({
    height: "auto",
    width: "100"
  });
  
  // Tabs
    $( "#tabs" ).tabs();
  
  // Datepicker
    $( "#datepicker1, #datepicker2, #datepicker3" ).datepicker();
  

  // My custom widget
  // this widget adds a line through text to signify that it is complete
  
 const taskList = $('#taskList');  // Save html ul element as const
 let state = false;
  
  $.widget( "custom.completeTask", {
    options: {
      // value: false  // maybe use this to set line-through
      
    },
    _create: function() {
        $( "#taskList li" ).on( "click", function() {
          $(this).addClass('line-through')
          });
        },

        _update: function() {
          $( "#taskList li" ).on( "click", function() {
          this.element.removeClass("line-through");
          console.log(this);
          }
        
          )},

        _destroy: function() {
          this.element.removeClass('line-through')
        }
}); 


  $('#taskList li').completeTask();

});// ----------------- close jq ----------------
