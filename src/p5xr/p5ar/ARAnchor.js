import p5xr from '../core/p5xr';


export default class ARAnchor {
  constructor(x, y, z) {
    this.position = { x: x * 100, y: y * 100, z: z * 100 };
  }

  dispose() {
  }

  isTracking() {
  }

  isStopped() {
  }

  transform() {
    translate(this.position.x, this.position.y, this.position.z);
  }
}
