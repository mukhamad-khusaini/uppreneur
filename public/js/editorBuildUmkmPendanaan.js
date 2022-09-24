const pendanaanBuildUmkmPamf = document.getElementById("pendanaanBuildUmkmPamf");
const pendanaanBuildUmkmPamflet = document.getElementById("pendanaanBuildUmkmPamflet");

pendanaanBuildUmkmPamf.addEventListener("click", () => {
    pendanaanBuildUmkmPamflet.click();
});

pendanaanBuildUmkmPamflet.addEventListener("change", () => {
    if (pendanaanBuildUmkmPamflet.files.length > 0) {
        let src = URL.createObjectURL(pendanaanBuildUmkmPamflet.files[0]);
        pendanaanBuildUmkmPamf.style.backgroundImage = `url(${src})`;
        pendanaanBuildUmkmPamf.style.backgroundPosition = `center`;
        pendanaanBuildUmkmPamf.style.backgroundSize = `cover`;
        pendanaanBuildUmkmPamf.style.backgroundRepeat = `no-repeat`;
    }
});

const skBuildUmkmCont = document.querySelector(".editorBuildUmkmPendanaan form .skBuildUmkmCont");

function addSKBuildUmkmList() {
    let inp = document.createElement("input");
    inp.setAttribute("class", "d-block mt-2 mb-4 px-4 py-3 rounded-2");
    inp.setAttribute("type", "text");
    inp.setAttribute("name", "skBuildUmkm[]");
    inp.setAttribute("id", "skBuildUmkm");
    inp.setAttribute("placeholder", "Masukan list ...");
    inp.setAttribute("required", true);

    skBuildUmkmCont.appendChild(inp);
}
const alurBuildUmkmCont = document.querySelector(".editorBuildUmkmPendanaan form .alurBuildUmkmCont");

function addAlurBuildUmkmList() {
    let inp = document.createElement("input");
    inp.setAttribute("class", "d-block mt-2 mb-4 px-4 py-3 rounded-2");
    inp.setAttribute("type", "text");
    inp.setAttribute("name", "alurBuildUmkm[]");
    inp.setAttribute("id", "alurBuildUmkm");
    inp.setAttribute("placeholder", "Masukan list ...");
    inp.setAttribute("required", true);

    alurBuildUmkmCont.appendChild(inp);
}
