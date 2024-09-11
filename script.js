document.getElementById('location-form').addEventListener('submit', getWeather);

async  function  getWeather(e)  {
  //Write you code logic here
  e.preventDefault();
  apiKey='db4cb7b54cefcb7f54e2c7f5342d5d57';
  var location = document.getElementById('location-input').value;
 
  //console.log(location)
  try {
    const result=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`);
    
    //console.log(data)
    if(result.ok)
      {
        
        const data=await result.json();
        htmlShow=`<div class="display-details" id="weather-data">
        <h1 class="wheather-city">${data.name}</h1>
              <p class="wheather-data">${data.weather[0].main}</p> 
              <p class="wheather-data">${data.main.temp} A C</p></div>`;
      
       
      }
      else{
        var htmlShow=`<div class="display-details" id="weather-data"><h1 class="wheather-city">Error: City not found</h1>
          <p class="wheather-data"></p> 
          <p class="wheather-data"></p></div>`;
  //console.log("Error fetching weather data");
      }
    
  } catch (error) {
    
  }
  document.getElementById('weather-div').innerHTML=htmlShow;
  document.getElementById('location-input').value='';
  // Error should be very specific
  // Error: Failed to fetch weather data,   should always fetch this error in case of any failure otherwise you test cases will get failed.

}