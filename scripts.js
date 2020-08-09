

displayWeatherButton.addEventListener('click', () => {
    renderWeatherInfo(weatherBaseUrl)
})

displayForecastButton.addEventListener('click', () => {
    renderForecast(forecastBaseUrl)

})

window.addEventListener('load', () => {

    window.navigator.geolocation.getCurrentPosition(success)

})



// navigator.geolocation.getCurrentPosition(success)


celsius.addEventListener('change', (e) => {
    if (e.target.checked === true) {

      
            //Local storage solution

            // localStorage.setItem('temp','metric') 
            // var preference = localStorage.getItem('temp')
            // globalUnitPreference = preference;


            //Cookie solution

            setCookie('temp', 'metric', 2)
            globalUnitPreference = getCookie('temp')
            
           
            weatherBaseUrl = `https://api.openweathermap.org/data/2.5/weather?appid=69518b1f8f16c35f8705550dc4161056&units=${globalUnitPreference}&lang=ro&q=`;
            forecastBaseUrl = `https://api.openweathermap.org/data/2.5/forecast?appid=69518b1f8f16c35f8705550dc4161056&units=${globalUnitPreference}&lang=ro&q=`;
        


    }
    renderWeatherInfo(weatherBaseUrl)
    renderForecast(forecastBaseUrl)

})
console.log(firstTimeInteraction)

fahrenheit.addEventListener('change', (e) => {
    if (e.target.checked === true) {
      
            //Local storage solution

            // localStorage.setItem('temp','imperial') 
            // var preference = localStorage.getItem('temp')
            // globalUnitPreference = preference;

          

            //Cookie solution

            setCookie('temp', 'imperial', 2)
            globalUnitPreference = getCookie('temp')
            // writeCity.value = cityUserLivesIn;
            weatherBaseUrl = `https://api.openweathermap.org/data/2.5/weather?appid=69518b1f8f16c35f8705550dc4161056&units=${globalUnitPreference}&lang=ro&q=`;
            forecastBaseUrl = `https://api.openweathermap.org/data/2.5/forecast?appid=69518b1f8f16c35f8705550dc4161056&units=${globalUnitPreference}&lang=ro&q=`;

      
    }
    renderWeatherInfo(weatherBaseUrl)
    renderForecast(forecastBaseUrl)
})






















// celsius.addEventListener('change', (e) => {
//     if (e.target.checked === true) {

//         if (firstTimeInteraction) {
//             //Local storage solution

//             // localStorage.setItem('temp','metric') 
//             // var preference = localStorage.getItem('temp')
//             // globalUnitPreference = preference;


//             //Cookie solution

//             setCookie('temp', 'metric', 2)
//             globalUnitPreference = getCookie('temp')
//             // console.log(getCookie('temp'))
//             // console.log(globalUnitPreference)
//             // writeCity.value = cityUserLivesIn;
//             weatherBaseUrl = `https://api.openweathermap.org/data/2.5/weather?appid=69518b1f8f16c35f8705550dc4161056&units=${globalUnitPreference}&lang=ro&q=`;
//             forecastBaseUrl = `https://api.openweathermap.org/data/2.5/forecast?appid=69518b1f8f16c35f8705550dc4161056&units=${globalUnitPreference}&lang=ro&q=`;
//         } else {

//             setCookie('temp', 'metric', 2)
//             globalUnitPreference = getCookie('temp')
//             weatherBaseUrl = `https://api.openweathermap.org/data/2.5/weather?appid=69518b1f8f16c35f8705550dc4161056&units=${globalUnitPreference}&lang=ro&q=`;
//             forecastBaseUrl = `https://api.openweathermap.org/data/2.5/forecast?appid=69518b1f8f16c35f8705550dc4161056&units=${globalUnitPreference}&lang=ro&q=`;
//         }



//     }
//     renderWeatherInfo(weatherBaseUrl)
//     renderForecast(forecastBaseUrl)

// })
// console.log(firstTimeInteraction)

// fahrenheit.addEventListener('change', (e) => {
//     if (e.target.checked === true) {
//         if (firstTimeInteraction) {
//             //Local storage solution

//             // localStorage.setItem('temp','imperial') 
//             // var preference = localStorage.getItem('temp')
//             // globalUnitPreference = preference;

          

//             //Cookie solution

//             setCookie('temp', 'imperial', 2)
//             globalUnitPreference = getCookie('temp')
//             writeCity.value = cityUserLivesIn;
//             weatherBaseUrl = `https://api.openweathermap.org/data/2.5/weather?appid=69518b1f8f16c35f8705550dc4161056&units=${globalUnitPreference}&lang=ro&q=`;
//             forecastBaseUrl = `https://api.openweathermap.org/data/2.5/forecast?appid=69518b1f8f16c35f8705550dc4161056&units=${globalUnitPreference}&lang=ro&q=`;

//         } else {
//             setCookie('temp', 'imperial', 2)
//             globalUnitPreference = getCookie('temp')
//             weatherBaseUrl = `https://api.openweathermap.org/data/2.5/weather?appid=69518b1f8f16c35f8705550dc4161056&units=${globalUnitPreference}&lang=ro&q=`;
//             forecastBaseUrl = `https://api.openweathermap.org/data/2.5/forecast?appid=69518b1f8f16c35f8705550dc4161056&units=${globalUnitPreference}&lang=ro&q=`;
//         }

//     }
//     renderWeatherInfo(weatherBaseUrl)
//     renderForecast(forecastBaseUrl)
// })













