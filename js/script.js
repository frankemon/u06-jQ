// Sortable
$( function() {
    $( ".card-column" ).sortable({
      connectWith: ".card"
    }).disableSelection();
  } );

  // Dialog
  $( function() {
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
  } );

  $('#dialog').dialog({
    height: 100,
    width: 300,
    modal: false,
    resizable: true,
    dialogClass: 'no-close success-dialog'
});