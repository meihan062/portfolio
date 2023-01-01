const legalVideoFormats = [
    "mp4", "flv", "avi", "mov", "mkv", "mpeg", "3gp", "wmv", "swf"
];
window.URL || window.webkitURL;

//網頁載入完成後初始化動作
$(function () {
    $("#inputFile").on("change", function (e) {
        $("table").empty();
        $("table").append("<tr><th>檢核項目</th><th>需求規格</th><th>檢查結果</th><th>是否通過</th></tr>");
        // debugger;
        processFile(e.target.files);
    });
    $("#dropbox").on("dragenter", dragenter);
    $("#dropbox").on("dragleave", dragleave);
    $("#dropbox").on("dragover", dragover);
    $("#dropbox").on("drop", drop);
});


function dragenter() {
    $("#dropbox").css("border", "5px solid blue");
    $("#dropbox").text("Drop it !");
}

function dragleave() {
    $("#dropbox").css("border", "5px dashed black");
    $("#dropbox").text("Choose file by the button below or Drop here.");
}

function dragover(e) {
    e.preventDefault();
}

function drop(e) {
    e.preventDefault();
    // debugger;
    let files = e.originalEvent.dataTransfer.files;
    if (files.length == 0) {
        return false;
    }
    // convert(files[0]);
    $("table").empty();
    $("table").append("<tr><th>檢核項目</th><th>需求規格</th><th>檢查結果</th><th>是否通過</th></tr>");
    // debugger;
    processFile(files);
    dragleave();
}

// function convert(file) {
//     // debugger;
//     if (!file.type.match(/text.*/)) {
//         alert("請拖放文字檔");
//         dragleave();
//         return false;
//     }
//     let reader = new FileReader();
//     reader.onloadend = function () {
//         let s = reader.result;
//         // 取代現在的內容
//         $('#preview').text(s);
//         // 內容不會被取代
//         // $('#preview').append(s);
//     }
//     reader.readAsText(file);
// }

function processFile(files) {
    let thisVideo = files[0];
    $("table").append($(`<tr><td colsapn="4">影片名稱 : ${thisVideo.name}</td></tr>`).css("background-color", "yellow").css("background-color", "yellow"));
    $("table").append($(`<tr><td>影片長度</td><td>需介於60~90秒</td><td id="thisDuration"></td><td id="thisDurationResult"></td></tr>`));
    $("table").append($(`<tr><td colsapn="4">影片格式</td><td>mp4、flv、avi、mov、mkv、mpeg、3gp、wmv、swf</td><td id="thisFormat>${thisVideo.type}</td><td id="thisFormatResult"></td></tr>`));
    var thisFileType = thisVideo.type.split("/");
    if (thisFileType[0] == "video") {
        if (legalVideoFormats.indexOf(thisFileType[1]) != -1) {
            $("#thisFormatResult").text("o").css("color", "green");
        } else {
            $("#thisFormatResult").text("x").css("color", "red");
        }
    } else {
        $("#thisFormatResult").text("非影片格式").css("color", "red");
    }
    $("table").append($(`<tr><td>解析度</td><td>720p(1280*720)以上</td><td id="thisREsolution"></td><td id="thisResolutionResult"></td></tr>`));

    let videoElement = document.createElement('video');
    videoElement.preload = 'metadata';
    videoElement.onloadedmetadata = function () {
        thisVideo.duration = videoElement.duration;
        thisVideo.videoWidth = videoElement.videoWidth;
        thisVideo.videoHeight = videoElement.videoHeight;
        $("#thisDuration").text(thisVideo.duration < 91);
        $("#thisResolution").text(thisVideo.videoWidth + "*" + thisVideo.videoHeight);
        if (thisVideo.duration >= 60 && thisVideo.duration < 91) {
            $("#thisDurationResult").text("o").css("color", "green");
        } else {
            $("#thisDurationResult").text("x").css("color", "red");
        }
        if (thisVideo.videoWidth >= 1280 && thisVideo.videoHeight >= 720) {
            $("#thisResolutionResult").text("o").css("color", "green");
        } else {
            $("#thisResolutionResult").text("x").css("color", "red");
        }
    }
    videoElement.src = URL.createObjectURL(thisVideo);
}
