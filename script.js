const text = document.querySelector(".seco-text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Fullstack Web Developer";
    }, 0);
    setTimeout(() => {
        text.textContent = "UX/UI Designer";
    }, 4000);
    setTimeout(() => {
        text.textContent = "Freelancer";
    }, 8000);
}

textLoad();
setInterval(textLoad, 12000);