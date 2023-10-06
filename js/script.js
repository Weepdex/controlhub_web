document.addEventListener("DOMContentLoaded", function () {
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

    const langSelect = document.getElementById('lang');
    const selectedValue = langSelect.value;
    const divs = document.querySelectorAll('div[lang]');

    divs.forEach(function(div) {
        if (div.getAttribute('lang') === selectedValue) {
            div.style.display = 'block';
        } else {
            div.style.display = 'none';
        }
    });
});

function themeChange(){
    var theme = document.body.getAttribute("data-bs-theme");
    var btn = document.getElementById('themeChanger');
    var logo = document.getElementById("logo");
    var logocommercial = document.getElementById("logo-commercial");
    if (theme === "dark" || !theme) {
        document.body.setAttribute("data-bs-theme", "light");
        btn.style.color = "darkblue"
        logo.style.webkitFilter = "";
        logo.style.filter = "";
        logocommercial.style.webkitFilter = "";
        logocommercial.style.filter = "";
    } else {
        document.body.setAttribute("data-bs-theme", "dark");
        btn.style.color = "lightblue"
        logo.style.webkitFilter = "invert(1)";
        logo.style.filter = "invert(1)";
        logocommercial.style.webkitFilter = "invert(1)";
        logocommercial.style.filter = "invert(1)";
    }
}

const langSelect = document.getElementById('lang');

langSelect.addEventListener('change', function() {
    const selectedValue = langSelect.value;
    const divs = document.querySelectorAll('div[lang]');

    divs.forEach(function(div) {
        if (div.getAttribute('lang') === selectedValue) {
            div.style.display = 'block';
        } else {
            div.style.display = 'none';
        }
    });
});