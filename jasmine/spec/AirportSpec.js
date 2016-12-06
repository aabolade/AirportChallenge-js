describe("Airport", function() {

var airport;
var plane;

beforeEach(function() {
  plane = jasmine.createSpyObj('plane', ['land','takeOff']);
  airport = new Airport();
  plane2 = jasmine.createSpyObj('plane', ['land', 'takeOff']);
})

describe("instructing a plane to land", function() {



  it("lands a plane", function() {
    airport.weather.stormy = false
    airport.landPlane(plane);
    expect(plane.land).toHaveBeenCalled();
    });

  it("stores a plane", function() {
    airport.weather.stormy = false
    airport.landPlane(plane);
    expect(airport.planes).toContain(plane);
  });

  it("Prevents a plane from landing if the weather is bad", function() {
    airport.weather.stormy = true
    expect(function() {airport.landPlane(plane)}).toThrow(new Error("Cannot land in bad weather"));
  })

  it("prevents a plane from landing if the airport is full", function() {
    airport.weather.stormy = false
    airport.landPlane(plane);
    expect(function() {airport.landPlane(plane2)}).toThrow(new Error("Cannot land when the airport is already full"));
  })

});

describe("instructing a plane to take off", function() {


  it("lets a plane take off", function() {
      airport.weather.stormy = false
      airport.takeOffPlane(plane);
      expect(plane.takeOff).toHaveBeenCalled();
  });

  it("removes a plane from the airport when it has taken off", function() {
    airport.weather.stormy = false
    airport.landPlane(plane);
    airport.takeOffPlane(plane);
    expect(airport.planes).not.toContain(plane);
  });

  it("prevents a plane from taking off if the weather is bad", function() {
    airport.weather.stormy = true
    expect(function() {airport.takeOffPlane(plane)}).toThrow(new Error("Cannot take off in bad weather"));
  });

});

});
