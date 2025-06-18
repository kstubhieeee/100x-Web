class Rectangle {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }
  area() {
    const area = this.width * this.height;
    return area;
  }
  paint() {
    console.log(`Fill the rectangle with ${this.color} color`);
  }
}

let rect = new Rectangle(4, 5, "green");
// console.log(rect);
const area = rect.area();
console.log(area);
rect.paint();
