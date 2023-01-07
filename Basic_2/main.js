// 取多個元素
// let thisButton = document.getElementsByTagName("button")[0];
// 取第一個元素
let thisButton_1 = document.getElementById("2022/12/22");
let thisButton_2 = document.getElementById("2022/12/23");
let thisButton_3 = document.getElementById("2022/12/24");
let thisButton_4 = document.getElementById("2022/12/25");
let showData = document.getElementById("showData");
// thisButton.addEventListener("click", loadServerData);
thisButton_1.addEventListener("click", loadServerData);
thisButton_2.addEventListener("click", loadServerData);
thisButton_3.addEventListener("click", loadServerData);
thisButton_4.addEventListener("click", loadServerData);

function loadServerData() {
    console.log("Load Server Data!");
    let xmlHttpRequest;
    if (window.XMLHttpRequest) {
        xmlHttpRequest = new XMLHttpRequest();

    } else {
        alert("No XMLHttpRequest");
        return;
    }

    let thisMoment;
    if (this.id == "") {
        thisMoment = new Date();
    } else {
        thisMoment = new Date(this.id);
    }

    // let thisMoment = new Date();
    let thisYear = thisMoment.getFullYear();
    let thisMonth = thisMoment.getMonth() + 1 < 10 ? "0" + (thisMoment.getMonth() + 1) : thisMoment.getMonth() + 1;
    let thisDay = thisMoment.getDate() < 10 ? "0" + thisMoment.getDate() : thisMoment.getDate();
    let thisDate = thisYear.toString() + thisMonth.toString() + thisDay.toString();


    // 設定XMLHttpRequest
    xmlHttpRequest.open("GET", thisDate + ".txt", true);
    xmlHttpRequest.send();
    xmlHttpRequest.onreadystatechange = function () {
        if (xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 200) {
            showData.innerHTML = "<pre>" + xmlHttpRequest.responseText + "</pre>";
            // thisButton.style.visibility = "hidden";
        }
    };
}
