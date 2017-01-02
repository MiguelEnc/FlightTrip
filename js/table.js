  
          $.getJSON( "data/test.json", function( data ) {
        
           var tr;
    for (var i = 0; i <  data.trips.tripOption.length; i++) {
        tr = $('<tr/>');
        tr.append("<td> <div style='height: 50px; overflow:auto;'>" +data.trips.tripOption[i].slice[0].segment[0].flight.carrier + "  </div></td>");
        tr.append("<td> <div style='height: 50px; overflow:auto;'>" + data.trips.tripOption[i].saleTotal+ "</div></td>");
        tr.append("<td> <div style='height: 50px; overflow:auto;'>In progress</div></td>");
        tr.append("<td><div style='height: 50px; overflow:auto;'><input type='radio' name='flight' value="+i+"></div></td>");
        $('table').append(tr);
        
    }
    
          });
          /**
 * Created by Kupletsky Sergey on 05.11.14.
 *
 * MateriE 11, Safari 5.1.7
 * You can use this table in Bootstrap (v3) projects. Material Design Responsive Table CSS-style will override basic bootstrap style.
 * JS used only for table constructor: you don't need it in your project
 */

$(document).ready(function() {

    var table = $('#table');

    // Table bordered
    $('#table-bordered').change(function() {
        var value = $( this ).val();
        table.removeClass('table-bordered').addClass(value);
    });

    // Table striped
    $('#table-striped').change(function() {
        var value = $( this ).val();
        table.removeClass('table-striped').addClass(value);
    });
  
    // Table hover
    $('#table-hover').change(function() {
        var value = $( this ).val();
        table.removeClass('table-hover').addClass(value);
    });

    // Table color
    $('#table-color').change(function() {
        var value = $(this).val();
        table.removeClass(/^table-mc-/).addClass(value);
    });
});

// jQuery’s hasClass and removeClass on steroids
// by Nikita Vasilyev
// https://github.com/NV/jquery-regexp-classes
(function(removeClass) {

	jQuery.fn.removeClass = function( value ) {
		if ( value && typeof value.test === "function" ) {
			for ( var i = 0, l = this.length; i < l; i++ ) {
				var elem = this[i];
				if ( elem.nodeType === 1 && elem.className ) {
					var classNames = elem.className.split( /\s+/ );

					for ( var n = classNames.length; n--; ) {
						if ( value.test(classNames[n]) ) {
							classNames.splice(n, 1);
						}
					}
					elem.className = jQuery.trim( classNames.join(" ") );
				}
			}
		} else {
			removeClass.call(this, value);
		}
		return this;
	}

})(jQuery.fn.removeClass);
      
 function next() {
   Cookies.set('selectedflight',$('input[name=flight]:checked', '#klk1').val());
   location.href='info.html';
}     
     