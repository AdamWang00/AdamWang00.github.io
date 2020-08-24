let modal;

window.addEventListener('load', (event) => {
    modal = document.getElementById("modal");

    const highlight = e => e.classList.add("highlight");

    fadeIn("fade-1", 1000, highlight);
    setTimeout(() => fadeIn("fade-2", 600, highlight), 2000);
    setTimeout(() => fadeIn("fade-3", 600, highlight), 2400);
    setTimeout(() => fadeIn("fade-4", 600, highlight), 2800);
    setTimeout(() => fadeIn("fade-5", 600, highlight), 3200);
});

const showModal = () => {
    modal.style.top = 0;
    modal.style.opacity = 1;

    const show = id => document.getElementById(id).style.opacity = 1.0;

    setTimeout(() => show("project-1"), 800);
    setTimeout(() => show("project-2"), 1000);
    setTimeout(() => show("project-3"), 1200);
    setTimeout(() => show("project-4"), 1400);
};

const hideModal = () => {
    modal.style.top = "-100vh";
    modal.style.opacity = 0;

    const projects = [1, 2, 3, 4];
    projects.forEach(n => {
        document.getElementById(`project-${n}`).style.opacity = 0;
    });
};

const fadeIn = (id, delay, func) => {
    document.getElementById(id).style.opacity = 1.0;
    document.querySelectorAll(`#${id} .mark`).forEach(e => {
        setTimeout(() => func(e), delay);
    });
};