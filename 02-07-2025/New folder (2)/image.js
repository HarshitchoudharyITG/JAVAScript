const studnetImage = {
    img1: "images/banner.png"
}

let img = document.createElement("img");
img.src = studnetImage.img1;

let container = document.querySelector(".container").appendChild(img);


