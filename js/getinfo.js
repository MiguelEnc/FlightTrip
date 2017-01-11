/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

console.log(Cookies.get('selectedflight'));
$(document).ready(function(){
   
   var x=Cookies.get('selectedflight');
   var data=JSON.parse(sessionStorage.getItem('rutas'));
    
        
           var p;
    for (var i = 0; i <  data[x].trips.tripOption[0].slice.length; i++) {
        
       $('#info').append("<div class='panel panel-info'>");
       $('#info').append("<div class='panel-heading'>"+data[x].trips.tripOption[0].slice[i].segment[0].leg[0].origin+"-"+data[x].trips.tripOption[0].slice[i].segment[0].leg[0].destination+"</div>");
       $('#info').append("</div>");
       $('#info').append("<div class='panel-body'>");
      $('#info').append("<p> Carrier: " +data[x].trips.tripOption[0].slice[i].segment[0].flight.carrier + "</p>");
      $('#info').append("<p> Cabin: " + data[x].trips.tripOption[0].slice[i].segment[0].cabin+ "</p>");
       $('#info').append("<p> Time: " +data[x].trips.tripOption[0].slice[i].segment[0].duration+"</p>");
        $('#info').append("<p> Flight Number: " +data[x].trips.tripOption[0].slice[i].segment[0].flight.number+"</p>");
        $('#info').append("<p> Departure Time: " +data[x].trips.tripOption[0].slice[i].segment[0].leg[0].departureTime+"</p>");
        $('#info').append("<p> Arrival Time: " +data[x].trips.tripOption[0].slice[i].segment[0].leg[0].arrivalTime+"</p>");
       $('#info').append("</div>");
       $('#info').append("</div>");
        
        
        
        
    }
    $('#info').append("<div class='panel panel-default'>");
    $('#info').append("<div class='panel-body'>");
    $('#info').append("<p> Total Price : " +data.trips.tripOption[x].saleTotal+"</p>");
     $('#info').append("</div>");
     $('#info').append("</div>");
          });
          



