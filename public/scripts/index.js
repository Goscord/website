
window.addEventListener("scroll", () => {
    let opacity = 1 - ((window.scrollY + 1) / 500);

    document.querySelector(".corners").style.opacity = opacity;
    document.querySelector(".scroll-mouse").style.opacity = opacity;
});