let noBtn = document.getElementById("no");
let yesBtn = document.getElementById("yes");
let count = 0;

noBtn.addEventListener("click", () => {
  count++;
  noBtn.style.position = "absolute";
  noBtn.style.left = Math.random() * window.innerWidth + "px";
  noBtn.style.top = Math.random() * window.innerHeight + "px";
  yesBtn.style.transform = `scale(${1 + count * 0.1})`;
  if (count === 5) alert("ใจร้ายยย");
});

yesBtn.addEventListener("click", () => {
  window.location.href = "timer.html";
});