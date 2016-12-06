function Airport() {
  this.weather = new Weather()
  this.planes = []
  this.capacity = 1
}

Airport.prototype.landPlane = function(plane) {


  if (this.weather.stormy) {
    throw new Error("Cannot land in bad weather");
  } else if (this.planes.length >= this.capacity) {
    throw new Error ("Cannot land when the airport is already full");
  } else {
    plane.land();
    this.planes.push(plane);
  }
};

Airport.prototype.takeOffPlane = function(plane) {

  if (this.weather.stormy) {
    throw new Error("Cannot take off in bad weather");
  } else {
    plane.takeOff();
    this.planes.pop(plane);
  }

};
