/**
 * Created by Kupletsky Sergey on 05.11.14.
 *
 * MateriE 11, Safari 5.1.7
 * You can use this table in Bootstrap (v3) projects. Material Design Responsive Table CSS-style will override basic bootstrap style.
 * JS used only for table constructor: you don't need it in your project
 */

$(document).ready(function () {
var data = JSON.parse(sessionStorage.getItem('rutas'));
var costo = Cookies.get("costos");
    console.log(data);
    var tr;
    for (var i = 0; i <  data.length; i++) {
        tr = $('<tr/>');
//        if(i===0){
            tr.append("<td><div style='height: 50px; overflow:auto;'>" + data[i].trips.data.carrier[0].name + "</div></td>");
            tr.append("<td><div style='height: 50px; overflow:auto;'>" + data[i].trips.tripOption[0].slice[0].segment[0].flight.number + "</div></td>");
            tr.append("<td><div style='height: 50px; overflow:auto;'>" + data[i].trips.tripOption[0].slice[0].segment[0].leg[0].origin + "</div></td>");
            tr.append("<td><div style='height: 50px; overflow:auto;'>" + data[i].trips.tripOption[0].slice[0].segment[0].leg[0].departureTime + "</div></td>");
            tr.append("<td><div style='height: 50px; overflow:auto;'>" + data[i].trips.tripOption[0].slice[0].segment[0].leg[0].destination + "</div></td>");
            tr.append("<td><div style='height: 50px; overflow:auto;'>" + data[i].trips.tripOption[0].slice[0].segment[0].leg[0].arrivalTime + "</div></td>");
            tr.append("<td><div style='height: 50px; overflow:auto;'>" + data[i].trips.tripOption[0].saleTotal +"</div></td>");
            $('table').append(tr);
//        }else{
//            tr.append("<td><div style='height: 50px; overflow:auto;'>" + data[i].trips.data.carrier[0].name + "</div></td>");
//            tr.append("<td><div style='height: 50px; overflow:auto;'>" + data[i].trips.tripOption[0].slice[0].segment[0].flight.number + "</div></td>");
//            tr.append("<td><div style='height: 50px; overflow:auto;'>" + data[i].trips.tripOption[0].slice[0].segment[0].leg[0].origin + "</div></td>");
//            tr.append("<td><div style='height: 50px; overflow:auto;'>" + data[i].trips.tripOption[0].slice[0].segment[0].leg[0].departureTime + "</div></td>");
//            tr.append("<td><div style='height: 50px; overflow:auto;'>" + data[i].trips.data.city[1].name + " (" + data[i].trips.data.city[1].code + "</div></td>");
//            tr.append("<td><div style='height: 50px; overflow:auto;'>" + data[i].trips.tripOption[0].slice[0].segment[0].leg[0].arrivalTime + "</div></td>");
//            tr.append("<td><div style='height: 50px; overflow:auto;'>" + data[i].trips.tripOption[0].saleTotal +"</div></td>");
//            $('table').append(tr);
//        }
        
    }
    
    var total = "Total del vuelo: " + costo;
    document.getElementById('total').innerHTML = total;    
    
    var table = $('#table');

    
    // Table bordered
//    $('#table-bordered').change(function() {
//        var value = $( this ).val();
//        table.removeClass('table-bordered').addClass(value);
//    });
//
//    // Table striped
//    $('#table-striped').change(function() {
//        var value = $( this ).val();
//        table.removeClass('table-striped').addClass(value);
//    });
//  
//    // Table hover
//    $('#table-hover').change(function() {
//        var value = $( this ).val();
//        table.removeClass('table-hover').addClass(value);
//    });
//
//    // Table color
//    $('#table-color').change(function() {
//        var value = $(this).val();
//        table.removeClass(/^table-mc-/).addClass(value);
//    });
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
      
// function next() {
//   Cookies.set('selectedflight',$('input[name=flight]:checked', '#klk1').val());
//   location.href='info.html';
//}     
     