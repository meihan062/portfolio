let cityData = [
    { name: "", lat: "", lon: "" },
    { name: "台北", lat: 25.0856513, lon: 121.421409 },
    { name: "台中", lat: 24.1852333, lon: 120.4946381 },
    { name: "高雄", lat: 22.7000444, lon: 120.0508691 },
];

$(function () {
    for (let x = 0; x < cityData.length; x++) {
        $("#citySelect").append(`<option value='${x}'>${cityData[x].name}</option>`)
    }
    $("#citySelect").on("change", loadServerData);
    $("#test").on("click", getLocation);
});

function getLocation() {
    // 確定瀏覽器是否有location
    if (navigator.geolocation == undefined) {
        alert("Fail to get location");
        return;
    }
    let settings = {
        // 精準的定位
        enableHighAccuracy: true
    };
    navigator.geolocation.getCurrentPosition(loadServerData_2, error, settings);
}

function error(err) {
    alert(err);
}

function loadServerData() {
    $("#result").empty();
    if (this.value == 0) return;
    let weatherAPI_URL = "https://api.openweathermap.org/data/2.5/weather?";
    let weatherMapAPIKey = "77d8f8d37ad2b6af6dde4f775d8b393c";
    $.getJSON(weatherAPI_URL, {
        lat: cityData[this.value].lat,
        lon: cityData[this.value].lon,
        appid: weatherMapAPIKey,
        // 攝氏溫度
        units: 'metric',
        // 語言
        lang: 'zh_tw'
    })
        .done(function (data) {
            $("#result").append(`<p>地點: ${data.name}</p>`);
            $("#result").append(`<p>氣溫: ${data.main.temp_min} ~ ${data.main.temp_max}</p>`);
            $("#result").append(`<p><img src='https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png'>${data.weather[0].description}</p>`);
        })
        .fail(function () { console.log("Error"); })
        .always(function () { console.log("Always"); });
}


function loadServerData_2(position) {
    $("#result").empty();
    let thisCoords = position.coords;
    // if (this.value == 0) return;
    let weatherAPI_URL = "https://api.openweathermap.org/data/2.5/weather?";
    let weatherMapAPIKey = "77d8f8d37ad2b6af6dde4f775d8b393c";
    $.getJSON(weatherAPI_URL, {
        lat: thisCoords.latitude,
        lon: thisCoords.longitude,
        appid: weatherMapAPIKey,
        // 攝氏溫度
        units: 'metric',
        // 語言
        lang: 'zh_tw'
    })
        .done(function (data) {
            $("#result").append(`<p>地點: ${data.name}</p>`);
            $("#result").append(`<p>氣溫: ${data.main.temp_min} ~ ${data.main.temp_max}</p>`);
            $("#result").append(`<p><img src='https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png'>${data.weather[0].description}</p>`);
        })
        .fail(function () { console.log("Error"); })
        .always(function () { console.log("Always"); });
}


