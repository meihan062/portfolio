//網頁載入完成後初始化動作
$(function () {
    $('#dropbox').on("dragenter", dragenter);
    $('#dropbox').on("dragleave", dragleave);
    $('#dropbox').on("dragover", dragover);
    $('#dropbox').on("drop", drop);
});


function dragenter() {
    $("#dropbox").css("background-color", "red");
    $("#dropbox").text("Drop it !");
}

function dragleave() {
    $("#dropbox").css("background-color", "blue");
    $("#dropbox").text("Come here.");
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
    convert(files[0]);
}

function convert(file) {
    // debugger;
    if (!file.type.match(/text.*/)) {
        alert("請拖放文字檔");
        dragleave();
        return false;
    }
    let reader = new FileReader();
    reader.onloadend = function () {
        let s = reader.result;
        // 取代現在的內容
        $('#preview').text(s);
        // 內容不會被取代
        // $('#preview').append(s);
    }
    reader.readAsText(file);
}