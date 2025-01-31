// Define the Polygon class which accepts an array of integers as sides
class Polygon {
    constructor(sides) {
      // Store the sides in an instance variable
      this.sides = sides;
    }
  
    // Getter method to count the number of sides
    get countSides() {
      return this.sides.length;
    }
  
    // Getter method to calculate the perimeter by summing all side lengths
    get perimeter() {
      return this.sides.reduce((a, b) => a + b, 0);
    }
  }
  
  // Define the Triangle class that inherits from Polygon
  class Triangle extends Polygon {
    // Getter method to check if the triangle is valid
    get isValid() {
      // A triangle must have exactly 3 sides
      if (this.countSides !== 3) return false;
  
      // Destructure the sides array into three variables
      const [a, b, c] = this.sides;
  
      // Check the triangle inequality theorem
      return (a + b > c && a + c > b && b + c > a);
    }
  }
  
  // Define the Square class that inherits from Polygon
  class Square extends Polygon {
    // Getter method to check if the square is valid
    get isValid() {
      // A square must have exactly 4 sides
      if (this.countSides !== 4) return false;
  
      // Destructure the sides array into four variables
      const [a, b, c, d] = this.sides;
  
      // Check if all four sides are equal
      return (a === b && b === c && c === d);
    }
  
    // Getter method to calculate the area of the square
    get area() {
      // If the square is valid, return the area (side length squared)
      if (this.isValid) {
        return this.sides[0] ** 2;
      }
      // Return undefined if the square is not valid
      return undefined;
    }
  }
