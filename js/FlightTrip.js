// Recibimos como input ciudad inicial y fecha de partida.
var ciudadPartida;
var fechaPartida = new Date();

// Variables que usaremos para guiarnos durante el algoritmo.
var ciudadActual = ciudadPartida;
var fechaActual = fechaPartida;
var ciudadPartidaOriginal;
var ruta = []; //Lista a devolver.
var costoTotal = 0; //Costo total a devolver.

 //Lista de ciudades a visitar.
var flights = []; //Requests temporales a analizar.
var adultos = 0;
var ninos = 0;
var ciudades = [];
//Recibimos las ciudades a visitar con su duracion. Tras confirmar, las enlistamos y vamos haciendo los requests.
function myFunction() {
    
ciudadPartida=document.getElementById("departureCity").value;
ciudadPartidaOriginal=document.getElementById("departureCity").value;
fechaPartida=document.getElementById("datepicker").value;
adultos=document.getElementById("adulto").value;
ciudadActual = ciudadPartida;
fechaActual = fechaPartida;
//Obtenemos los datos del index.
var i=1;
    while(i<4)
    { 
        var check=document.getElementById("arrivalCity"+i).value;
        if(check.length > 0)
        {
           var nombre=document.getElementById("arrivalCity"+i).value;
        var duracion=document.getElementById("sel"+i).value;
        ciudades.push(ciudad(nombre, duracion));
        i++;
        
        }
        else
        {
          break;
        }
        
        
    }
var minimo = 999999999999999999999999999999999;
var ubicacion;
var nombre;
//Determinar cual de las ciudades a visitar posee el viaje mas corto, elegirlo, agregarlo a la lista y reiterar.
while (ciudades.length > 0) {
    //Obtenemos los posibles viajes desde la ciudad actual hasta las ciudades restantes.
    for (var i = 0; i < ciudades.length; i++) {
        request(ciudadActual, ciudades[i].nombre, fechaActual); //no es necesario la 1ra vez.
        //ciudades[i].vuelo = request(ciudadActual, ciudades[i].nombre, fechaActual);
    }
    
    
    //Buscamos el viaje mas corto.
    console.log(flights);
    for (var i = 0; i < flights.length; i++) {
        var sale=flights[i].trips.tripOption[0].saleTotal;
        sale=sale.replace(/[^0-9\.]+/g, "");
        sale=parseInt(sale);
        if (minimo > sale) {
            minimo = sale;
            ubicacion = i;
            var maxLeg = flights[i].trips.tripOption[0].slice[0].segment[0].leg.length;
            nombre = flights[i].trips.tripOption[0].slice[0].segment[0].leg[maxLeg - 1].destination;

//            nombre = flights[i].trips.tripOption[0].slice[0].segment[0].leg[0].destination;
        }
    }
    //Agregamos la informacion del viaje mas corto a la lista a retornar.
    ruta.push(flights[ubicacion]);
    var costo=flights[ubicacion].trips.tripOption[0].saleTotal;
    costo=costo.replace(/[^0-9\.]+/g, "");
    costo=parseInt(costo);
    costoTotal +=costo;

    //Buscamos la ciudad relacionada al trip
    var index;
    for(var i = 0; i<ciudades.length; i++){
        if(ciudades[i].nombre === nombre){
            index = i;
        }
    }
    //Cambiamos de ubicacion y fecha.
    ciudadActual = ciudades[index].nombre;
    fechaActual = addDays(fechaActual, ciudades[index].duracion);

    //Eliminamos la ciudad actual de la lista de ciudades a visitar.
    ciudades = ciudades.filter(function (a){
        return a.nombre!==nombre;
    });

    //Eliminamos los viajes descartados.
    flights = [];
}

    //volviendo a la ciudad de origen
    if (ciudades.length === 0) {
        request(ciudadActual, ciudadPartidaOriginal, fechaActual);
        ruta.push(flights[flights.length - 1]);
        var costo = flights[flights.length - 1].trips.tripOption[0].saleTotal;
        costo = costo.replace(/[^0-9\.]+/g, "");
        costo = parseInt(costo);
        costoTotal += costo;
    }
    
    
//Retornamos los detalles de los vuelos elegidos y el costo total.

console.log(ruta);
//Guardamos la ruta en el session storage
sessionStorage.setItem('rutas', JSON.stringify(ruta));
Cookies.set("costos",costoTotal);
location.href='select.html';
}
function request(ciudadDesde, ciudadHasta, fecha) {
    //TO BE IMPLEMENTED
    var FlightRequest = {
      "request": {
        "slice": [
          {
            "kind": "qpxexpress#sliceInput",
            "origin": ciudadDesde,
            "destination": ciudadHasta,
            "date": fecha
          }
        ],
        "passengers": {
          "kind": "qpxexpress#passengerCounts",
          "adultCount":parseInt(document.getElementById('adulto').innerHTML),
          "infantInLapCount": 0,
          "infantInSeatCount": 0,
          "childCount": parseInt(document.getElementById('nino').innerHTML),
          "seniorCount": 0
        },
        "saleCountry":'US',
        "solutions": 1,
        "refundable": false
      }
    };
    var keyManuel = "AIzaSyDxZmWNE01gdMq8T_h9yirnb0IjJ4bF0E0";
    var keyMiguel = "AIzaSyBrDLPj6wKGupgOJL4Rnu4VSUwFLSgemrM";
    $.ajax({
     type: "POST",
     //Set up your request URL and API Key.
     url: "https://www.googleapis.com/qpxExpress/v1/trips/search?key=" + keyManuel, 
     contentType: 'application/json', // Set Content-type: application/json
     dataType: 'json',
     async: false,
     // The query we want from Google QPX, This will be the variable we created in the beginning
     data: JSON.stringify(FlightRequest),
     success: function (data) {
      //Once we get the result you can either send it to console or use it anywhere you like.
      flights.push(data);
      return data;
      
    },
      error: function(){
       //Error Handling for our request
       alert("Access to Google QPX Failed.");
     }
    });
    
}

function ciudad(nombre, duracion){
    var ciudad = {
        nombre:nombre,
        duracion:duracion
    };
    
    return ciudad;
}

function addDays(date, days) {
    var result = new Date(date);
   var next_date = new Date(result.setDate(result.getDate() + parseInt(days)));
   var formatted = next_date.getUTCFullYear() + '-' + padNumber(next_date.getUTCMonth() + 1) + '-' + padNumber(next_date.getUTCDate());
    return formatted;
}
function padNumber(number) {
                var string  = '' + number;
                string      = string.length < 2 ? '0' + string : string;
                return string;
            }

function add(id)
{
    var x=parseInt(document.getElementById(id).innerHTML);
    
    x=x+1;  
    document.getElementById(id).innerHTML=x.toString();
}
function less(id)
{
    var x=parseInt(document.getElementById(id).innerHTML);
    
    if(x==0)
    {
        x=0;
    }else
    {
        x=x-1
    }
    document.getElementById(id).innerHTML=x.toString();
}