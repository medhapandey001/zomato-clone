document.addEventListener("DOMContentLoaded", () => {

    const logo = document.querySelector("main img");
    const title = document.querySelector("main p");
    const search = document.querySelector("main input");

    // Sequential entrance animation

    setTimeout(() => {
        logo.classList.add("show");
    }, 200);

    setTimeout(() => {
        title.classList.add("show");
    }, 500);

    setTimeout(() => {
        search.classList.add("show");
    }, 800);

    // Search focus animation

    search.addEventListener("focus", () => {
        search.classList.add("search-active");
    });

    search.addEventListener("animationend", () => {
        search.classList.remove("search-active");
    });

    // Enter key interaction

    search.addEventListener("keydown", (e) => {

        if (e.key === "Enter") {

            const value = search.value.trim();

            if (!value) return;

            search.style.transform = "scale(.98)";

            setTimeout(() => {
                search.style.transform = "";
            }, 150);

            console.log(`Searching for: ${value}`);
        }
    });

    // Subtle parallax effect

    document.addEventListener("mousemove", (e) => {

        const x = (e.clientX / window.innerWidth - 0.5) * 10;
        const y = (e.clientY / window.innerHeight - 0.5) * 10;

        logo.style.transform =
            `translate(${x * 0.3}px, ${y * 0.3}px)`;
    });

});