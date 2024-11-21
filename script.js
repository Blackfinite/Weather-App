const apikey = "46a52b72ed6eecb8505256fb72862899"
const weatherDateElement = document.querySelector(".weather-data")
const cityName = document.querySelector("#City-Name")
const formElement = document.querySelector("form")
const iconImg = document.querySelector(".icon")

formElement.addEventListener("submit",(e)=>{
	e.preventDefault()
	// console.log(cityName.value);
	const cityValue = cityName.value;

	getWeatherData(cityValue)
})

async function  getWeatherData(cityValue){
	try{
		const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=46a52b72ed6eecb8505256fb72862899&units=metric`)

		if(!response.ok){
			throw new Error("Network reponse is not okk");
			
		}
		const data =  await response.json()
		console.log(data);
		const temperature = Math.round(data.main.temp)
		const description = data.weather[0].description
		const icon = data.weather[0].icon

		const details1 = [
			`Feels Like :${Math.round(data.main.feels_like)}C`,
			`Humidity :${data.main.humidity}%`,
			`windSpeed:${data.wind.speed} m/s`
		]


		weatherDateElement.querySelector(".temperature").textContent = `${temperature}C`
		weatherDateElement.querySelector(".description").textContent = `${description}`
		iconImg.innerHTML = `<img src="https://openweathermap.org/img/wn/${icon}.png" alt="">`
		weatherDateElement.querySelector(".details").innerHTML = details1.map((detail)=>{
			return `<div>${detail}</div>`
		}).join("")
		
}catch(err){
	// console.log();
	weatherDateElement.querySelector(".temperature").textContent = ""
	iconImg.innerHTML = ""
	weatherDateElement.querySelector(".description").textContent ="AN Error Occur"
	
	

}
}

	
	

