const fish = document.getElementById('fish');
let direction = 1; // 1 = right, -1 = left
let position = 0;

function swim() {
  position += 2 * direction;

  if (position >= 200) {
    direction = -1;
    fish.style.transform = "scaleX(1)"; // keep as-is (faces left by default)
  } else if (position <= 0) {
    direction = 1;
    fish.style.transform = "scaleX(-1)"; // flip horizontally to face right
  }

  fish.style.left = position + "px";
  requestAnimationFrame(swim);
}

// Start facing right so first movement looks correct
fish.style.transform = "scaleX(-1)";
swim();

// Start facing right so first movement looks correct
fish.style.transform = "scaleX(-1)";
swim();

function spawnBubble() {
  const bubble = document.createElement("div");
  bubble.classList.add("bubble");
  document.body.appendChild(bubble);

  bubble.style.left = Math.random() * window.innerWidth + "px";
  bubble.style.bottom = "0px";

  let rise = 0;
  function floatUp() {
    rise += 2;
    bubble.style.bottom = rise + "px";
    if (rise < window.innerHeight) {
      requestAnimationFrame(floatUp);
    } else {
      bubble.remove();
    }
  }
  floatUp();
}

// spawn bubble every 2s
setInterval(spawnBubble, 2000);
