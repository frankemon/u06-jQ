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
      effect: "fade",
      duration: 200,
    },
    hide: {
      effect: "fade",
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
      this.element.addClass("toggle-list")
      $("li", this.element).on("click", function () {
        $(this).toggleClass("line-through");
      });
    },
  });

  $("#taskList").toggleList();
}); // ----------------- close jq ----------------
