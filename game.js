var config = {
  type: Phaser.AUTO,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 1102,
    height: 620,
  },
  scene: [
    Scene0_A, //Pantalla de carga
    Scene1, //Menu principal
    Scene2, //Consultorio primer paciente
    Scene0, //Creditos
    Scene4, //Camilla primer paciente
    Scene7, //Consultorio segundo paciente
    Scene8, //Camilla segundo paciente
    SceneA, //Libreta (Menu pausa)
    SceneB, //Ficha de primer paciente
    SceneB_1, //Ficha de segundo paciente (rubeola)
    SceneC, //Reloj primer paciente
    SceneC_1, //Reloj segundo paciente
    SceneD, //Diagnosticos
    Scene6_1, //Primer pagina ayuda
    Scene6_2, //Segunda pagina ayuda
    Scene6_3, //Tercer pagina ayuda
    Scene5_E, //Diagnostico Exitoso
    Scene5_F, //Diagnostico Fallido
    Scene3, //Charlas
  ],
};

var game = new Phaser.Game(config);

const pac = {
  pac1: {
    //solo rubeola
    fiebre: "38.9°",
    cabeza: "true",
    congestion: "true",
    inflamacion: "false",
    ganglios: "false",
    erupcion: "true",
    articulaciones: "true",
    faringitis: "true",
  },
  pac2: {
    //general
    fiebre: "40°",
    cabeza: "true",
    //rubeola
    congestion: "true",
    inflamacion: "false",
    ganglios: "false",
    erupcion: "false",
    articulaciones: "false",
    faringitis: "false",
    //paperas
    glandulas: "false",
    dolorMast: "false",
    dolMusc: "false",
    fatiga: "false",
    perdidaApet: "false",
    //varicela
    perdidaApet: "false",
    cansancio: "true",
  },
  pac3: {},
};

const COLOR_PRIMARY = 0x2e1f18;
const COLOR_LIGHT = 0x000000;
const COLOR_DARK = 0xffffff;

var pausa = 0;
var help = 0;
var chat = 0;
var mascaraR = 0;
let barraR;
var barraRmask;

var score = 240;
var salv = 0; //puntos de salvacion

var diag; //diagnostico

var finish = 0;
var content = [
  "Doctor: Buenos dias, mucho gusto.\n",
  "Paciente: Buenas, igualmente.\n",
  "Doctor: Digame, que le anda pasando?.\n",
  "Paciente: Ando con unos dolores en las articulaciones y un dolor de cabeza insoportable hace unos dias.",
  "Paciente: Ademas desde que empezaron me siento congestionado.\n",
  "Doctor: Hmm, algo mas?.\n",
  "Paciente: Creo que eso es todo.",
  "Paciente: Ah no, tambien tengo un pequeño sarpullido en el cuerpo.",
  "Doctor: Bien, pase a la camilla.",
];

let tiempo = 10000;
