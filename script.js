const navLinks = document.querySelectorAll(".navbar ul li a");
const sections = document.querySelectorAll("section[id]:not(#home)");

function clearActive() {
    navLinks.forEach(link => link.classList.remove("active"));
}

// Handle scroll
window.addEventListener("scroll", () => {
    clearActive();

    // If at very top → Home active
    if (window.scrollY < 100) {
        document.querySelector('.navbar a[href="#home"]').classList.add("active");
        return;
    }

    sections.forEach(section => {
        const top = section.offsetTop - 150;
        const height = section.offsetHeight;

        if (scrollY >= top && scrollY < top + height) {
            document
                .querySelector(`.navbar a[href="#${section.id}"]`)
                .classList.add("active");
        }
    });
});

// Click behavior
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        clearActive();
        link.classList.add("active");
        link.blur();
    });
});
