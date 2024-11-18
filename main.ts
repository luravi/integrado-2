//  Variables para guardar los datos
let temp = 0
let luz = 0
//  Función para mostrar un saludo con un corazón latiendo
function show_heart_greeting() {
    for (let _ = 0; _ < 3; _++) {
        //  Hacer que el corazón lata 3 veces
        basic.showIcon(IconNames.Heart)
        basic.pause(500)
        basic.clearScreen()
        basic.pause(500)
    }
    basic.showString("Hola!")
}

//  Mostrar el saludo con el corazón latiendo
show_heart_greeting()
//  Medir y mostrar la temperatura al encender
temp = input.temperature()
basic.showString("Temp: {temp}C")
//  Función principal que se ejecuta continuamente
//  Ejecutar la función continuamente
basic.forever(function on_forever() {
    
    //  --- Mostrar nivel de luz ---
    luz = input.lightLevel()
    led.plotBarGraph(luz, 255)
    basic.pause(1000)
    //  --- Reproducir música y encender luces ---
    music.play(music.stringPlayable("G B A G C5 B A B ", 120), music.PlaybackMode.UntilDone)
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
    basic.pause(2000)
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
    //  --- Ir hacia el objeto ---
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 50)
    basic.pause(2000)
    maqueen.motorStop(maqueen.Motors.All)
    basic.pause(500)
    //  --- Bajar la pala para recoger el objeto ---
    maqueen.servoRun(maqueen.Servos.S1, 120)
    basic.pause(1000)
    //  --- Avanzar un poco más para cargar el objeto ---
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 50)
    basic.pause(1000)
    maqueen.motorStop(maqueen.Motors.All)
    basic.pause(500)
    //  --- Subir la pala con el objeto ---
    maqueen.servoRun(maqueen.Servos.S1, 60)
    basic.pause(1000)
    //  --- Retroceder hacia el punto de partida ---
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 50)
    basic.pause(1000)
    //  --- Dar media vuelta (girar 180 grados) ---
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 50)
    basic.pause(1500)
    maqueen.motorStop(maqueen.Motors.All)
    basic.pause(500)
    //  --- Volver al punto de partida ---
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 50)
    basic.pause(2000)
    maqueen.motorStop(maqueen.Motors.All)
})
