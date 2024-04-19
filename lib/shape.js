//class for the shape
class Shape 
{
    constructor()
    {
        this.color =""; //color of the shape
    }
    //function to set the color of the shape
    setColor(color)
    {
        this.color = color;
    }


}


//These are inherited classes from the Shape class

class Circle extends Shape 
{
    render()
    {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
}


class Square extends Shape
{
    render()
    {
        return `<rect x="50" y="50" width="200" height="200" fill="${this.color}" />`;
    }
}

class Triangle extends Shape
{
    render()
    {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}


//exporting the classes
module.exports = {Shape, Circle, Square, Triangle};