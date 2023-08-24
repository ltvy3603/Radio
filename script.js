const radio1 = document.getElementById("radio1");
    const radio2 = document.getElementById("radio2");
    const radio3 = document.getElementById("radio3");
    const textContainer = document.getElementById("textContainer");

    radio1.addEventListener("click", () => {
        textContainer.textContent = "Text for Radio 1";
    });

    radio2.addEventListener("click", () => {
        textContainer.textContent = "Text for Radio 2";
    });

    radio3.addEventListener("click", () => {
        textContainer.textContent = "Text for Radio 3";
    });