const arrowRight = document.querySelector(".arrowRight");
const arrowLeft = document.querySelector(".arrowLeft");
const slideContainer = document.querySelector(".mainSlideContainer")

function arrowMenyRight() {

    if (arrowLeft.classList.contains("arrLeftActive")) {
        arrowLeft.classList.remove("arrLeftActive")
        slideContainer.classList.remove("slideLeft")
        console.log("Slide to the right");
    } else {
        if (arrowRight.classList.contains("arrRightActive")) {
            console.log("No slide!")
        } else {
            console.log("Slide to the right");
        }
        arrowRight.classList.add("arrRightActive")
        slideContainer.classList.add("slideRight")
    }

}

function arrowMenyLeft() {

    if (arrowRight.classList.contains("arrRightActive")) {
        arrowRight.classList.remove("arrRightActive")
        slideContainer.classList.add("slideRight")
        console.log("Slide to the left");
    } else {
        if (arrowLeft.classList.contains("arrLeftActive")) {
            console.log("No slide!")
        } else {
            console.log("Slide to the left");
            slideContainer.classList.toggle("slideLeft")
        }
        arrowLeft.classList.add("arrLeftActive")
        slideContainer.classList.add("slideLeft")
    }

}

document.querySelector(".arrowRight").addEventListener("click", arrowMenyRight);
document.querySelector(".arrowLeft").addEventListener("click", arrowMenyLeft);