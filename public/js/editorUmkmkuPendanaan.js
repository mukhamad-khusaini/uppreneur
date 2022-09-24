const pendanaanUmkmkuPamf = document.getElementById("pendanaanUmkmkuPamf");
const pendanaanUmkmkuPamflet = document.getElementById("pendanaanUmkmkuPamflet");

pendanaanUmkmkuPamf.addEventListener("click", () => {
    pendanaanUmkmkuPamflet.click();
});

pendanaanUmkmkuPamflet.addEventListener("change", () => {
    if (pendanaanUmkmkuPamflet.files.length > 0) {
        let src = URL.createObjectURL(pendanaanUmkmkuPamflet.files[0]);
        pendanaanUmkmkuPamf.style.backgroundImage = `url(${src})`;
        pendanaanUmkmkuPamf.style.backgroundPosition = `center`;
        pendanaanUmkmkuPamf.style.backgroundSize = `cover`;
        pendanaanUmkmkuPamf.style.backgroundRepeat = `no-repeat`;
    }
});

const skCont = document.querySelector(".editorUmkmkuPendanaan form .skCont");

function addSKList() {
    let inp = document.createElement("input");
    inp.setAttribute("class", "d-block mt-2 mb-4 px-4 py-3 rounded-2");
    inp.setAttribute("type", "text");
    inp.setAttribute("name", "sk[]");
    inp.setAttribute("id", "sk");
    inp.setAttribute("placeholder", "Masukan list ...");
    inp.setAttribute("required", true);

    skCont.appendChild(inp);
}
const alurCont = document.querySelector(".editorUmkmkuPendanaan form .alurCont");

function addAlurList() {
    let inp = document.createElement("input");
    inp.setAttribute("class", "d-block mt-2 mb-4 px-4 py-3 rounded-2");
    inp.setAttribute("type", "text");
    inp.setAttribute("name", "alur[]");
    inp.setAttribute("id", "alur");
    inp.setAttribute("placeholder", "Masukan list ...");
    inp.setAttribute("required", true);

    alurCont.appendChild(inp);
}
