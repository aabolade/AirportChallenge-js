describe("Weather", function() {

  var weather;

  beforeEach(function() {
    weather = new Weather();
  })

  it("returns true for stormy", function() {
    spyOn(Math, 'random').and.returnValue(1);
    expect(weather.stormy()).toEqual(false);

  });

  it("returns false for stormy", function() {
    spyOn(Math, 'random').and.returnValue(0)
    expect(weather.stormy()).toEqual(true)
  })

});
