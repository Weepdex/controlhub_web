document.addEventListener("DOMContentLoaded", function () {
    // Tüm sayfaları gizle
    document.querySelectorAll(".col > div").forEach(function (page) {
        page.style.display = "none";
    });

    // Varsayılan olarak ilk bağlantıyı aktif yap
    var defaultLink = document.querySelector("#menu a:first-child");
    if (defaultLink) {
        defaultLink.classList.add("active");
        var defaultTarget = defaultLink.getAttribute("href");
        document.querySelector(defaultTarget).style.display = "block";
    }

    // Menü bağlantılarına tıklama olayını dinle
    document.querySelectorAll("#menu a").forEach(function (link) {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            // Tıklanan bağlantının hedefini al
            var target = link.getAttribute("href");

            // Tüm sayfaları gizle
            document.querySelectorAll(".col > div").forEach(function (page) {
                page.style.display = "none";
            });

            // Hedef sayfayı göster
            document.querySelector(target).style.display = "block";

            // Tüm menü bağlantılarından "active" sınıfını kaldır
            document.querySelectorAll("#menu a").forEach(function (menuLink) {
                menuLink.classList.remove("active");
            });

            // Tıklanan bağlantıya "active" sınıfını ekle
            link.classList.add("active");
        });
    });

    var theme = document.body.getAttribute("data-bs-theme");
    var btn = document.getElementById('themeChanger');
    var logo = document.getElementById("logo");
    if (theme === "dark" || !theme) {
        document.body.setAttribute("data-bs-theme", "light");
        btn.style.color = "darkblue"
        logo.style.webkitFilter = "";
        logo.style.filter = "";
    } else {
        document.body.setAttribute("data-bs-theme", "dark");
        btn.style.color = "lightblue"
        logo.style.webkitFilter = "invert(1)";
        logo.style.filter = "invert(1)";
    }
});

function themeChange(){
    var theme = document.body.getAttribute("data-bs-theme");
    var btn = document.getElementById('themeChanger');
    var logo = document.getElementById("logo");
    if (theme === "dark" || !theme) {
        document.body.setAttribute("data-bs-theme", "light");
        btn.style.color = "darkblue"
        logo.style.webkitFilter = "";
        logo.style.filter = "";
    } else {
        document.body.setAttribute("data-bs-theme", "dark");
        btn.style.color = "lightblue"
        logo.style.webkitFilter = "invert(1)";
        logo.style.filter = "invert(1)";
    }
}