let moduleBuildUmkmCont = document.querySelector(".editorBuildUmkmPelatihan .moduleBuildUmkmCont");

if (location.pathname("/buildUmkm/pelatihan")) {
    console.log("yes");
}
function addBuildUmkmVideo() {
    let mod = document.createElement("div");
    mod.setAttribute("class", "mod shadow rounded-4 p-4 mb-4 d-flex flex-column align-items-start");

    let h2 = document.createElement("h2");
    h2.innerText = "Video";

    let inpLink = document.createElement("input");
    inpLink.setAttribute("class", "d-block p-2 py-3 rounded-2 mb-3");
    inpLink.setAttribute("type", "text");
    inpLink.setAttribute("name", "videoLink[]");
    inpLink.setAttribute("id", "videoLink");
    inpLink.setAttribute("placeholder", "ID video ...");
    inpLink.setAttribute("required", true);

    let inpTitle = document.createElement("input");
    inpTitle.setAttribute("class", "d-block p-2 py-3 rounded-2 mb-3");
    inpTitle.setAttribute("type", "text");
    inpTitle.setAttribute("name", "videoTitle[]");
    inpTitle.setAttribute("id", "videoTitle");
    inpTitle.setAttribute("placeholder", "Judul materi ...");
    inpTitle.setAttribute("required", true);

    let textArea = document.createElement("textarea");
    textArea.setAttribute("class", "d-block  rounded-2");
    textArea.setAttribute("name", "videoDesc[]");
    textArea.setAttribute("id", "videoDesc");
    textArea.setAttribute("placeholder", "Deskripsi materi ...");
    textArea.setAttribute("required", true);

    let hide = document.createElement("input");
    hide.setAttribute("type", "hidden");
    hide.setAttribute("name", "scheme[]");
    hide.setAttribute("value", "video");

    mod.appendChild(h2);
    mod.appendChild(inpLink);
    mod.appendChild(inpTitle);
    mod.appendChild(textArea);
    mod.appendChild(hide);

    moduleBuildUmkmCont.appendChild(mod);
}

function addBuildUmkmText() {
    let mod = document.createElement("div");
    mod.setAttribute("class", "mod shadow rounded-4 p-4 mb-4 d-flex flex-column align-items-start");

    let h2 = document.createElement("h2");
    h2.innerText = "Text";

    let inpTitle = document.createElement("input");
    inpTitle.setAttribute("class", "d-block p-2 py-3 rounded-2 mb-3");
    inpTitle.setAttribute("type", "text");
    inpTitle.setAttribute("name", "textTitle[]");
    inpTitle.setAttribute("id", "textTitle");
    inpTitle.setAttribute("placeholder", "Judul materi ...");
    inpTitle.setAttribute("required", true);

    let textArea = document.createElement("textarea");
    textArea.setAttribute("class", "d-block  rounded-2");
    textArea.setAttribute("name", "textDesc[]");
    textArea.setAttribute("id", "textDesc");
    textArea.setAttribute("placeholder", "Materi ...");
    textArea.setAttribute("required", true);

    let hide = document.createElement("input");
    hide.setAttribute("type", "hidden");
    hide.setAttribute("name", "scheme[]");
    hide.setAttribute("value", "text");

    mod.appendChild(h2);
    mod.appendChild(inpTitle);
    mod.appendChild(textArea);
    mod.appendChild(hide);

    moduleBuildUmkmCont.appendChild(mod);
}

function addBuildUmkmLink() {
    let mod = document.createElement("div");
    mod.setAttribute("class", "mod shadow rounded-4 p-4 mb-4 d-flex flex-column align-items-start");

    let h2 = document.createElement("h2");
    h2.innerText = "Link";

    let inpTitle = document.createElement("input");
    inpTitle.setAttribute("class", "d-block p-2 py-3 rounded-2 mb-3");
    inpTitle.setAttribute("type", "text");
    inpTitle.setAttribute("name", "linkTitle[]");
    inpTitle.setAttribute("id", "linkTitle");
    inpTitle.setAttribute("placeholder", "Judul materi ...");
    inpTitle.setAttribute("required", true);

    let textArea = document.createElement("textarea");
    textArea.setAttribute("class", "d-block  rounded-2");
    textArea.setAttribute("name", "linkDesc[]");
    textArea.setAttribute("id", "linkDesc");
    textArea.setAttribute("placeholder", "Deskripsi Materi ...");
    textArea.setAttribute("required", true);

    // let btn = document.createElement("button");
    // btn.setAttribute("class", "btn btn-outline-success addLink mb-3");
    // btn.setAttribute("type", "button");
    // btn.setAttribute("id", "linkListCount");
    // btn.innerText = "Tambah Link";

    let linkList = document.createElement("input");
    linkList.setAttribute("class", "d-block p-2 py-3 rounded-2 mb-3");
    linkList.setAttribute("type", "text");
    linkList.setAttribute("name", "linkList[]");
    linkList.setAttribute("id", "linkList");
    linkList.setAttribute("placeholder", "Masukan link ...");
    linkList.setAttribute("required", true);

    // let hideCount = document.createElement("input");
    // hideCount.setAttribute("type", "hidden");
    // hideCount.setAttribute("name", "linkListCount[]");

    let hide = document.createElement("input");
    hide.setAttribute("type", "hidden");
    hide.setAttribute("name", "scheme[]");
    hide.setAttribute("value", "link");

    mod.appendChild(h2);
    mod.appendChild(inpTitle);
    mod.appendChild(textArea);
    // mod.appendChild(btn);
    mod.appendChild(linkList);
    mod.appendChild(hide);
    // mod.appendChild(hideCount);

    moduleBuildUmkmCont.appendChild(mod);
}

if (window.location.pathname == "/editor/buildUmkm/pelatihan") {
    window.addEventListener("click", (e) => {
        if (e.target.classList.contains("addLink") && confirm("Ingin menambah link?")) {
            let parent = e.path[1];
            let ele = document.createElement("input");
            ele.setAttribute("class", "d-block p-2 py-3 rounded-2 mb-3");
            ele.setAttribute("type", "text");
            ele.setAttribute("name", "linkList[]");
            ele.setAttribute("id", "linkList");
            ele.setAttribute("placeholder", "Masukan link ...");
            ele.setAttribute("required", true);
            parent.appendChild(ele);
        }
    });

    // window.addEventListener("click", (e) => {
    //     if (e.target.classList.contains("linkListCount")) {
    //         let parent = e.path[1];
    //         let ele = document.createElement("input");
    //         ele.setAttribute("class", "d-block p-2 py-3 rounded-2 mb-3");
    //         ele.setAttribute("type", "text");
    //         ele.setAttribute("name", "linkList[]");
    //         ele.setAttribute("id", "linkList");
    //         ele.setAttribute("placeholder", "Masukan link ...");
    //         ele.setAttribute("required", true);
    //         parent.appendChild(ele);
    //     }
    // });
}
