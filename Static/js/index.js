const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    })
})


document.getElementById("login").addEventListener("click", () => {
    document.querySelector(".popup").style.display = "flex";
    disableScroll();
})

document.querySelector(".close").addEventListener("click", () => {
    document.querySelector(".popup").style.display = "none";
    enableScroll();
})

function disableScroll() {
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
  
    window.onscroll = function() {
        window.scrollTo(scrollLeft, scrollTop);
    };
}
  
function enableScroll() {
    window.onscroll = function() {};
}