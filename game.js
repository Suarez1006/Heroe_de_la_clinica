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
    SceneS, //Pick de sintomas
    Scene2, //Consultorio primer paciente
    Scene0, //Creditos
    Scene4, //Camilla primer paciente
    Scene7, //Consultorio segundo paciente
    Scene8, //Camilla segundo paciente
    Scene9, // Puntaje final
    SceneA, //Libreta (Menu pausa)
    SceneB, //Ficha de primer paciente
    SceneB_1, //Ficha de segundo paciente (rubeola)
    SceneB_2, //Ficha de segundo paciente (paperas)
    SceneB_3, //Ficha de segundo paciente (varicela)
    SceneC, //Reloj primer paciente
    SceneC_1, //Reloj segundo paciente
    SceneD, //Diagnosticos
    SceneE, //Poster sintomas
    SceneF, //Ayuda de los 10 segundos
    Scene6_1, //Primer pagina ayuda
    Scene5_E, //Diagnostico Exitoso
    Scene5_F, //Diagnostico Fallido
    Scene3, //Charlas
  ],
};

var game = new Phaser.Game(config);

const COLOR_PRIMARY = 0x2e1f18;
const COLOR_LIGHT = 0x000000;
const COLOR_DARK = 0xffffff;

var pausa;
var help = 0;
var ayu10 = 0;
var chat = 1;
var mascaraR = 0;
let barraR;
var barraRmask;
var pacientes = 0;
var pac_gen;

var score = 240;
var finalScore = 0;
var finalSalv = 0;
var salv = 0; //puntos de salvacion
var scoreFS = 0;

var diag; //diagnostico

var selloPE = 0;
var selloPS = 0;

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

let rubEnf;
let papEnf;
let variEnf;

var rub = 0;
var vari = 0;
var pap = 0;

var fieb_repe = 0;
var dolCab_repe = 0;
var perApet_repe = 0;
var gang_repe = 0;

let chatInfo = {
  chat_dolCab: "",
  chat_fiebre: "",
  chat_cong: "",
  chat_inf: "",
  chat_gang: "",
  chat_erup: "",
  chat_art: "",
  chat_far: "",
  chat_dolMast: "",
  chat_dolMusc: "",
  chat_fatiga: "",
  chat_perApet: "",
  chat_cans: "",
};
var charla;

var resetFicha = 0;
var resetFichaA = 0;
var resetFichaB = 0;

var dolCab;
var fiebre;
var cong;
var inf;
var gang;
var erup;
var art;
var far;
var dolMast;
var dolMusc;
var fatiga;
var perApet;
var cans;

var temperatura;
