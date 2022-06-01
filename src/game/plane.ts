const defaultOptions = {
  x: 50,
  y: 50,
  speed: 5,
};

export function initGame(plane: any, options?: any) {
  Object.assign(plane, defaultOptions);

  plane.moveUp = () => {
    plane.y -= plane.speed;
  };

  plane.moveDown = () => {
    plane.y += plane.speed;
  };

  plane.moveLeft = () => {
    plane.x -= plane.speed;
  };

  plane.moveRight = () => {
    plane.x += plane.speed;
  };

  return plane;
}
