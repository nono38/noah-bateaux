radio.onReceivedValue(function (name, value) {
    if (name == "p_1" && value == 0) {
        kitronik_motor_driver.motorOff(kitronik_motor_driver.Motors.Motor2)
        kitronik_motor_driver.motorOff(kitronik_motor_driver.Motors.Motor1)
    } else if (name == "p_1" && value > 0) {
        kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor2, kitronik_motor_driver.MotorDirection.Reverse, value)
        kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor1, kitronik_motor_driver.MotorDirection.Forward, value)
    } else if (name == "p_1" && value <= -1) {
        kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor2, kitronik_motor_driver.MotorDirection.Forward, Math.abs(value))
        kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor1, kitronik_motor_driver.MotorDirection.Reverse, Math.abs(value))
    }
})
radio.setGroup(207)
kitronik_motor_driver.motorOff(kitronik_motor_driver.Motors.Motor2)
kitronik_motor_driver.motorOff(kitronik_motor_driver.Motors.Motor1)
