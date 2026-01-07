const btn = document.getElementById("clickBtn");
const output = document.getElementById("output");

if (btn) {
  btn.addEventListener("click", () => {
    output.textContent = "Button wurde geklickt!";
  });
}
