
const shape = require('../lib/shape.js');

describe('Shape class', () => {

   describe('Circle class', () => {
       let circle = new shape.Circle();
         circle.setColor('red');

       it('should set the color to red', () => {
           expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red" />');
       });
   });
   describe('Square class', () => {
       let square = new shape.Square();
         square.setColor('red');

       it('should set the color to red', () => {
           expect(square.render()).toEqual('<rect x="50" y="50" width="200" height="200" fill="red" />');
       });
   });
   describe('Triangle class', () => {
       let triangle = new shape.Triangle();
         triangle.setColor('red');

       it('should set the color to green', () => {
           expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="red" />');
       });
   });

 


});