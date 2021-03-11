$(() => {
  console.log("JQuery ready");

  // Sortable lists
  $(".connectedSortable")
    .sortable({
      connectWith: ".connectedSortable",
    })
    .disableSelection();

  // Dialog
  $("#dialog").dialog({
    autoOpen: false,
    show: {
      effect: "bounce",
      duration: 200,
    },
    hide: {
      effect: "explode",
      duration: 300,
    },
  });

  $("#opener").on("click", function () {
    $("#dialog").dialog("open");
  });

  $(".dialog").dialog({
    height: "auto",
    width: "100",
  });

  // Tabs
  $("#tabs").tabs();

  // Datepicker
  $("#datepicker1, #datepicker2, #datepicker3").datepicker();

  // My custom widget
  // this widget adds a line through text to signify that it is complete

  $.widget("custom.toggleList", {
    _create: function () {
      this.element.addClass("toggle-list");
      $("li", this.element).on("click", function () {
        $(this).toggleClass("line-through");  // toggle used to add/remove class
      });
    },
  });

  $("#taskList").toggleList(); // calls toggleList on the id taskList
  
}); // ----------------- close jq ----------------
