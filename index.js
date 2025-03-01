// Your code here
const dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4";
dodger.style.left = "0px";
dodger.style.bottom = "0px";

function moveDodgerLeft() {
    const left = parseInt(dodger.style.left.replace("px", ""), 10);
    if (left > 0) {
        dodger.style.left = `${left - 10}px`;
    }
}

function moveDodgerRight() {
    const left = parseInt(dodger.style.left.replace("px", ""), 10);
    if (left < 360) { // Assuming the game container width is 400px
        dodger.style.left = `${left + 10}px`;
    }
}

// Event listener for arrow keys
document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowLeft") {
        moveDodgerLeft();
    } else if (event.key === "ArrowRight") {
        moveDodgerRight();
    }
});
