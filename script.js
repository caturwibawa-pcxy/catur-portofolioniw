function hitungUmur() {

    // Mengambil nilai dari input
    const tahunLahir =
        document.getElementById("tahunLahir").value;

    // Mengambil tahun sekarang
    const tahunSekarang =
        new Date().getFullYear();


    // Validasi input
    if (tahunLahir === "") {

        document.getElementById("hasil").innerText =
            "Silakan masukkan tahun lahir!";

        return;
    }


    // Menghitung umur
    const umur =
        tahunSekarang - Number(tahunLahir);


    // Validasi tahun
    if (umur < 0) {

        document.getElementById("hasil").innerText =
            "Tahun lahir tidak valid!";

        return;
    }


    // Menampilkan hasil
    document.getElementById("hasil").innerText =
        "Umur Anda adalah " + umur + " tahun.";
}