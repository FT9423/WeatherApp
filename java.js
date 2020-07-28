getWeather(90210);

function pullWeather() {
    var zipcode = document.getElementById("zipInput");
    getWeather(zipcode.value);
}

function getWeather(zipcode) {
    let request = new XMLHttpRequest();

    request.onreadystatechange = function() {
        if (request.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
            if (request.status == 200) {
                let forecast = JSON.parse(request.responseText);
                console.log(forecast);
                let conditions = forecast.name + " is currently " + forecast.weather[0].main + ", and " + forecast.main.temp + " degrees.";
                console.log(conditions);
                document.getElementById("weather-message").innerText = conditions;

                let icon = document.getElementById("sunIcon");
                if (forecast.main.temp >= 70 && forecast.main.temp <= 85){
                    icon.className = "warm";
                }
                else if (forecast.main.temp >85 && forecast.main.temp < 95) {
                    icon.className = "hot";
                }
                else if (forecast.main.temp >= 95 ) {
                    icon.className = "burning";
                }
                else if (forecast.main.temp < 70) {
                    icon.className = "normal";
                }
                if (forecast.weather[0].main == "Clouds") { 
                    icon.className = "clouds";
                    icon.innerHTML = '<i class="fas fa-cloud" aria-hidden="true"></i>';
                    document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80')"
                }
                if (forecast.weather[0].main == "Clear") { 
                    icon.innerHTML = '<i class="fas fa-sun" aria-hidden="true"></i>';
                    document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1419833173245-f59e1b93f9ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80')"
                }
                if (forecast.weather[0].main == "Rain") { 
                    icon.className = "rain";
                    icon.innerHTML = '<i class="fas fa-tint" aria-hidden="true"></i>';
                    document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80')"
                }
                if (forecast.weather[0].main == "Snow") { 
                    icon.className = "snow";
                    icon.innerHTML = '<i class="fas fa-snowflake" aria-hidden="true"></i>';
                    document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1547754980-3df97fed72a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80')"
                }
                if (forecast.weather[0].main == "Thunderstorm") { 
                    icon.className = "thunder";
                    icon.innerHTML = '<i class="fas fa-bolt" aria-hidden="true"></i>';
                    document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1475116127127-e3ce09ee84e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80')"
                }
            }
            else {
                alert('There was an error');
            }
        }
    };

    request.open("GET", "http://api.openweathermap.org/data/2.5/weather?zip=" + zipcode + ",US&units=imperial&appid=ccef2c8c8034982955bec1e0b2a83e36", true);
    request.send();
}