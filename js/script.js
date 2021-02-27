// $( function() {
//     $( "#sortable1, #sortable2, #sortable3" ).sortable({
//       connectWith: ".connectedSortable"
//     }).disableSelection();
//   } );

$(function () {
    $(".card-column").sortable({
        connectWith: ".card-column",
        items: '.card',
        // placeholder: 'ui-state-highlight',
        // forcePlaceholderSize: true,
        // distance: 0.1,
        // dropOnEmpty: true
    });
})