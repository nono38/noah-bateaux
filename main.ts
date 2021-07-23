radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        kitronik_motor_driver.motorOff(kitronik_motor_driver.Motors.Motor1)
        kitronik_motor_driver.motorOff(kitronik_motor_driver.Motors.Motor2)
    } else if (receivedNumber > 0) {
        kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor1, kitronik_motor_driver.MotorDirection.Forward, receivedNumber)
        kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor2, kitronik_motor_driver.MotorDirection.Forward, receivedNumber)
    } else {
        kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor1, kitronik_motor_driver.MotorDirection.Reverse, Math.abs(receivedNumber))
        kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor2, kitronik_motor_driver.MotorDirection.Reverse, Math.abs(receivedNumber))
    }
})
radio.setGroup(207)
kitronik_motor_driver.motorOff(kitronik_motor_driver.Motors.Motor2)
kitronik_motor_driver.motorOff(kitronik_motor_driver.Motors.Motor1)
