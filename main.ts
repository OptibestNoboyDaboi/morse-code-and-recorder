enum RadioMessage {
    message1 = 49434,
    message2 = 1435,
    message3 = 31126
}
radio.onReceivedMessage(RadioMessage.message3, function () {
    record.playAudio(record.BlockingState.Blocking)
})
input.onButtonPressed(Button.A, function () {
    radio.sendMessage(RadioMessage.message1)
})
input.onButtonPressed(Button.AB, function () {
    record.startRecording(record.BlockingState.Blocking)
    radio.sendMessage(RadioMessage.message3)
})
input.onButtonPressed(Button.B, function () {
    radio.sendMessage(RadioMessage.message2)
})
radio.onReceivedMessage(RadioMessage.message2, function () {
    basic.showString(morse.encode("Compromised"))
})
radio.onReceivedMessage(RadioMessage.message1, function () {
    basic.showString(morse.encode("Complete"))
})
radio.setGroup(1)
