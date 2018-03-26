$(document)
    .ready(function() {

        var today = new Date();

        // $('#datePicker').calendar({
        //     on: 'hover'
        // });


        // $('#example1').calendar();

        // $('.ui.calendar').calendar({
        //     onChange: function(date, text) {
        //         var newValue = text;
        //         alert(newValue);
        //     },
        // });

        $('.ui.icon.button').popup({
            on: 'hover',
            // hoverable:false,
            title: "Number of Sunny Days",
            content: "xx"
        });

        // $('.ui.popup').popup({
        //    		title   : 'Number of Sunny Days',
        //    		content : '47 Sunny Daze'
        //  	});
    });