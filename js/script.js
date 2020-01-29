function toggleMeny() {
    
    document.querySelector(".navLinks").classList.toggle("active");
    document.querySelector(".linkContainer").classList.toggle("toggle");

}

document.querySelector(".linkContainer").addEventListener("click", toggleMeny);