radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == gauche) {
        for (let index = 0; index < 3; index++) {
            left.showColor(neopixel.colors(NeoPixelColors.Yellow))
            basic.showLeds(`
                . . # . .
                . # . . .
                # # # # #
                . # . . .
                . . # . .
                `)
            basic.pause(100)
            left.showColor(neopixel.colors(NeoPixelColors.Black))
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.pause(100)
        }
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(gauche)
})
radio.onReceivedString(function (receivedString) {
    for (let index = 0; index < 3; index++) {
        right.showColor(neopixel.colors(NeoPixelColors.Yellow))
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
        basic.pause(100)
        right.showColor(neopixel.colors(NeoPixelColors.Black))
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(100)
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("DROITE")
})
let right: neopixel.Strip = null
let left: neopixel.Strip = null
let gauche = 0
radio.setGroup(33)
gauche = 0
let strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
left = strip.range(12, 20)
right = strip.range(0, 13)
