music.setVolume(255)
basic.forever(function () {
    music.playTone(494, music.beat(BeatFraction.Half))
    basic.pause(100)
    music.playTone(698, music.beat(BeatFraction.Half))
    basic.pause(100)
})
