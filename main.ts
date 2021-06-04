radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == gauche) {
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
            left.showColor(neopixel.colors(NeoPixelColors.Black))
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.pause(300)
        }
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(gauche)
})
radio.onReceivedString(function (receivedString) {
    droite += droite + 1
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
        right.showColor(neopixel.colors(NeoPixelColors.Black))
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(300)
        droite += droite - 1
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("DROITE")
})
let z3 = 0
let z2 = 0
let z1 = 0
let right: neopixel.Strip = null
let left: neopixel.Strip = null
let gauche = 0
let droite = 0
radio.setGroup(33)
droite = 0
gauche = 0
let strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
left = strip.range(12, 24)
right = strip.range(0, 12)
basic.forever(function () {
    z1 = input.acceleration(Dimension.Z)
    basic.pause(10)
    z2 = input.acceleration(Dimension.Z)
    basic.pause(10)
    z3 = input.acceleration(Dimension.Z)
    if (z1 < z2) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        basic.pause(3000)
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
    }
    if (z3 < z2) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        basic.pause(3000)
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
    }
})
