const input = document.getElementById("searchInput");
const result = document.getElementById("result");

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {  
    const value = input.value.trim().toLowerCase(); 

    if (value === "alpha") {
      window.location.href = "alpha.html";
    } else if (value === "gamma") {
      window.location.href = "gamma.html";
    } else if (value === "beta-" || value === "beta minus") {
      window.location.href = "beta minus.html";
    } else if (value === "beta+" || value === "beta plus") {
      window.location.href = "beta plus.html";
    } else {
      result.textContent = "The page is loading";
    }
  }
}); 
    