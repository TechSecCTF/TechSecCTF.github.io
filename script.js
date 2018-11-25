function setWidth(id, width) {
    var smallscreen = window.matchMedia("(max-width: 768px)");

    if (!smallscreen.matches) {
        tag = document.getElementById(id);
        tag.style.width = width;
    }

    return 0;
}

function adjustbuttons() {
    nav_buttons = document.getElementsByClassName("nav-button");
    var smallscreen = window.matchMedia("(max-width: 768px)");

    if (smallscreen.matches) {
        for (let i=0; i<nav_buttons.length; i++) {
            nav_buttons[i].style.width = "100%";
        }
    } else {
        for (let i=0; i<nav_buttons.length; i++) {
            nav_buttons[i].style.width = "95%";
        }
    }
}
