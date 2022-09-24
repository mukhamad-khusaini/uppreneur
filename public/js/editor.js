if (location.pathname == "/editor/umkmku/wawasan") {
    const editor = new EditorJS({
        /**
         * Create a holder for the Editor and pass its ID
         */
        holder: "handleEditor",

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

    const imgCont = document.getElementById("imgCont");
    const coverImg = document.getElementById("coverImg");

    imgCont.addEventListener("click", () => {
        coverImg.click();
    });

    coverImg.addEventListener("change", () => {
        if (coverImg.files.length > 0) {
            let src = URL.createObjectURL(coverImg.files[0]);
            imgCont.style.backgroundImage = `url(${src})`;
            imgCont.style.backgroundPosition = `center`;
            imgCont.style.backgroundSize = `cover`;
            imgCont.style.backgroundRepeat = `no-repeat`;
        }
    });

    const formArc = document.getElementById("formArc");
    const editorSubmit = document.getElementById("editorSubmit");
    const title = document.getElementById("title");

    editorSubmit.addEventListener("click", async () => {
        if (title.value === "") {
            alert("Judul harus ditulis!");
        } else if (coverImg.files.length == 0) {
            alert("Gambar cover harus dimasukan!");
        } else {
            let editorData = await editor.save();
            if (editorData.blocks.length == 0) {
                alert("Anda harus menuliskan sesuatu!");
            } else {
                let dat = new FormData(formArc);
                dat.append("articleData", JSON.stringify(editorData));

                let xhr = new XMLHttpRequest();

                xhr.open("POST", "/input", true);
                xhr.send(dat);

                xhr.onload = () => {
                    if (xhr.status == 200) {
                        let data = JSON.parse(xhr.responseText);
                        if (data.insertId) {
                            document.querySelector(".editor form #success").style.display = "block";
                            location.href = "/";
                            return;
                        }
                        document.querySelector(".editor form #failed").style.display = "block";
                    }
                };
            }
        }
    });
}
