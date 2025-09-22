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