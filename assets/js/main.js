function startTime() {
    let today = new Date();
    let d = today.getUTCDay();
    let h = today.getHours();
    let m = today.getMinutes();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    let hour = (h > 12 ? h - 12 : h)
    let timeOfDay = (h > 12 ? "PM" : "AM")
    let mins = (m > 9 ? m : `0${m}`)
    document.getElementById('txt').innerHTML =
        `${days[d-1]}  ${hour}:${mins} ${timeOfDay}`
    let t = setTimeout(startTime, 500);
}

dragElement(document.getElementById("icon"));
dragElement(document.getElementById("icon1"));
dragElement(document.getElementById("icon2"));
dragElement(document.getElementById("icon3"));
dragElement(document.getElementById("icon4"));
dragElement(document.getElementById("icon5"));
dragElement(document.getElementById("icon6"));

function dragElement(elmnt) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "-img")) {
        document.getElementById(elmnt.id + "-img").onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}