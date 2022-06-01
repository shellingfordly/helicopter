import { nextTick, onMounted, reactive, watch } from "vue";
import { ContainerHeight, ContainerWidth } from ".";

export interface OptionType {
  xValue?: number;
  yValue: number;
  widthScope: [number, number];
  heightScope: [number, number];
  xSpacingScope: [number, number];
}

export function random([min, max]: [number, number]) {
  return Math.floor(min + Math.random() * max);
}

export const defaultOptions: OptionType = {
  xValue: ContainerWidth / 3,
  yValue: 0,
  heightScope: [50, 150],
  widthScope: [50, 80],
  xSpacingScope: [0, 30],
};

export class Obstacle {
  public x: number;
  public y: number;
  public width: number;
  public height: number;
  private _destroyFn = (o: Obstacle) => {};

  constructor(options: OptionType = defaultOptions) {
    this.width = random(options.widthScope);
    this.height = random(options.heightScope);
    this.x = ContainerWidth / 3;
    this.y = ContainerHeight - this.height;
  }

  move() {
    this.x -= 1;

    if (this.x < 0) {
      this._destroyFn && this._destroyFn(this);
    }
  }

  onDestroy(destroyFn: (o: Obstacle) => void) {
    this._destroyFn = destroyFn;
  }
}

export function addObstacle(obstacles: any[]) {
  const nextOb = new Obstacle();
  obstacles.push(nextOb);
}

export function useObstacle() {
  const obstacles = reactive<Obstacle[]>([]);
  let prevOb: Obstacle;

  Array(10)
    .fill(null)
    .forEach((_) => {
      const nextOb = new Obstacle();
      if (prevOb) {
        nextOb.x = prevOb.x + prevOb.width;
      }
      obstacles.push(nextOb);
      prevOb = nextOb;
    });

  // watch(obstacles, () => {
  //   if (!obstacles.length) {
  //     return;
  //   }
  //   const last = obstacles.length - 1;
  //   const lastOb = obstacles[last];
  //   if (lastOb && lastOb.x < ContainerWidth) {
  //     addObstacle(obstacles);
  //   }
  // });

  function move() {
    obstacles.forEach((o) => {
      o.move();
    });
    window.requestAnimationFrame(move);
  }

  onMounted(move);

  return [obstacles];
}
