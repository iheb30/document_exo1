let buttonShare = document.getElementById("button-share");

buttonShare.addEventListener("click", (e) => {
    e.preventDefault();
    let divnetwork = document.querySelector(".network");
    //divnetwork.style.display = "block";
    if (divnetwork.style.display === "block") {
        divnetwork.style.display = "none";
    } else {
        divnetwork.style.display = "block";
    }
});
