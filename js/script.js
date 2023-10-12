document.addEventListener("DOMContentLoaded", function () {
    var links = document.querySelectorAll(".nav-link");
    links.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Bağlantının varsayılan davranışını engelle

            var targetId = link.getAttribute("href").substring(1); // hedef div'in id'sini al
            var targetElement = document.getElementById(targetId); // hedef div'i bul

            if (targetId == 'anasayfa') {
                window.scrollTo({
                    top: top,
                    behavior: "smooth", // Animasyonlu kaydırma
                });
            }
            else{
                if (targetElement) {
                    var offset = 20;
                    var targetPosition = targetElement.offsetTop - offset; // Hedef div'in yüksekliği
    
                    // Sayfayı hedef div'in üzerine kaydır
                    window.scrollTo({
                        top: targetPosition,
                        behavior: "smooth", // Animasyonlu kaydırma
                    });
                }
            }
        });
    });
});

function themeChange() {
    var theme = document.body.getAttribute("data-bs-theme");
    var btnElements = document.getElementById("themeChanger");
    var logoElements = document.getElementById("logo");
    if (theme === "dark") {
        document.body.setAttribute("data-bs-theme", "light");

        btnElements.style.color = "darkblue";

        logoElements.style.webkitFilter = "";
        logoElements.style.filter = "";
    } else {
        document.body.setAttribute("data-bs-theme", "dark");

        btnElements.style.color = "lightblue";

        logoElements.style.webkitFilter = "invert(1)";
        logoElements.style.filter = "invert(1)";
    }
}