// Search, retrieve api data, trannslate coodinates to city names, produce data
$('#sourceButton').click(function () {
    var city = $('#searchField').val();
    $("#localForecast").empty();
    $('#localForecast').append("<h1>" + city + "</h1>")
    $.ajax({
        url: "https://api.openweathermap.org/geo/1.0/direct?q=" + city + ",840&limit=1&appid=7a1a53ab77da01ea835cb4760a59e848",
        success: function (data) {
            $.ajax({
                url: "https://api.openweathermap.org/data/2.5/onecall?units=imperial&lat=" + data[0].lat + "&lon=" + data[0].lon + "&appid=7a1a53ab77da01ea835cb4760a59e848",
                success: function (weather) {
                    populateWeather(weather);
                },
                error: function (err) {
                    console.log(err);
                }
            });
        },
        error: function (er) {
            console.log(er);
        }
    })
});


// Displays present day weather and stores future weather data
function populateWeather(data) {
    var cityName = $("#localForecast h1").first().text();
    $("#localForecast").append("<h3>Temp: " + data.current.temp + "</h3>")
    $("#localForecast").append("<h3> Wind: " + data.current.wind_speed + "</h3>")
    $("#localForecast").append("<h3> Humidity: " + data.current.humidity + "</h3>")
    $("#localForecast").append("<h3> UV Index: " + data.current.uvi + "</h3>")
    var cityObj = {
        name: $("#localForecast h1").first().text(),
        temp: data.current.temp,
        wind: data.current.wind_speed,
        humidity: data.current.humidity,
        uvi: data.current.uvi,
        daily: data.daily
    }


    // Date declaration
    var today = moment();
    var dayOne = moment(today).add(1, 'days');
    var dayTwo = moment(today).add(2, 'days');
    var dayThree = moment(today).add(3, 'days');
    var dayFour = moment(today).add(4, 'days');
    var dayFive = moment(today).add(5, 'days');


    // Displays weather from the instance the city was searched
    $("#dayOne").empty()
    $("#dayOne").text(dayOne)
    $("#dayOne").append("<img src='http://openweathermap.org/img/wn/" + data.daily[0].weather[0].icon + ".png'>")
    $("#dayOne").append("<h5>  Temp: " + data.daily[0].temp.eve + "</h5>")
    $("#dayOne").append("<h5>  Wind " + data.daily[0].wind_speed + "</h5>")
    $("#dayOne").append("<h5>  Humidity " + data.daily[0].humidity + "</h5>")

    $("#dayTwo").empty()
    $("#dayTwo").text(dayTwo)
    $("#dayTwo").append("<img src='http://openweathermap.org/img/wn/" + data.daily[1].weather[0].icon + ".png'>")
    $("#dayTwo").append("<h5>  Temp: " + data.daily[1].temp.eve + "</h5>")
    $("#dayTwo").append("<h5>  Wind " + data.daily[1].wind_speed + "</h5>")
    $("#dayTwo").append("<h5>  Humidity " + data.daily[1].humidity + "</h5>")

    $("#dayThree").empty()
    $("#dayThree").text(dayThree)
    $("#dayThree").append("<img src='http://openweathermap.org/img/wn/" + data.daily[2].weather[0].icon + ".png'>")
    $("#dayThree").append("<h5>  Temp: " + data.daily[2].temp.eve + "</h5>")
    $("#dayThree").append("<h5>  Wind " + data.daily[2].wind_speed + "</h5>")
    $("#dayThree").append("<h5>  Humidity " + data.daily[2].humidity + "</h5>")

    $("#dayFour").empty()
    $("#dayFour").text(dayFour)
    $("#dayFour").append("<img src='http://openweathermap.org/img/wn/" + data.daily[3].weather[0].icon + ".png'>")
    $("#dayFour").append("<h5>  Temp: " + data.daily[3].temp.eve + "</h5>")
    $("#dayFour").append("<h5>  Wind " + data.daily[3].wind_speed + "</h5>")
    $("#dayFour").append("<h5>  Humidity " + data.daily[3].humidity + "</h5>")

    $("#dayFive").empty()
    $("#dayFive").text(dayFive)
    $("#dayFive").append("<img src='http://openweathermap.org/img/wn/" + data.daily[4].weather[0].icon + ".png'>")
    $("#dayFive").append("<h5>  Temp: " + data.daily[4].temp.eve + "</h5>")
    $("#dayFive").append("<h5>  Wind " + data.daily[4].wind_speed + "</h5>")
    $("#dayFive").append("<h5>  Humidity " + data.daily[4].humidity + "</h5>")


    // Defines previously searched cities button
    localStorage.setItem(cityName, JSON.stringify(cityObj));
    var cityButton = $("<div>").addClass("resultButton").text(cityName);
    cityButton.on("click", function () {
        var cityData = JSON.parse(localStorage.getItem($(this).text()))


     // Displays weather from local storage, after hitting previously searched cities button
        $("#localForecast").empty()
        $("#localForecast").append("<h1>" + cityData.name + "</h1>")
        $("#localForecast").append("<h3> Temp: " + cityData.temp + "</h3>")
        $("#localForecast").append("<h3> Wind: " + cityData.wind + "</h3>")
        $("#localForecast").append("<h3> Humidity: " + cityData.humidity + "</h3>")
        $("#localForecast").append("<h3> UV Index: " + cityData.uvi + "</h3>")

        $("#dayOne").empty()
        $("#dayOne").text(dayOne)
        $("#dayOne").append("<img src='http://openweathermap.org/img/wn/" + data.daily[0].weather[0].icon + ".png'>")
        $("#dayOne").append("<h5>  Temp: " + data.daily[0].temp.eve + "</h5>")
        $("#dayOne").append("<h5>  Wind " + data.daily[0].wind_speed + "</h5>")
        $("#dayOne").append("<h5>  Humidity " + data.daily[0].humidity + "</h5>")

        $("#dayTwo").empty()
        $("#dayTwo").text(dayTwo)
        $("#dayTwo").append("<img src='http://openweathermap.org/img/wn/" + data.daily[1].weather[0].icon + ".png'>")
        $("#dayTwo").append("<h5>  Temp: " + data.daily[1].temp.eve + "</h5>")
        $("#dayTwo").append("<h5>  Wind " + data.daily[1].wind_speed + "</h5>")
        $("#dayTwo").append("<h5>  Humidity " + data.daily[1].humidity + "</h5>")

        $("#dayThree").empty()
        $("#dayThree").text(dayThree)
        $("#dayThree").append("<img src='http://openweathermap.org/img/wn/" + data.daily[2].weather[0].icon + ".png'>")
        $("#dayThree").append("<h5>  Temp: " + data.daily[2].temp.eve + "</h5>")
        $("#dayThree").append("<h5>  Wind " + data.daily[2].wind_speed + "</h5>")
        $("#dayThree").append("<h5>  Humidity " + data.daily[2].humidity + "</h5>")

        $("#dayFour").empty()
        $("#dayFour").text(dayFour)
        $("#dayFour").append("<img src='http://openweathermap.org/img/wn/" + data.daily[3].weather[0].icon + ".png'>")
        $("#dayFour").append("<h5>  Temp: " + data.daily[3].temp.eve + "</h5>")
        $("#dayFour").append("<h5>  Wind " + data.daily[3].wind_speed + "</h5>")
        $("#dayFour").append("<h5>  Humidity " + data.daily[3].humidity + "</h5>")

        $("#dayFive").empty()
        $("#dayFive").text(dayFive)
        $("#dayFive").append("<img src='http://openweathermap.org/img/wn/" + data.daily[4].weather[0].icon + ".png'>")
        $("#dayFive").append("<h5>  Temp: " + data.daily[4].temp.eve + "</h5>")
        $("#dayFive").append("<h5>  Wind " + data.daily[4].wind_speed + "</h5>")
        $("#dayFive").append("<h5>  Humidity " + data.daily[4].humidity + "</h5>")

    });


    // Displays previously searched cities button
    $("#results").append(cityButton);
}

