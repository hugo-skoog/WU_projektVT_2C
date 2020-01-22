function toggleMeny() {
    
    document.querySelector(".navLinks").classList.toggle("navActive");
    document.querySelector(".head").classList.toggle("toggle");

}

document.querySelector(".head").addEventListener("click", toggleMeny);