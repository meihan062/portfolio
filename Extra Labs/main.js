$(function () {
    $("button").on("click", go);
});
const maleKeywords = ["雄", "強", "賢", "志"];
const femaleKeywords = ["芸", "芬", "佩"];

let go = () => {
    // alert("hi");
    var inputText = $("#userInput").val();
    // debugger;
    // =>等同於function
    // Array method : some
    // String method : includes
    const isMale = maleKeywords.some(thisElement => inputText.includes(thisElement));
    const isFeMale = femaleKeywords.some(thisElement => inputText.includes(thisElement));
    // debugger;
    if (isMale && isFeMale) {
        $("h1").text("😎");
    } else if (isMale) {
        $("h1").text("🧑");
    } else if (isFeMale) {
        $("h1").text("👩");
    } else {
        $("h1").text("😂");
    }
};