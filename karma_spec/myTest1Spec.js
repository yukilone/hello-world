describe('createReservation(passenger, flight)', function() {
  var testPassenger = null,
  testFlight = null;



  beforeEach(function() {
      testPassenger = {
        firstName : 'Pete',
        lastName : 'Mitchell'
      };
      testFlight = {
        number: '3443',
        carrier: 'AceAir',
        destination: 'Miramar, CA'
      };
  });


  it('assigns the provided passenger to the passengerInfo property', function() {
    var reservation = createResercation(testPassenger, testFlight);
    expect(reservation.passengerInfo).toBe(testPassenger);
  });

  it('assigns the provided flight to the flightInfo property', function() {
    var reservation = createResercation(testPassenger, testFlight);
    expect(reservation.flightInfo).toBe(testFlight);
  });

});
