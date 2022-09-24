if (location.pathname == "/editor/buildUmkm/wawasan") {
    const editorBuildUmkm = new EditorJS({
        /**
         * Create a holder for the Editor and pass its ID
         */
        holder: "handleBuild",

        /**
         * Available Tools list.
         * Pass Tool's class or Settings object for each Tool you want to use
         */
        tools: {
            header: {
                class: Header,
                config: {
                    placeholder: "Enter a header",
                    levels: [2, 3, 4],
                    defaultLevel: 2,
                },
            },
            image: {
                class: ImageTool,
                config: {
                    endpoints: {
                        byFile: `${BASE_URL}/upload`, // Your backend file uploader endpoint
                    },
                },
            },
            paragraph: {
                class: Paragraph,
                config: {
                    placeholder: "Canvas here ...",
                },
            },
            delimiter: Delimiter,
        },

        /**
         * Previously saved data that should be rendered
         */
        data: {},
    });

    const imgBuildUmkmCont = document.getElementById("imgBuildUmkmCont");
    const coverBuildUmkmImg = document.getElementById("coverBuildUmkmImg");

    imgBuildUmkmCont.addEventListener("click", () => {
        coverBuildUmkmImg.click();
    });

    coverBuildUmkmImg.addEventListener("change", () => {
        if (coverBuildUmkmImg.files.length > 0) {
            let src = URL.createObjectURL(coverBuildUmkmImg.files[0]);
            imgBuildUmkmCont.style.backgroundImage = `url(${src})`;
            imgBuildUmkmCont.style.backgroundPosition = `center`;
            imgBuildUmkmCont.style.backgroundSize = `cover`;
            imgBuildUmkmCont.style.backgroundRepeat = `no-repeat`;
        }
    });

    const formBuildUmkmArc = document.getElementById("formBuildUmkmArc");
    const editorBuildUmkmSubmit = document.getElementById("editorBuildUmkmSubmit");
    const titleBuildUmkm = document.getElementById("titleBuildUmkm");

    editorBuildUmkmSubmit.addEventListener("click", async () => {
        if (titleBuildUmkm.value === "") {
            alert("Judul harus ditulis!");
        } else if (coverBuildUmkmImg.files.length == 0) {
            alert("Gambar cover harus dimasukan!");
        } else {
            let editorData = await editorBuildUmkm.save();
            if (editorData.blocks.length == 0) {
                alert("Anda harus menuliskan sesuatu!");
            } else {
                let dat = new FormData(formBuildUmkmArc);
                dat.append("articleData", JSON.stringify(editorData));

                let xhr = new XMLHttpRequest();

                xhr.open("POST", "/input/buildUmkmWawasan", true);
                xhr.send(dat);

                xhr.onload = () => {
                    if (xhr.status == 200) {
                        let data = JSON.parse(xhr.responseText);
                        if (data.insertId) {
                            document.querySelector(".editorBuildUmkm form #successBuildUmkm").style.display = "block";

                            return;
                        }
                        document.querySelector(".editorBuildUmkm form #failedBuildUmkm").style.display = "block";
                    }
                };
            }
        }
    });
}
