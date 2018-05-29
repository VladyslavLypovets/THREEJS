function forward(move) {
  move.forward = 2 * move.speed;
}
function left(move) {
  move.left = 2 * move.speed;
}
function right(move) {
  move.right = 2 * move.speed;
}
function backward(move) {
  move.backward = 2 * move.speed;
}
function forwardStop(move) {
  move.forward = 0;
}
function leftStop(move) {
  move.left = 0;
}
function rightStop(move) {
  move.right = 0;
}
function backwardStop(move) {
  move.backward = 0;
}
function turbo(move) {
  move.speed = 10;
}
function turboStop(move) {
  move.speed = 1;
}
function moveTop(move) {
  move.toTop = 2 * move.speed;
}
function moveTopStop(move) {
  move.toTop = 0;
}
function moveBottom(move) {
  move.bottom = 2 * move.speed;
}
function moveBottomStop(move) {
  move.bottom = 0;
}
