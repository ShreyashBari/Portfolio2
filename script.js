document.addEventListener("DOMContentLoaded", function() {
    // Sticky Header
    window.addEventListener("scroll", function() {
        var header = document.querySelector(".header");
        if (header) {
            header.classList.toggle("sticky", window.scrollY > 0);
        }
    });

    // Menu Toggle
    var menuIcon = document.getElementById("menu-icon");
    var navbar = document.querySelector(".navbar");

    if (menuIcon && navbar) {
        menuIcon.addEventListener("click", function() {
            navbar.classList.toggle("active");
        });
    }

    // Close the menu when a link is clicked
    const menuLinks = document.querySelectorAll('.navbar a');
    menuLinks.forEach(link => {
        link.addEventListener("click", function() {
            if (navbar) {
                navbar.classList.remove("active");
            }
        });
    });

    // Portfolio Layer Interaction
    var portfolioBoxes = document.querySelectorAll(".portfolio-box");

    portfolioBoxes.forEach(function(box) {
        box.addEventListener("mouseover", function() {
            var layer = box.querySelector(".portfolio-layer");
            if (layer) {
                layer.style.opacity = "1";
            }
        });

        box.addEventListener("mouseout", function() {
            var layer = box.querySelector(".portfolio-layer");
            if (layer) {
                layer.style.opacity = "0";
            }
        });
    });
});
