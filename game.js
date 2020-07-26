var config = {
  type: Phaser.AUTO,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 1102,
    height: 620,
  },

  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 300 },
      debug: false,
    },
  },
  scene: [
    Scene0_A,
    Scene1,
    Scene2,
    Scene0,
    Scene4,
    Scene7,
    Scene8,
    SceneA,
    SceneB,
    SceneC,
    SceneD,
    SceneE,
    SceneF,
    SceneG,
    Scene6_1,
    Scene6_2,
    Scene6_3,
    Scene5_E,
    Scene5_F,
    Scene3,
  ],
};

var game = new Phaser.Game(config);

const pac = {
  pac1: {
    fiebre: "38.9°",
    cabeza: "true",
    congestion: "true",
    inflamacion: "false",
    ganglios: "false",
    erupcion: "true",
    articulaciones: "true",
    faringitis: "true",
  },
  /*pac2: {
    fiebre: "41°",
    cabeza: "true",
    congestion: "true",
    inflamacion: "false",
    ganglios: "false",
    erupcion: "true",
    articulaciones: "true",
    faringitis: "false",
  },
  pac3: {},*/
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
let stepHeight;

var score = 240;
var salv = 0;

var diag;

var temp = 0;
var cab = 0;
var con = 0;
var inf = 0;
var gang = 0;
var sar = 0;
var dol = 0;
var far = 0;

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
