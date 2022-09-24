const webinarPamf = document.getElementById("webinarPamf");
const pamflet = document.getElementById("pamflet");

webinarPamf.addEventListener("click", () => {
    pamflet.click();
});

pamflet.addEventListener("change", () => {
    if (pamflet.files.length > 0) {
        let src = URL.createObjectURL(pamflet.files[0]);
        webinarPamf.style.backgroundImage = `url(${src})`;
        webinarPamf.style.backgroundPosition = `center`;
        webinarPamf.style.backgroundSize = `cover`;
        webinarPamf.style.backgroundRepeat = `no-repeat`;
    }
});
