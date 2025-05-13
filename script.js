






const KyIPI  = "ef412fed4e036bcf5df79fba7538ae46";
const IPAURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const inpuTBox = document.querySelector('.search input')
const inpuTBTN = document.querySelector('.search button')
 async function  ChekWeather(city){
  const response = await fetch(IPAURL + city + `&appid=${KyIPI}`)
  var  data = await response.json()
  console.log(data);
  document.querySelector('.city').innerHTML = data.name
  document.querySelector('.temp').innerHTML = data.main.temp + "°C";
  document.querySelector('.mudity').innerHTML = data.main.humidity + "%";
  document.querySelector('.wind').innerHTML = data.wind.speed + "km/h";
  const img = document.getElementById('photos')
       if (data.weather[0].main ==="Clear") {

         img.src = "photos.icon/clear.png"
        
       }
       else if (data.weather[0].main === "Clouds") {
        img.src = "photos.icon/clouds.png"
       }
       else if (data.weather[0].main === "Rain") {
        img.src = "photos.icon/rain.png"
       }
       else if (data.weather[0].main === "Drizzle") {
        img.src = "photos.icon/drizzel.png"
       }

       else if (data.weather[0] === "Mist") {
        img.src = "photos.icon/mist.png"
       }
    }
 





inpuTBTN.addEventListener('click', ()=>{

    ChekWeather(inpuTBox.value)
})