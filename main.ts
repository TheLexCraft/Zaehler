input.onButtonPressed(Button.A, function () {
    zähler = zähler + 1
    basic.showNumber(zähler)
})
input.onButtonPressed(Button.B, function () {
    zähler = zähler - 1
    if (zähler == -1) {
        zähler = 0
    }
    basic.showNumber(zähler)
})
let zähler = 0
basic.showNumber(zähler)
