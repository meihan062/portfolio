let ctx, thisImage;


//網頁載入完成後初始化動作
$(function () {
    $("[type = 'date']").on("change", showDate);
    $("[type = 'color']").on("change", changeBg);
    ctx = $("#myCanvas")[0].getContext("2d");
});

function showDate() {
    console.log(this.value);
    var thisDate = this.value;
    // 找到所有(g) - ，替換成""
    thisDate = thisDate.replace(/-/g, "");
    // debugger;
    thisImage = new Image();
    thisImage.src = "flipClockNumbers.png";
    thisImage.onload = function () {
        for (var x = 0; x < thisDate.length; x++) {
            // ctx.drawImage(圖片, 圖片開始裁切的x軸(左上角開始)為字串長度*80, 圖片開始裁切的y軸(左上角開始)為0, 圖片放置在x軸為90的地方, 圖片放置在y軸為130的地方, 圖片剪下寬度為60*x, 圖片剪下的高度為0, 圖片縮放寬度為60, 圖片縮放高度為100);
            ctx.drawImage(thisImage, thisDate[x] * 80, 0, 90, 130, 60 * x, 0, 60, 100);
        }
    }
}

function changeBg() {
    var thisColor = this.value;
    // debugger;
    $('body').css("background-color", this.value);
}
