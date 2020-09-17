input.onButtonPressed(Button.A, function () {
    y = 1
    while (y == 1) {
        basic.showNumber(x)
        basic.pause(1000)
        x += 1
    }
})
input.onButtonPressed(Button.AB, function () {
    x = 0
    basic.showNumber(x)
})
input.onButtonPressed(Button.B, function () {
    y = 0
    while (y == 0) {
        basic.showNumber(x)
    }
})
let y = 0
let x = 0
basic.showString("Go")
x = 0
