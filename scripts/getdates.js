// document.getElementById("currentyear").textContent = document.lastModified;
 
const year = document.querySelector("#currentyear");
const today = new Date();

year.textContent = today.getFullYear();

//

// const lastMod = document.querySelector("#lastModified");

document.getElementById("lastModified").textContent = document.lastModified;