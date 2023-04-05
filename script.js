"use strict";

const place = document.querySelector(".city");
const temperature = document.querySelector(".head-temp span");
const maxTemp = document.querySelector(".max-temp span");
const minTemp = document.querySelector(".min-temp span");
const weatherStatus = document.querySelector(".cur-stats");
const wind = document.querySelector(".wind span");
const humidity = document.querySelector(".humidity span");
const image = document.querySelector(".image");
const input = document.querySelector(".search");
const miniTemp = document.querySelectorAll(".temperature-mini span");
const days = document.querySelectorAll(".day");
const miniImages = document.querySelectorAll(".mini-images");
const searchButton = document.querySelector(".search-button");
const weatherContainer = document.querySelector(".weather-container");

//fetching API for your current location
window.addEventListener("load", () => {
  let lon;
  let lat;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      lon = position.coords.longitude;
      lat = position.coords.latitude;

      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=8f73c3b00cc3502dc0dc850d6fe9c2f4&units=metric`;
      const apiUrl1 = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=c4b61c52ac31ad7229abd3a0ebea1ce7&units=metric`;

      fetch(apiUrl)
        .then((data) => {
          return data.json();
        })
        .then((data) => {
          console.log(data);
          const { temp, temp_max, temp_min } = data.main;
          const { description, id } = data.weather[0];
          const { speed } = data.wind;
          const { name } = data;

          //changing images
          if (id <= 232) {
            image.src = "images/rain.png";
          } else if (id >= 300 && id <= 321) {
            image.src = "images/drizzle.png";
          } else if (id >= 500 && id <= 531) {
            image.src = "images/rain.png";
          } else if (id >= 600 && id <= 622) {
            image.src = "images/snow.png";
          } else if (id >= 701 && id <= 711) {
            image.src = "images/mist.png";
          } else if (id === 800) {
            image.src = "images/clear.png";
          } else if (id >= 801 && id <= 804) {
            image.src = "images/clouds.png";
          }

          //changing value of HTML elements
          place.textContent = name;
          humidity.textContent = data.main.humidity;
          temperature.textContent = temp;
          maxTemp.textContent = temp_max;
          minTemp.textContent = temp_min;
          weatherStatus.textContent = description;
          wind.textContent = speed;
        });

      fetch(apiUrl1)
        .then((data1) => {
          return data1.json();
        })
        .then((data1) => {
          console.log(data1);

          for (let i = 1; i < 6; i++) {
            miniTemp[i - 1].textContent = data1.list[i].main.temp.toFixed(1);
            days[i - 1].textContent = data1.list[i].dt_txt.substring(11, 16);

            const { id } = data1.list[i].weather[0];

            if (id <= 232) {
              miniImages[i - 1].src = "images/rain-mini.png";
            } else if (id >= 300 && id <= 321) {
              miniImages[i - 1].src = "images/drizzle-mini.png";
            } else if (id >= 500 && id <= 531) {
              miniImages[i - 1].src = "images/rain-mini.png";
            } else if (id >= 600 && id <= 622) {
              miniImages[i - 1].src = "images/snow-mini.png";
            } else if (id >= 701 && id <= 711) {
              miniImages[i - 1].src = "images/mist-mini.png";
            } else if (id === 800) {
              miniImages[i - 1].src = "images/clear-mini.png";
            } else if (id >= 801 && id <= 804) {
              miniImages[i - 1].src = "images/clouds-mini.png";
            }
          }
        });
    });
  } else {
    alert("Please enable location at the start");
  }
});

//fetching API for search city

function renderCity(city) {
  const curAPI = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c4b61c52ac31ad7229abd3a0ebea1ce7&units=metric`;
  const newAPI = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=c4b61c52ac31ad7229abd3a0ebea1ce7&units=metric`;

  fetch(curAPI)
    .then((data2) => {
      return data2.json();
    })
    .then((data2) => {
      const { temp, temp_max, temp_min } = data2.main;
      const { description, id } = data2.weather[0];
      const { speed } = data2.wind;
      const { name } = data2;
      console.log(data2);

      //changing images
      if (id <= 232) {
        image.src = "images/rain.png";
      } else if (id >= 300 && id <= 321) {
        image.src = "images/drizzle.png";
      } else if (id >= 500 && id <= 531) {
        image.src = "images/rain.png";
      } else if (id >= 600 && id <= 622) {
        image.src = "images/snow.png";
      } else if (id >= 701 && id <= 711) {
        image.src = "images/mist.png";
      } else if (id === 800) {
        image.src = "images/clear.png";
      } else if (id >= 801 && id <= 804) {
        image.src = "images/clouds.png";
      }

      //changing value of HTML elements
      place.textContent = name;
      humidity.textContent = data2.main.humidity;
      temperature.textContent = temp;
      maxTemp.textContent = temp_max;
      minTemp.textContent = temp_min;
      weatherStatus.textContent = description;
      wind.textContent = speed;
    });
  fetch(newAPI)
    .then((data3) => {
      return data3.json();
    })
    .then((data3) => {
      console.log(data3);

      for (let i = 1; i < 6; i++) {
        miniTemp[i - 1].textContent = data3.list[i].main.temp.toFixed(1);
        days[i - 1].textContent = data3.list[i].dt_txt.substring(11, 16);

        const { id } = data3.list[i].weather[0];

        if (id <= 232) {
          miniImages[i - 1].src = "images/rain-mini.png";
        } else if (id >= 300 && id <= 321) {
          miniImages[i - 1].src = "images/drizzle-mini.png";
        } else if (id >= 500 && id <= 531) {
          miniImages[i - 1].src = "images/rain-mini.png";
        } else if (id >= 600 && id <= 622) {
          miniImages[i - 1].src = "images/snow-mini.png";
        } else if (id >= 701 && id <= 711) {
          miniImages[i - 1].src = "images/mist-mini.png";
        } else if (id === 800) {
          miniImages[i - 1].src = "images/clear-mini.png";
        } else if (id >= 801 && id <= 804) {
          miniImages[i - 1].src = "images/clouds-mini.png";
        }
      }
    });
}

searchButton.addEventListener("click", () => {
  renderCity(input.value);
});

input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    renderCity(input.value);
  }
});
