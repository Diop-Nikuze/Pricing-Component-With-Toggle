const toggle = document.getElementById("toggle");

const slider = document.getElementById("slider");

toggle.addEventListener("change", (e) => {
    slider.classList.toggle("show-monthly")
})