var config = {
  type: Phaser.AUTO,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 1920,
    height: 1080,
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
    varTuto,
    pacMenu,
    rubMenu, //Ficha de segundo paciente (rubeola)
    papMenu, //Ficha de segundo paciente (paperas)
    varMenu, //Ficha de segundo paciente (varicela)
    reloj, //Reloj pacientes
    separador,
    separadorTuto,
    diagnostico, //Diagnosticos
    infoPoster, //Poster sintomas
    ayuda10s, //Ayuda de los 10 segundos
    helpScene, //Primer pagina ayuda
    helpScene2, //Segunda pagina ayuda
    Exito, //Diagnostico Exitoso
    Fallo, //Diagnostico Fallido
    chatScene, //Charlas
    infoEnfer,
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
var photo_gen;

var score = 240;
var finalScore = 0;
var finalSalv = 0;
var salv = 0; //puntos de salvacion
var scoreFS = 0;

var diag; //diagnostico

var selloPE = 0;
var selloPS = 0;

var finish = 0;
var content;

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

var Idioma;
var selecIdioma = "es";

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
var reseteo = 0;
var pestaña = 0;

var sep1;
var sep2;
var sep3;
var sep4;
var sep5;

var boton_ayuda;
var boton_ayuda_s;

var infoE;
var infoRub;
var infoPap;
var infoVar;

var photo;

var musica = 0;
var musicaS = 0;
var musicConfig = {
  mute: false,
  volume: 1,
  rate: 1,
  detune: 0,
  seek: 0,
  loop: true,
  delay: 0,
};
var musicConfig2 = {
  mute: true,
};
var music2;
var music3;
var musicaS = 0;

var fichaVolver = 0;
var tutoFinish = 0;
var creado = 0;
