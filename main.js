
const btnToggle = document.querySelector('.sm_sidebar');
const smNavLinks = document.querySelector('.sm_nav_links');
const toggle_x = document.querySelector('.sm_sidebar');

btnToggle.addEventListener('click', function() {
    smNavLinks.classList.toggle('display_toggle');
    if (toggle_x.innerHTML.includes('fa-bars')) {
        toggle_x.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    } else {
        toggle_x.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
});

// active links
var sections = document.querySelectorAll("div[id]");
var navLinks = document.querySelectorAll(".nav a");

window.addEventListener("scroll", function () {
    var currentSectionId;
    for (var i = 0; i < sections.length; i++) {
        if (window.scrollY >= sections[i].offsetTop - 200) {
            currentSectionId = sections[i].getAttribute("id");
        }
    }
    for (var i = 0; i < navLinks.length; i++) {
        if (navLinks[i].getAttribute("href") == `#${currentSectionId}`) {
            navLinks[i].classList.add("active");
        } else {
            navLinks[i].classList.remove("active");
        }
    }
});
// ########################################################################################################
// hidden arrow
var arrow_up = document.querySelector(".arrowUp");
var homeSecion = document.querySelector("#Know");
arrow_up.style.display = "none";
window.addEventListener("scroll", function () {
    if (homeSecion.offsetTop > window.scrollY + 400) {
        arrow_up.style.display = "none";
    } else {
        arrow_up.style.display = "block";
    }
});
// ########################################################################################################
// change color
var gear = document.querySelector(".gear_container .i");
var gear_container = document.querySelector(".gear_container");
gear.addEventListener("click", function () {
    gear_container.classList.toggle("translatex");
    gear_container.style.transition = " all 0.5s";
});
//
var BlueViolet = document.querySelector(".Blue-Violet");
var Blue = document.querySelector(".Blue");
var Violet = document.querySelector(".Violet");
var teal = document.querySelector(".teal");
var red = document.querySelector(".red");
var Pink = document.querySelector(".Pink");
var Green = document.querySelector(".Green");
var Yellow = document.querySelector(".Yellow");
var Orange = document.querySelector(".Orange");
var Brown = document.querySelector(".Brown");
//
BlueViolet.addEventListener("click", function () {
    document.documentElement.style.setProperty("--primary-color", "blueviolet");
});
Blue.addEventListener("click", function () {
    document.documentElement.style.setProperty("--primary-color", "blue");
});
Violet.addEventListener("click", function () {
    document.documentElement.style.setProperty("--primary-color", "Violet");
});
teal.addEventListener("click", function () {
    document.documentElement.style.setProperty("--primary-color", "teal");
});
red.addEventListener("click", function () {
    document.documentElement.style.setProperty("--primary-color", "red");
});
Pink.addEventListener("click", function () {
    document.documentElement.style.setProperty("--primary-color", "Pink");
});
Green.addEventListener("click", function () {
    document.documentElement.style.setProperty("--primary-color", "Green");
});
Yellow.addEventListener("click", function () {
    document.documentElement.style.setProperty("--primary-color", "Yellow");
});
Orange.addEventListener("click", function () {
    document.documentElement.style.setProperty("--primary-color", "Orange");
});
Brown.addEventListener("click", function () {
    document.documentElement.style.setProperty("--primary-color", "Brown");
});
//

var circle = document.getElementsByClassName("circle");
for (let i = 0; i < circle.length; i++) {
    circle[i].addEventListener("click", function (e) {
        for (let j = 0; j < circle.length; j++) {
            circle[j].classList.remove("circle_select");
        }
        var checked = e.target;
        checked.classList.add("circle_select");
        checked.style.transition = "all 0.5s";
    });
}
//
var reset = document.querySelector(".reset");
reset.addEventListener("click", function () {
    document.documentElement.style.setProperty("--primary-color", "#20C997");
    for (let k = 0; k < circle.length; k++) {
        circle[k].classList.remove("circle_select");
    }
});
// #################################################################################################################
// nav && tabs
var tabs = document.querySelectorAll("#portfolio ul li");
var divImages = document.getElementsByClassName("images");
for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", function () {
        for (let j = 0; j < divImages.length; j++) {
            divImages[j].classList.remove("active_tabs");
            tabs[j].classList.remove("active_tabs_border", "active");
        }
        divImages[i].classList.add("active_tabs");
        tabs[i].classList.add("active_tabs_border", "active");
    });
}
// ##############################################################
// slider
var slides = document.querySelectorAll(".testimonial_content");
var sliders = document.querySelectorAll(".sliders");
for (let i = 0; i < sliders.length; i++) {
    sliders[i].addEventListener("click", function () {
        for (let j = 0; j < sliders.length; j++) {
            sliders[j].classList.remove("active");
            slides[j].classList.remove("active_tabs");
        }
        sliders[i].classList.add("active");
        slides[i].classList.add("active_tabs");
    });
}
