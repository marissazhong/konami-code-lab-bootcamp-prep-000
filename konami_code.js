const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  let index = 0;
  function onKeyDownHandler(e) {
    const key = e.key;
    if (key === codes[index]) {
      console.log("yes");
      index += 1;
      if (index === codes.length) {
        alert("Congratulations!");
        index = 0
      }
    } else {
      index = 0;
    }
  }
  document.body.addEventListener('keydown', onKeyDownHandler(e));
  return;
}
