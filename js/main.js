var zip,countrycode,status;
var deg = " &deg;C";

$(document).ready(function(){

    //-------JSON Call-----------

        $.getJSON('http://ipinfo.io', function(data){
            city = data.city;
            countrycode = data.country;
            $("#city").html("<h2>"+city+","+countrycode+"</h2>");

        //------------------ Ajax Calls------------------

            $.ajax({
        
                url:"http://api.openweathermap.org/data/2.5/weather?q="+city+","+countrycode+"&APPID=c2fd1f2394497b95f9ee4c01364d19ac",
                success: function(weatherData){
                            console.log(weatherData);
                            $("#main").html("<h2> Snow/Rain: "+weatherData.weather[0].main+"</h2>");
                            $("#description").html("<h2>"+weatherData.weather[0].description+"</h2>");
                            var temp = Math.round((weatherData.main.temp - 273.15) * 100)/100;
                            $("#image").html("<img src='http://openweathermap.org/img/w/"+weatherData.weather[0].icon+".png'>");
                            $("#temp").html("<h2>"+temp+deg+"</h2>");
                            $("#temp").click(function(){
                                if(deg==" &deg;C"){
                                    temp = Math.round((temp*1.8 + 32) * 100)/100
                                    deg = " &deg;F"
                                    $("#temp").html("<h2>"+temp+deg+"</h2>");
                                }
                                else if (deg==" &deg;F"){
                                    temp = Math.round(((temp - 32) * .5556) * 100)/100
                                    deg = " &deg;C"
                                    $("#temp").html("<h2>"+temp+deg+"</h2>");
                                }
                            });
                            $("#wind").html("<p> Wind: "+weatherData.wind.speed+" meter/sec"+"</p>");
                        }
            });
        });
});