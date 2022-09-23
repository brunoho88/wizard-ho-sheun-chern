basic.forever(function () {
    pins.servoWritePin(AnalogPin.P8, pins.map(
    input.acceleration(Dimension.X),
    -1023,
    1023,
    0,
    180
    ))
})
