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
  
//  const taskList = $('#taskList');  // Save html ul element as const
//  let state = false;
  
  $.widget( "custom.toggleList", {
    options: {
      value: 0  // maybe use this to set line-through
    },

        _create: function() {
          console.log("hello");
          // $( "#taskList li" ).on( "click", function() {
          //  $(this).toggleClass('line-through')
          //   });

        },

     
      });
      
      
      
      console.log("bye");
      
    });// ----------------- close jq ----------------
    
      $('#taskList').toggleList();




