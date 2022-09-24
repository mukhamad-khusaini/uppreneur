// function textAdd(param) {
//     let splited = param.split("|");
//     let obj = {
//         bidang: splited[1],
//         moduleId: splited[2],
//         whatDone: `text${splited[0]}`,
//     };

fetch("/input/done/keuangan", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(obj),
});

// let done = document.querySelectorAll(".umkmkuModule .done");

// done.forEach((e) => {
//     e.addEventListener("click", () => {
//         e.style.backgroundColor = "var(--green-dark)";
//         e.style.color = "var(--yellow-light)";
//         e.innerText = "Selesai";
//     });
// });
