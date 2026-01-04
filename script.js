const navLinks = document.querySelectorAll(".navbar ul li a");
const sections = document.querySelectorAll("section[id]");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => link.classList.remove("active"));
                const activeLink = document.querySelector(
                    `.navbar a[href="#${entry.target.id}"]`
                );
                if (activeLink) activeLink.classList.add("active");
            }
        });
    },
    {
        root: null,
        threshold: 0.6
    }
);

sections.forEach(section => observer.observe(section));
