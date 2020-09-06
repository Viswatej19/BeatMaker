window.addEventListener("load", () => {
    const sounds = document.querySelectorAll(".sound");
    const main = document.querySelectorAll(".maincircle");

    main.forEach((main,index) => {
        main.addEventListener("click", function () {
            sounds[index].currentTime = 0;
            sounds[index].play();
        });
    });
});