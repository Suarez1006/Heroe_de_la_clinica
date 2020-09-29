var config = {
  type: Phaser.AUTO,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 1102,
    height: 620,
  },
  scene: [
    loader, //Pantalla de carga
    mainMenu, //Menu principal
    SintScene, //Pick de sintomas
    Tuto_01, //Consultorio primer paciente
    creditScene, //Creditos
    Tuto_02, //Camilla primer paciente
    consultorioScene, //Consultorio segundo paciente
    camillaScene, //Camilla segundo paciente
    scoreScene, // Puntaje final
    menuPausa, //Libreta (Menu pausa)
    menuTuto, //Ficha de primer paciente
    rubMenu, //Ficha de segundo paciente (rubeola)
    papMenu, //Ficha de segundo paciente (paperas)
    varMenu, //Ficha de segundo paciente (varicela)
    relojTuto, //Reloj tutorial
    reloj, //Reloj pacientes
    diagnostico, //Diagnosticos
    infoPoster, //Poster sintomas
    ayuda10s, //Ayuda de los 10 segundos
    helpScene, //Primer pagina ayuda
    Exito, //Diagnostico Exitoso
    Fallo, //Diagnostico Fallido
    chatScene, //Charlas
  ],
};

var game = new Phaser.Game(config);

const COLOR_PRIMARY = 0x2e1f18;
const COLOR_LIGHT = 0x000000;
const COLOR_DARK = 0xffffff;

var pausa;
var doc;
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
  (doc = "Doctor: "),
  "Buenos dias, mucho gusto.",
  (doc = "Paciente: "),
  "Buenas, igualmente.",
  (doc = "Doctor: "),
  "Digame, que le anda pasando?.",
  (doc = "Paciente: "),
  "Ando con dolores de cabeza y no tengo mucha hambre.",
  (doc = "Paciente: "),
  "Ademas desde que empezaron me siento con algo de fiebre.",
  (doc = "Doctor: "),
  "Hmm, algo mas?.",
  (doc = "Paciente: "),
  "Creo que eso es todo.",
  (doc = "Paciente: "),
  "Ah no, tambien me canso mas rapido que antes.",
  (doc = "Doctor: "),
  "Bien, pase a la camilla.",
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
