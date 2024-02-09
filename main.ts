input.onButtonPressed(Button.A, function () {
    if (state == 0) {
        first += 1
    }
    if (state == 1) {
        _symbol += 1
        if (_symbol == 0) {
            basic.showLeds(`
                . . # . .
                . . # . .
                # # # # #
                . . # . .
                . . # . .
                `)
        }
        if (_symbol == 1) {
            basic.showLeds(`
                . . . . .
                . . . . .
                # # # # #
                . . . . .
                . . . . .
                `)
        }
        if (_symbol == 2) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . # . .
                . # . # .
                . . . . .
                `)
        }
        if (_symbol == 3) {
            basic.showLeds(`
                . . # . .
                . . . . .
                # # # # #
                . . . . .
                . . # . .
                `)
        }
        if (_symbol > 3) {
            _symbol = 0
        }
    }
    if (state == 2) {
        second += 1
        basic.showNumber(second)
    }
})
input.onButtonPressed(Button.AB, function () {
    if (state == 0) {
        state = 1
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . . # . .
            . . # . .
            `)
    }
    basic.pause(1000)
    if (state == 1) {
        state = 2
    }
    basic.pause(1000)
    if (state == 2) {
        state = 3
    }
    basic.pause(1000)
    if (state == 3) {
        first = 0
        second = 0
        state = 0
        _symbol = 0
    }
    basic.pause(1000)
})
input.onButtonPressed(Button.B, function () {
    if (state == 0) {
        first += -1
    }
    if (state == 1) {
        _symbol += -1
        if (_symbol == 0) {
            basic.showLeds(`
                . . # . .
                . . # . .
                # # # # #
                . . # . .
                . . # . .
                `)
        }
        if (_symbol == 1) {
            basic.showLeds(`
                . . . . .
                . . . . .
                # # # # #
                . . . . .
                . . . . .
                `)
        }
        if (_symbol == 2) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . # . .
                . # . # .
                . . . . .
                `)
        }
        if (_symbol == 3) {
            basic.showLeds(`
                . . # . .
                . . . . .
                # # # # #
                . . . . .
                . . # . .
                `)
        }
        if (_symbol < 0) {
            _symbol = 3
        }
    }
    if (state == 2) {
        second += -1
        basic.showNumber(second)
    }
})
let _symbol = 0
let state = 0
let second = 0
let first = 0
first = 0
second = 0
state = 0
_symbol = 0
basic.forever(function () {
    if (state == 0) {
        basic.showNumber(first)
    }
    if (state == 2) {
        basic.showNumber(second)
    }
    if (state == 3) {
        if (_symbol == 0) {
            basic.showNumber(first + second)
        }
        if (_symbol == 1) {
            basic.showNumber(first - second)
        }
        if (_symbol == 2) {
            basic.showNumber(first * second)
        }
        if (_symbol == 3) {
            basic.showNumber(first / second)
        }
    }
})
