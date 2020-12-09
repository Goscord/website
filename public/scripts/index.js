/**
 * @param {HTMLElement} text 
 */
function copyText(text){
    // Create text area and add text to content :
    let area = document.createElement("textarea");

    document.body.appendChild(area);

    area.value = text.textContent;

    // Select the text :
    area.select();

    // Copy it and remove text area :
    document.execCommand("copy");
    document.body.removeChild(area);

    // Play animation on the text : 
    text.style.animation = "colorTransition 3s";

    setTimeout(() => text.style.removeProperty("animation"), 1000);
}

window.addEventListener("scroll", () => {
    let opacity = 1 - ((window.scrollY + 1) / 500);

    document.querySelector(".corners").style.opacity = opacity;
    document.querySelector(".scroll-mouse").style.opacity = opacity;
});