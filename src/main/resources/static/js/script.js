// Tampilkan log saat script dimuat
console.log("Script loaded...");

// Ambil tema saat ini dari localStorage (default: 'light')
let currentTheme = getTheme();
// Terapkan tema awal ke elemen <html>
changeTheme(currentTheme);

// Fungsi untuk mengatur tema dan menangani tombol ganti tema
function changeTheme() {
  // Tambahkan kelas tema (light/dark) ke elemen <html>
  document.querySelector("html").classList.add(currentTheme);

  // Ambil tombol dengan ID "theme_change_button"
  const changeThemeButton = document.querySelector("#theme_change_button");
  changeThemeButton.querySelector("span").textContent =
    currentTheme == "light" ? "Light" : "Dark";

  if (!changeThemeButton) return; // Jika tombol tidak ditemukan, hentikan

  // Tambahkan event listener untuk klik tombol
  changeThemeButton.addEventListener("click", (event) => {
    const oldTheme = currentTheme;
    console.log("change theme button clicked");

    // Ganti tema: jika dark jadi light, jika light jadi dark
    currentTheme = currentTheme === "dark" ? "light" : "dark";

    // Simpan tema baru ke localStorage
    setTheme(currentTheme);

    // Hapus tema lama dari elemen <html>
    document.querySelector("html").classList.remove(oldTheme);

    // Tambahkan tema baru
    document.querySelector("html").classList.add(currentTheme);

    // Perbarui teks pada tombol (misalnya: 'dark' atau 'light')
    changeThemeButton.querySelector("span").textContent =
      currentTheme == "light" ? "Light" : "Dark";
  });
}

// Fungsi untuk menyimpan tema ke localStorage
function setTheme(theme) {
  localStorage.setItem("theme", theme);
}

// Fungsi untuk mengambil tema dari localStorage
// Jika tidak ditemukan, gunakan 'light' sebagai default
function getTheme() {
  return localStorage.getItem("theme") || "light";
}
