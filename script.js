function shuffle() {
  const img = document.getElementById("img");
  let randomNo = Math.floor(Math.random() * 6) + 1;
  console.log(randomNo);
  img.setAttribute("src", `./images/${randomNo}.png`);
}

function anim() {
  setTimeout(shuffle, 300);
  const img = document.getElementById("img");
  img.setAttribute("src", `./animation/dice-anim.gif`);
}
