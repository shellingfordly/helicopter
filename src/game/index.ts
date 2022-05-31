// export interface

export function initGame(plane: any) {
  plane.x = 50;
  plane.y = 50;
  plane.speed = 5;

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
