radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == gauche) {
        left = strip.range(12, 24)
        for (let index = 0; index < 3; index++) {
            left.showColor(neopixel.colors(NeoPixelColors.Red))
            basic.showLeds(`
                . . # . .
                . # . . .
                # # # # #
                . # . . .
                . . # . .
                `)
            basic.pause(300)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            left.showColor(neopixel.colors(NeoPixelColors.Black))
        }
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(gauche)
})
radio.onReceivedString(function (receivedString) {
    right = strip.range(12, 24)
    for (let index = 0; index < 3; index++) {
        right.showColor(neopixel.colors(NeoPixelColors.Red))
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
        basic.pause(300)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        right.showColor(neopixel.colors(NeoPixelColors.Black))
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("DROITE")
})
let z2 = 0
let z1 = 0
let right: neopixel.Strip = null
let left: neopixel.Strip = null
let strip: neopixel.Strip = null
let gauche = 0
radio.setGroup(33)
gauche = 0
strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
basic.forever(function () {
    z1 = input.acceleration(Dimension.Z)
    basic.pause(10)
    z2 = input.acceleration(Dimension.Z)
    if (z1 > z2) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        basic.pause(3000)
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
    }
    if (z1 < z2) {
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
        basic.pause(10)
    }
})
