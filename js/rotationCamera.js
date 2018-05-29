function rotatCameraX (mouse, look) {
  if (mouse.positionX > mouse.startX) {
    look.x -= 0.01;
  } else {
    look.x += 0.01;
  }
  mouse.startX = mouse.positionX;
}