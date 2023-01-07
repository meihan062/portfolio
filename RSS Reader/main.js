$(function () {
    $("button").on("click", loadServerData);
});
function loadServerData() {
    // alert("hi");
    let rss2json = "https://api.rss2json.com/v1/api.json?rss_url=";
    $.getJSON(rss2json + "https://www.mohw.gov.tw/rss-16-1.html")
        .done(function (data) {
            // debugger;
            for (let x = 0; x < data.items.length; x++) {
                // 一整行
                // let thisRow = `<tr>
                // <td><a target='_blank' href='${data.items[x].link}'>${data.items[x].title}</a></td>
                // <td>${data.items[x].pubDate.split(" ")[0]}</td>
                // </tr>`;
                // $("#dataTable").append(thisRow);

                // 分段
                let thisRow = '<tr>';
                thisRow += `<td><a target='_blank' href='${data.items[x].link}'>${data.items[x].title}</a></td>`;
                thisRow += `<td>${data.items[x].pubDate.split(" ")[0]}</td>`;
                thisRow += '</tr>';
                $("#dataTable").append(thisRow);
            }
        })
        .fail(function () { console.log("Error"); })
        .always(function () { console.log("Always"); });
}