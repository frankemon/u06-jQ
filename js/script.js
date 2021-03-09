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
  
  // let taskList = ${'#ul-id'}; // targets
  // const ulElement = ${'#task-list'}; // targets
  
  $.widget( "custom.completeTask", {
    options: {
      value: false
      
    },
    // Constructor
    _create: function() {
      // this.element.addClass("line-through");
      this._update();
    },

    _setOption: function() {
      this.options[key] = value;
      this._update();
    },

    _update: function() {
      // const isDone = `$(this.options.value)`;
      if (this.options.value === true) {
        this.element.addClass("line-through");
        this._trigger("complete", null, {value:true});
      }
    },

    value: function(value) {
      if (value === false) {
        return this.options.value;
      } else {
      // this.element.addClass("line-through");

        // this.options.value = this._constrain(value);
        this._update();
        
      }
    },

    // _constrain: function(value) {
    //   if (value > 100) {
    //     value = 100;
    //   }
    //   if (value < 0) {
    //     value = 0;
    //   }
    //   return value;
    // },

    _destroy: function() {
      this.element
      .removeClass('line-through')
      // .text('');
    }

  });

  const taskDone = $('#taskOne, #taskTwo, #taskThree').completeTask({value:false});
  taskDone.comepleteTask('value', true);
  taskDone.comepleteTask({
    complete: function(event, data) {
      alert("Task complete!");
    }
  });

  // bar.progressbar('value', 100);

    
    
    
  
  // $('list1').completeTask({value: 0});
});