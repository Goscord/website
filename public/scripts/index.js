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

let burgerActived = false;

function burgerClick(){
    let menu = document.querySelector("nav .menu");
    let burger = document.querySelector("nav .burger");

    if(burgerActived){
        menu.style.transform = "none";
        
        burger.style.opacity = 1;
        burger.style.pointerEvents = "auto";
    } else {
        menu.style.transform = "translateX(-85vw)";

        burger.style.opacity = 0;
        burger.style.pointerEvents = "none";
    }

    burgerActived = !burgerActived;
}

window.addEventListener("scroll", () => {
    if(burgerActived) burgerClick();

    let opacity = 1 - ((window.scrollY + 1) / 500);

    document.querySelector(".corners").style.opacity = opacity;
    document.querySelector(".scroll-mouse").style.opacity = opacity;
});