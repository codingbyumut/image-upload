const image = document.querySelector("img"),
    input = document.querySelector("input");
/*Codingbyumut */
    input.addEventListener("change", () => {
        image.src = URL.createObjectURL(input.files[0]);
    });