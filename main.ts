enum RadioMessage {
    message1 = 49434,
    good = 54385,
    bad = 61181,
    you = 48726,
    AFK = 6545,
    oh = 3136
}
input.onButtonPressed(Button.A, function () {
    radio.sendMessage(RadioMessage.bad)
})
input.onGesture(Gesture.FreeFall, function () {
    radio.sendMessage(RadioMessage.oh)
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.setGroup(1)
})
radio.onReceivedMessage(RadioMessage.you, function () {
    basic.showString("and you")
})
radio.onReceivedMessage(RadioMessage.AFK, function () {
    basic.showString("AFK")
})
radio.onReceivedMessage(RadioMessage.bad, function () {
    basic.showString("bad")
})
input.onGesture(Gesture.ScreenDown, function () {
    radio.sendMessage(RadioMessage.AFK)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendMessage(RadioMessage.message1)
})
input.onButtonPressed(Button.B, function () {
    radio.sendMessage(RadioMessage.good)
})
input.onGesture(Gesture.Shake, function () {
    radio.sendMessage(RadioMessage.you)
})
input.onGesture(Gesture.TiltRight, function () {
    radio.setGroup(2)
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showString("it is backwards")
})
radio.onReceivedMessage(RadioMessage.good, function () {
    basic.showString("good")
})
radio.onReceivedMessage(RadioMessage.oh, function () {
    basic.showString("oh ok")
})
radio.onReceivedMessage(RadioMessage.message1, function () {
    basic.showString("Hello how are you")
})
