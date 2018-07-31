describe("ParkingSpec", function() {
  var parkingSpec;

  beforeEach(function() {
    parkingSpec = new ParkingSpec();
  });
  
it("input one car return true", function() {
    parkingSpec.depositCarOrTakeCar('存车');
    expect(parkingSpec.depositFlag).toEqual(true);
});

it("input one car return false", function() {
    parkingSpec.depositCarOrTakeCar('存车');
    expect(parkingSpec.depositFlag).toEqual(false);
});

it("take one car return true", function() {
    parkingSpec.depositCarOrTakeCar('取车');
    expect(parkingSpec.takeFlag).toEqual(true);
});

it("take one car return false", function() {
    parkingSpec.depositCarOrTakeCar('取车');
    expect(parkingSpec.takeFlag).toEqual(false);
});
});
