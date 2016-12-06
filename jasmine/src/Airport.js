function Airport() {}

Airport.prototype.landPlane = function(plane) {

 plane.land();
 this.planes.push(plane);

};

Airport.prototype.takeOffPlane = function(plane) {
  plane.takeOff();
  this.planes.pop(plane);
};

Airport.prototype.planes = [];
