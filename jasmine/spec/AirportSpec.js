describe("Airport", function() {

var airport;
var plane;

describe("instructing a plane to land", function() {

  it("lands a plane", function() {
    plane = jasmine.createSpyObj('plane', ['land']);
    airport = new Airport();
    airport.landPlane(plane);
    expect(plane.land).toHaveBeenCalled();
  });

  it("stores a plane", function() {
    plane = jasmine.createSpyObj('plane', ['land']);
    airport = new Airport();
    airport.landPlane(plane);
    expect(airport.planes).toContain(plane);
  });

});

});
