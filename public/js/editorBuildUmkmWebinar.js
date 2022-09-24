const webinarBuildUmkmPamf = document.getElementById("webinarBuildUmkmPamf");
const pamfletBuildUmkm = document.getElementById("pamfletBuildUmkm");

webinarBuildUmkmPamf.addEventListener("click", () => {
    pamfletBuildUmkm.click();
});

pamfletBuildUmkm.addEventListener("change", () => {
    if (pamfletBuildUmkm.files.length > 0) {
        let src = URL.createObjectURL(pamfletBuildUmkm.files[0]);
        webinarBuildUmkmPamf.style.backgroundImage = `url(${src})`;
        webinarBuildUmkmPamf.style.backgroundPosition = `center`;
        webinarBuildUmkmPamf.style.backgroundSize = `cover`;
        webinarBuildUmkmPamf.style.backgroundRepeat = `no-repeat`;
    }
});
