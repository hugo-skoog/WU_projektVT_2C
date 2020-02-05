function toggleMeny() {
    
    document.querySelector(".navLinks").classList.toggle("active");
    document.querySelector(".lineContainer").classList.toggle("toggle");

}

document.querySelector(".lineContainer").addEventListener("click", toggleMeny);