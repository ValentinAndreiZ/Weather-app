
// Inputs
var writeCity = document.getElementById('writeCity')
var displayWeatherButton = document.getElementById('displayWeather')
var displayForecastButton = document.getElementById('displayForecast')


// Areas to be changed 

var weatherInfo = document.getElementById('weatherInfo')
var iFrameMap = document.getElementById('iFrameMap')
var forecastInfo = document.getElementById('forecastInfo')


var titleCityWeather = document.getElementById('titleCityWeather')
var inconNow = document.getElementById('iconNow')
var description = document.getElementById('description')
var humidity = document.getElementById('humidity')
var pressure = document.getElementById('pressure')
var currentTemp = document.getElementById('currentTemp')
var dayMin = document.getElementById('dayMin')
var dayMax = document.getElementById('dayMax')

var titleCityForecast = document.getElementById('titleCityForecast')



function renderWeatherInfo() {

    var currentWeather = new XMLHttpRequest()

    currentWeather.open('GET', `https://api.openweathermap.org/data/2.5/weather?appid=69518b1f8f16c35f8705550dc4161056&units=metric&q=${writeCity.value}`)
    currentWeather.send()

    currentWeather.onload = function () {
        if (this.status === 200) {
            var parsedResponse = responseParser(this.response)
            console.log(parsedResponse)
            var iconCode = parsedResponse.weather[0].icon
            console.log(parsedResponse)


            // iFrameMap.setAttribute('src', `https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=${writeCity.value}(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed` )
            titleCityWeather.textContent = ` pentru ${writeCity.value}`;
            inconNow.setAttribute('src', `http://openweathermap.org/img/wn/${iconCode}.png`)
            description.textContent = parsedResponse.weather[0].description;
            humidity.textContent = parsedResponse.main.humidity;
            pressure.textContent = parsedResponse.main.pressure;
            currentTemp.textContent = parsedResponse.main.temp;
            dayMin.textContent = parsedResponse.main.temp_min;
            dayMax.textContent = parsedResponse.main.temp_max;
        }
    }

}

function renderForecast() {
    var forecast = new XMLHttpRequest()

    forecast.open("GET", `https://api.openweathermap.org/data/2.5/forecast?appid=69518b1f8f16c35f8705550dc4161056&units=metric&q=${writeCity.value}`)
    forecast.send()

    forecast.onload = function () {
        if (this.status === 200) {
            titleCityForecast.textContent = ` Prognoza pentru ${writeCity.value}`
            var parsedResponse = responseParser(this.response)
            var forecastList = parsedResponse.list



            var arrayOfDates = []

            for (var i = 0; i < forecastList.length; i++) {
                var forecastListElements = forecastList[i];
                arrayOfDates.push(getDateFromTimeStamp(forecastListElements.dt));
            }

            forecastInfo.innerHTML = '';

            var arrayOfUniqueDates = removeDuplicates(arrayOfDates)

            for (var i = 0; i < arrayOfUniqueDates.length; i++) {
                var container = document.createElement('div')
                container.setAttribute('id', `${arrayOfUniqueDates[i].day}`)
                container.setAttribute('class', `forecast__containers`)

                container.style.textAlign = 'center';
                container.style.backgroundColor = '#CED3DC';
                container.style.margin = '1px'
                container.style.fontSize = '2rem'
                container.style.padding = '1rem'
                forecastInfo.appendChild(container)
            }

            //AFISARE ZILE

            for (var i = 0; i < arrayOfUniqueDates.length; i++) {

                var currentContainer = document.getElementById(`${arrayOfUniqueDates[i].day}`)
                
                var forecastDate = document.createElement('p')
                var dates = `Ziua : ${arrayOfUniqueDates[i].day} / ${arrayOfUniqueDates[i].month} / ${arrayOfUniqueDates[i].year}`
                forecastDate.innerHTML = dates
                currentContainer.appendChild(forecastDate)
            }



            for (var i = 0; i < forecastList.length; i++) {


                var forecastListElements = forecastList[i];
                var datesFromStamps = getDateFromTimeStamp(forecastListElements.dt)

                var currentContainer = document.getElementById(`${datesFromStamps.day}`)

                var forecastIcon = document.createElement('img')
                var iconCode = forecastListElements.weather[0].icon
                forecastIcon.setAttribute('src', `http://openweathermap.org/img/wn/${iconCode}.png`)
                currentContainer.appendChild(forecastIcon)

                var forecastHour = document.createElement('p')
                var hours = `Ora : ${datesFromStamps.hour} : ${datesFromStamps.minute} `
                forecastHour.innerHTML = hours;
                currentContainer.appendChild(forecastHour)

                var forecastTemp = document.createElement('p')
                var temps = `Temperatura : ${forecastListElements.main.temp}`
                forecastTemp.innerHTML = temps;
                currentContainer.appendChild(forecastTemp)

                var forecastDescription = document.createElement('p')
                var descriptions = `Descriere : ${forecastListElements.weather[0].description}`
                forecastDescription.innerHTML = descriptions;
                currentContainer.appendChild(forecastDescription)


            }

        }

    }

}


renderForecast()

function responseParser(response) {
    var responseParsed = JSON.parse(response)
    return responseParsed
}

function getDateFromTimeStamp(timeStamp) {
    var date = new Date(timeStamp * 1000)

    var day = date.getDate(timeStamp);
    var month = date.getMonth(timeStamp) + 1;
    var year = date.getFullYear(timeStamp);
    var hour = date.getHours(timeStamp);

    var minute = date.getMinutes(timeStamp);
    if (minute < 10) {
        minute = "0" + minute
    }
    if (hour < 10) {
        hour = "0" + hour
    }

    return {
        day: day,
        month: month,
        year: year,
        hour: hour,
        minute: minute
    }
}

function removeDuplicates(array) {
    // return array.filter((value, index) => array.indexOf(value.day) === index)
    var lastFound;
    var filteredList = [];

    for (var i=0; i< array.length; i++) {
        if (array[i].day !== lastFound) {
            lastFound = array[i].day;
            filteredList.push(array[i]);
        }
    }

    return filteredList;
}