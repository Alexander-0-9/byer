const apiKey = "69b8d5842a102fb6a89090e604f29857";

function getWeather() {
    const city = document.getElementById("cityInput").value;

    if (!city) {
        alert("Skriv inn en by!");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=no`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("Fant ikke byen eller feil API-key");
            }
            return response.json();
        })
        .then(data => {
            document.getElementById("city").innerText =
                data.name + ", " + data.sys.country;

            document.getElementById("temp").innerText =
                Math.round(data.main.temp) + "°C";

            document.getElementById("description").innerText =
                data.weather[0].description;

            document.getElementById("minmax").innerText =
                Math.round(data.main.temp_min) + "°C / " +
                Math.round(data.main.temp_max) + "°C";

                 
            document.getElementById("cityInput").value = "";
        })
        .catch(error => {
            alert(error.message);
            console.log(error);
        });
}
