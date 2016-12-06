describe("Plane", function() {


  beforeEach(function() {
    plane = new Plane();
  });

  describe("landing plane", function() {

    it("landed returns true", function() {
      plane.land();
      expect(plane.landed).toEqual(true);
    });

  });

  describe("plane taking off", function() {
    it("sets landed to false when the plane has taken off", function() {
    plane.takeOff();
    expect(plane.landed).toEqual(false);
    });
  });

});
