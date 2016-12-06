function Airport() {
  this.weather = new Weather()
}

Airport.prototype.landPlane = function(plane) {


if (this.weather.stormy) {
  throw new Error("Cannot land in bad weather");
} else {
   plane.land();
   this.planes.push(plane);
}

};

Airport.prototype.takeOffPlane = function(plane) {
  plane.takeOff();
  this.planes.pop(plane);
};

Airport.prototype.planes = [];
