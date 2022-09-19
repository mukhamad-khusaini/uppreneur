const select = document.querySelector(".signUp form select");
const nama = document.getElementById("namaUsaha");
const jenis = document.getElementById("jenisUsaha");
const alamat = document.getElementById("alamatUsaha");

if (location.pathname == "/signUp") {
    select.addEventListener("change", () => {
        if (select.value === "false") {
            nama.disabled = true;
            jenis.disabled = true;
            alamat.disabled = true;
        } else {
            nama.disabled = false;
            jenis.disabled = false;
            alamat.disabled = false;
        }
    });
}

function redirectSignUp() {
    location.href = `${BASE_URL}/oauth/signUp`;
}

const formy = document.querySelector("#formy");
const formyFName = document.querySelector("#formy #firstName");
const formyLName = document.querySelector("#formy #lastName");
const formyEmail = document.querySelector("#formy #email");
const formyButton = document.querySelector("#formy button");
const formyPass = document.querySelector("#formy #pass");
const formyVerPass = document.querySelector("#formy #verPass");
const formyKota = document.querySelector("#formy #kota");
const formyUsaha = document.querySelector("#formy #punyaUsaha");
const formyNamaUsaha = document.querySelector("#formy #namaUsaha");
const formyJenisUsaha = document.querySelector("#formy #jenisUsaha");
const formyAlamatUsaha = document.querySelector("#formy #alamatUsaha");

if (location.pathname === "/signUp") {
    formyButton.addEventListener("click", () => {
        if (formyFName.value === "") {
            alert("Nama depan tidak boleh kosong!");
        } else if (formyLName.value === "") {
            alert("Nama belakang tidak boleh kosong!");
        } else if (formyEmail.value === "") {
            alert("Email tidak boleh kosong!");
        } else if (formyPass.value === "") {
            alert("Password tidak boleh kosong!");
        } else if (formyVerPass.value === "") {
            alert("Konfirmasi password tidak boleh kosong!");
        } else if (formyKota.value === "") {
            alert("Nama Kota tidak boleh kosong!");
        } else if (formyPass.value != formyVerPass.value) {
            alert("Password yang anda masukan tidak sama");
        } else if (formyPass.value.length <= 8) {
            alert("Password harus lebih dari 8 karakter");
        } else if (formyUsaha.value === "true") {
            if (formyNamaUsaha.value === "") {
                alert("Mohon isi nama usaha anda sebelumnya");
            } else if (formyJenisUsaha.value === "") {
                alert("Mohon isi jenis usaha anda sebelumnya");
            } else if (formyAlamatUsaha.value === "") {
                alert("Mohon isi alamat usaha anda sebelumnya");
            }
        } else {
            formy.submit();
        }
    });
}
