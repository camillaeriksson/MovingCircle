const circle = document.querySelector("div");

window.addEventListener("click", clickListener);

function clickListener(event) {
    mousePosition = {
        x: event.clientX,
        y: event.clientY
    };

    circle.style.top = mousePosition.y + "px";
    circle.style.left = mousePosition.x + "px";
    circle.style.transform = "translate(-50%, -50%)";


};
