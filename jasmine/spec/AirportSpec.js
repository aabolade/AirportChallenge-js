describe("Airport", function() {

var airport;
var plane;

beforeEach(function() {
  plane = jasmine.createSpyObj('plane', ['land','takeOff']);
  airport = new Airport();
})

describe("instructing a plane to land", function() {



  it("lands a plane", function() {
    airport.landPlane(plane);
    expect(plane.land).toHaveBeenCalled();
    });

  it("stores a plane", function() {

    airport.landPlane(plane);
    expect(airport.planes).toContain(plane);
  });

  it("Prevents a plane from landing if the weather is bad", function() {
    airport.weather.stormy = true
    expect(function() {airport.landPlane(plane)}).toThrow(new Error("Cannot land in bad weather"));
  })

});

describe("instructing a plane to take off", function() {


  it("lets a plane take off", function() {
      airport.takeOffPlane(plane);
      expect(plane.takeOff).toHaveBeenCalled();
  });

  it("removes a plane from the airport when it has taken off", function() {
    airport.landPlane(plane);
    airport.takeOffPlane(plane);
    expect(airport.planes).not.toContain(plane);
  });

});

});
