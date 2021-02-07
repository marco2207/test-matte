let distance3 = 0
let speed3 = 0
basic.forever(function () {
    basic.showString("ciao a tutti ")
    distance3 = maqueen.Ultrasonic(PingUnit.Centimeters)
    if (distance3 < 4) {
        music.playMelody("C5 B A G F E D C ", 120)
        basic.showIcon(IconNames.Chessboard)
        speed3 = 0
        maqueen.motorStop(maqueen.Motors.All)
        for (let index = 0; index < 4; index++) {
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 10)
        }
    } else if (distance3 > 30) {
        basic.showIcon(IconNames.Diamond)
        speed3 = 255
    } else {
        speed3 = distance3 * 7
        basic.showIcon(IconNames.Square)
    }
})
