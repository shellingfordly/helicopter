const defaultOptions = {
  x: 50,
  y: 50,
  speed: 0.5,
};

export function initGame(plane: any, options?: any) {
  Object.assign(plane, defaultOptions);

  plane.moveUp = (speed: number) => {
    plane.y -= speed || plane.speed;
  };

  plane.moveDown = (speed: number) => {
    plane.y += speed || plane.speed;
  };

  plane.moveRight = (speed: number) => {
    plane.x += plane.speed;
  };

  return plane;
}
