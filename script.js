const text = "♡ Brand Marketer  ♡  Coder  ♡  Networker ♡";
const output = document.getElementById("typed");

let i = 0;

function type() {
  if (i < text.length) {
    output.textContent += text.charAt(i);
    i++;
    setTimeout(type, 60);
  }
}

setTimeout(type, 2600); 


const trail = document.getElementById("trail-container")

document.addEventListener("mousemove", (e) => {
  const sparkle = document.createElement("div");
  sparkle.className = "sparkle";

  sparkle.style.left = e.pageX + "px";
  sparkle.style.top = e.pageY + "px";

  trail.appendChild(sparkle);
    
  setTimeout(() => sparkle.remove(), 800);
  });

  document.addEventListener("DOMContentLoaded", () => {
    const envelope = document.getElementById("envelope");
  
    envelope.addEventListener("click", () => {
      envelope.classList.toggle("open");
    });
  });
  