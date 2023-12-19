document.addEventListener("DOMContentLoaded", function () {
    var goToTopBtn = document.getElementById("goToTopBtn");

    window.onscroll = function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            goToTopBtn.style.display = "block";
        } else {
            goToTopBtn.style.display = "none";
        }
    };

    goToTopBtn.addEventListener("click", function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });
});