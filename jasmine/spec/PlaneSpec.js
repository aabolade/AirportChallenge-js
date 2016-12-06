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
});
