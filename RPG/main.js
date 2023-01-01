let mapArray, ctx, currentImgMain;
let imgMountain, imgMain, imgEnemy;
//mapArray : 決定地圖中每個格子的元素
//ctx : HTML5 Canvas用

// 將600x600分為每格200x200
const gridLength = 200;


function loadImages(sources, callback) {
    var images = {};
    var loadedImages = 0;
    var numImages = 0;
    // get num of sources
    for (var src in sources) {
        numImages++;
    }
    for (var src in sources) {
        images[src] = new Image();
        images[src].onload = function () {
            if (++loadedImages >= numImages) {
                callback(images);
            }
        };
        images[src].src = sources[src];
    }
}






//網頁載入完成後初始化動作
$(function () {
    // 0可以走，1有障礙，2終點，3敵人
    mapArray = [
        [0, 1, 1],
        [0, 0, 0],
        [3, 1, 2]
    ];
    ctx = $("#myCanvas")[0].getContext("2d");

    // 主角出現的位置
    imgMain = new Image();
    imgMain.src = "images/spriteSheet.png";
    currentImgMain = {
        "x": 0,
        "y": 0
    };

    // 圖片載入完成後再顯示圖片
    imgMain.onload = function () {
        // ctx.drawImage(img,sx,sy,swidth(往右x增加),sheight(往下y增加),x,y,width(縮放),height(縮放))
        ctx.drawImage(imgMain, 0, 0, 80, 130, currentImgMain.x, currentImgMain.y, gridLength, gridLength);
    };



    var sources = {
        mountain: 'images/material.png',
        enemy: 'images/Enemy.png'
    };

    loadImages(sources, function (images) {
        // 二維陣列的列
        for (var x in mapArray) {
            // 二維陣列的行
            for (var y in mapArray[x]) {
                if (mapArray[x][y] == 1) {
                    ctx.drawImage(images.mountain, 32, 65, 32, 32, y * gridLength, x * gridLength, gridLength, gridLength);
                } else if (mapArray[x][y] == 3) {
                    ctx.drawImage(images.enemy, 7, 40, 104, 135, y * gridLength, x * gridLength, gridLength, gridLength);
                }
            }
        }
    });


    // imgMountain = new Image();
    // imgMountain.src = "images/material.png";
    // imgEnemy = new Image();
    // imgEnemy.src = "images/Enemy.png";

    // imgMountain.onload = function () {
    //     imgEnemy.onload = function() {
    //         for(var x in mapArray){
    //             for(var y in mapArray[x]){
    //                 if(mapArray[x][y] == 1){
    //                     ctx.drawImage(imgMountain,32,65,32,32,y*gridLength,x*gridLength,gridLength,gridLength);
    //                 } else if(mapArray[x][y] == 3) {
    //                     ctx.drawImage(imgEnemy,7,40,104,135,y*gridLength,x*gridLength,gridLength,gridLength);
    //                 }
    //             }
    //         }
    //     }
    // }
});


// 按下方向鍵，主角移動的方向
$(document).on("keydown", function (event) {
    let targetImg, targetBlock, cutImagePositionX;
    targetImg = {
        "x": -1,
        "y": -1
    };
    targetBlock = {
        "x": -1,
        "y": -1
    };
    event.preventDefault();
    console.log(event.code);
    switch (event.code) {
        case "ArrowLeft":
            targetImg.x = currentImgMain.x - gridLength;
            targetImg.y = currentImgMain.y;
            // 朝左
            cutImagePositionX = 175;
            break;
        case "ArrowUp":
            targetImg.x = currentImgMain.x;
            targetImg.y = currentImgMain.y - gridLength;
            // 朝上
            cutImagePositionX = 355;
            break;
        case "ArrowRight":
            targetImg.x = currentImgMain.x + gridLength;
            targetImg.y = currentImgMain.y;
            // 朝右
            cutImagePositionX = 540;
            break;
        case "ArrowDown":
            targetImg.x = currentImgMain.x;
            targetImg.y = currentImgMain.y + gridLength;
            // 朝下
            cutImagePositionX = 0;
            break;
        default:
            return;
    }


    // 判斷是否超出畫框範圍
    if (targetImg.x <= 400 && targetImg.x >= 0 && targetImg.y <= 400 && targetImg.y >= 0) {
        targetBlock.x = targetImg.y / gridLength;
        targetBlock.y = targetImg.x / gridLength;
    } else {
        targetBlock.x = -1;
        targetBlock.y = -1;
    }

    // 清除主角原本所在的位置
    ctx.clearRect(currentImgMain.x, currentImgMain.y, gridLength, gridLength);

    if (targetBlock.x != -1 && targetBlock.y != -1) {
        switch (mapArray[targetBlock.x][targetBlock.y]) {
            case 0:
                // 可移動
                $("#talkBox").text("");
                currentImgMain.x = targetImg.x;
                currentImgMain.y = targetImg.y;
                break;
            case 1:
                // 有障礙物
                $("#talkBox").text("有山");
                break;
            case 2:
                // 抵達終點
                $("#talkBox").text("抵達終點");
                currentImgMain.x = targetImg.x;
                currentImgMain.y = targetImg.y;
                break;
            case 3:
                // 遇到敵人
                $("#talkBox").text("哈囉");
                break;
        }
    } else {
        $("#talkBox").text("邊界");
    }

    ctx.drawImage(imgMain, cutImagePositionX, 0, 80, 130, currentImgMain.x, currentImgMain.y, gridLength, gridLength);
});