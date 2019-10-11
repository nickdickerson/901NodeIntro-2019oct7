module.exports = class ShapeAreaCalculator {
    areaOfCircle(radius){
        return (Math.PI*(radius**2));
    }

    areaOfSquare(side){
        return side*side;
    }

    areaOfTriangle(base,height){
        return ((base*height)/2);
    }
}