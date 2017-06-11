function setWidth(id, width) {
    var smallscreen = window.matchMedia("(max-width: 768)");

    if (!smallscreen) {
        tag = document.getElementById(id);
        tag.style.width = width;
    }

    return 0;
}