let modal;

window.addEventListener('load', (event) => {
    modal = document.getElementById("modal");

    fadeIn("fade-1", 1000);
    setTimeout(() => fadeIn("fade-2", 600), 2000);
    setTimeout(() => fadeIn("fade-3", 600), 2400);
    setTimeout(() => fadeIn("fade-4", 600), 2800);
    setTimeout(() => fadeIn("fade-5", 600), 3200);
});

const fadeIn = (id, highlightDelay) => {
    document.getElementById(id).style.opacity = 1.0;
    document.querySelectorAll(`#${id} .mark`).forEach(e =>
        setTimeout(() => e.style.color = "orange", highlightDelay));
}

const showModal = () => {
    modal.style.top = 0;
    modal.style.opacity = 0.95;
}

const hideModal = () => {
    modal.style.top = "-100vh"
    modal.style.opacity = 0;
}