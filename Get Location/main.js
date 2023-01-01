//網頁載入完成後初始化動作
$(function () {
    getLocation();
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
    navigator.geolocation.getCurrentPosition(result, error, settings);
}

function result(position) {
    // debugger;
    let thisCoords = position.coords;
    console.log(`Location:${thisCoords.latitude},${thisCoords.longitude}`);
    window.location.href = `https://maps.google.com.tw?q=${thisCoords.latitude},${thisCoords.longitude}`;
}

function error(err) {
    alert(err);
}