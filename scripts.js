function changeBaackground(color) {
    console.log(color);
    document.body.style.backgroundColor = color;
}
function toggle(element) {
    if (element.style.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}