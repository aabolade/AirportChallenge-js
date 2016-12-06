function Airport() {}

Airport.prototype.landPlane = function(plane) {

 plane.land();
 this.planes.push(plane)

};

Airport.prototype.planes = [];
