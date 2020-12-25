changeScrollMouseIcon();

// Variables :

let burgerActived = false;

/** @var {{x: float, y: float}} */
let mousePosition;

// Functions :

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

function burgerUpdate(){
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

function burgerClick(){
    let element = document.elementFromPoint(mousePosition.x, mousePosition.y);

    if(document.querySelector("nav .burger").contains(element)){
        burgerUpdate();
    } else {
        if(burgerActived && !document.querySelector("nav .menu").contains(element)){
            burgerUpdate();
        }
    }
}

/**
 * @returns {bool}
 */
function changeScrollMouseIcon(){
    if(window.matchMedia("(max-width: 600px)").matches){
        var imagePath = "/images/UI/touch.svg";
    } else {
        var imagePath = "/images/UI/mouse.svg";
    }

    document.querySelector(".scroll-mouse img").src = imagePath;
}

// Events :

window.addEventListener("scroll", () => {
    if(burgerActived) burgerUpdate();

    let opacity = 1 - ((window.scrollY + 1) / 500);

    document.querySelector(".corners").style.opacity = opacity;
    document.querySelector(".scroll-mouse").style.opacity = opacity;
});

window.addEventListener("resize", () => {
    changeScrollMouseIcon();
});

document.addEventListener("mousemove", event => {
    mousePosition = {
        x: event.clientX,
        y: event.clientY
    }
});