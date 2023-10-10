document.addEventListener("DOMContentLoaded", function () {

    const selectedValue = langSelect.value;
    const divs = document.querySelectorAll('div[lang]');
    const lis = document.querySelectorAll('li[lang]');

    divs.forEach(function(div) {
        if (div.getAttribute('lang') === selectedValue) {
            div.style.display = 'block';
        } else {
            div.style.display = 'none';
        }
    });
    lis.forEach(function(li) {
        if (li.getAttribute('lang') === selectedValue) {
            li.style.display = 'block';
        } else {
            li.style.display = 'none';
        }
    });

    var links = document.querySelectorAll(".nav-link");
    links.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault(); // Bağlantının varsayılan davranışını engelle

            var targetId = link.getAttribute("href").substring(1); // hedef div'in id'sini al
            var targetElement = document.getElementById(targetId); // hedef div'i bul

            if (targetElement) {
                if(targetElement == 'anasayfa'){
                    var offset = 100; // Div'in üzerine atmak için ayarladığınız piksel değeri
                }
                else{
                    var offset = 20; // Div'in üzerine atmak için ayarladığınız piksel değeri
                }
                var targetPosition = targetElement.offsetTop - offset; // Hedef div'in yüksekliği

                // Sayfayı hedef div'in üzerine kaydır
                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth" // Animasyonlu kaydırma
                });
            }
        });
    });

    var theme = document.body.getAttribute("data-bs-theme");
    var btnElements = document.getElementsByClassName('themeChanger');
    var logoElements = document.getElementsByClassName("logo");
    
    if (theme === "dark") {
        for (var m = 0; m < logoElements.length; m++) {
            btnElements[m].style.color = "lightblue";
        }

        // Her bir logo öğesini döngü ile işleyin
        for (var i = 0; i < logoElements.length; i++) {
            logoElements[i].style.webkitFilter = "invert(1)";
            logoElements[i].style.filter = "invert(1)";
        }
    } else {
        for (var m = 0; m < logoElements.length; m++) {
            btnElements[m].style.color = "darkblue";
        }
        
        // Her bir logo öğesini döngü ile işleyin
        for (var k = 0; k < logoElements.length; k++) {
            logoElements[k].style.webkitFilter = "";
            logoElements[k].style.filter = "";
        }
    }
});

function themeChange(){
    var theme = document.body.getAttribute("data-bs-theme");
    var btnElements = document.getElementsByClassName('themeChanger');
    var logoElements = document.getElementsByClassName("logo");
    if (theme === "dark") {
        document.body.setAttribute("data-bs-theme", "light");

        for (var m = 0; m < logoElements.length; m++) {
            btnElements[m].style.color = "darkblue";
        }

        // Her bir logo öğesini döngü ile işleyin
        for (var k = 0; k < logoElements.length; k++) {
            logoElements[k].style.webkitFilter = "";
            logoElements[k].style.filter = "";
        }
    } else {
        document.body.setAttribute("data-bs-theme", "dark");

        for (var m = 0; m < logoElements.length; m++) {
            btnElements[m].style.color = "lightblue";
        }

        // Her bir logo öğesini döngü ile işleyin
        for (var i = 0; i < logoElements.length; i++) {
            logoElements[i].style.webkitFilter = "invert(1)";
            logoElements[i].style.filter = "invert(1)";
        }
    }
}

const langSelect = document.getElementById('lang');

langSelect.addEventListener('change', function() {
    const selectedValue = langSelect.value;
    const divs = document.querySelectorAll('div[lang]');
    const lis = document.querySelectorAll('li[lang]');

    divs.forEach(function(div) {
        if (div.getAttribute('lang') === selectedValue) {
            div.style.display = 'block';
        } else {
            div.style.display = 'none';
        }
    });
    lis.forEach(function(li) {
        if (li.getAttribute('lang') === selectedValue) {
            li.style.display = 'block';
        } else {
            li.style.display = 'none';
        }
    });
});