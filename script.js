function makeSnow() {
    const snow = document.createElement('div');
    const size = Math.random() * 4.5+ 3.5;
    snow.className = 'snow';
    snow.style.width = size + 'px';
    snow.style.height = size + 'px';
    snow.style.left = Math.random() * window.
    innerWidth + 'px';
    snow.style.opacity= size / 8;
    if (size < 7) {
    snow.style.zIndex = -5;}
    snow.style.animationDuration= Math.random
    () * 3 + 2 + 's';
    document.body.appendChild(snow);
    setTimeout(() => snow.remove(), 5000);
}

setInterval(makeSnow, 40);
.diary {
  background-color: white;
  border: 1px solid #ccc;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 80%;
  max-width: 600px;
  padding: 20px;
}

.diary-entry {
  min-height: 300px;
  padding: 10px;
  outline: none;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  line-height: 1.5;
}

.diary-entry:focus {
  border-color: #66afe9;
}
