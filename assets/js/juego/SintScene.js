class SintScene extends Phaser.Scene {
  constructor() {
    super("sintomasPick");
  }
  create() {
    var msgCab1 = Phaser.Math.RND.pick(Idioma.juego.mensajes.msgCab1);
    var msgCab2 = Phaser.Math.RND.pick(Idioma.juego.mensajes.msgCab2);
    var msgCong = Phaser.Math.RND.pick(Idioma.juego.mensajes.msgCong);
    var msgErup = Phaser.Math.RND.pick(Idioma.juego.mensajes.msgErup);
    var msgArt = Phaser.Math.RND.pick(Idioma.juego.mensajes.msgArt);
    var msgDolMast = Phaser.Math.RND.pick(Idioma.juego.mensajes.msgDolMast);
    var msgDolMusc = Phaser.Math.RND.pick(Idioma.juego.mensajes.msgDolMusc);
    var msgFat = Phaser.Math.RND.pick(Idioma.juego.mensajes.msgFat);
    var msgApet = Phaser.Math.RND.pick(Idioma.juego.mensajes.msgApet);
    var msgCans = Phaser.Math.RND.pick(Idioma.juego.mensajes.msgCans);

    pacientes += 1;

    var sintomasData = this.game.cache.json.get("sintomas");

    chatInfo = {
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

    rubPuesto = 0;
    varPuesto = 0;
    papPuesto = 0;
    dolCabPuesto = 0;
    fiebrePuesto = 0;
    congPuesto = 0;
    infPuesto = 0;
    gangPuesto = 0;
    erupPuesto = 0;
    artPuesto = 0;
    farPuesto = 0;
    dolMastPuesto = 0;
    dolMuscPuesto = 0;
    fatigaPuesto = 0;
    perApetPuesto = 0;
    cansPuesto = 0;

    var enfermedadPatron = Phaser.Math.FloatBetween(0, 1);
    temperatura = Phaser.Math.FloatBetween(36, 40);
    let enfermedad;
    var enf = 0;
    if (temperatura >= 38) {
      fiebre = "true";
      enf += 0.5;
    } else {
      fiebre = "false";
    }
    var cabPatron = Phaser.Math.FloatBetween(0, 1);
    if (fiebre == true) {
      if (cabPatron > 70) {
        dolCab = "false";
      } else {
        dolCab = "true";
        enf += 0.5;
        chatInfo.chat_dolCab = msgCab1;
      }
    } else {
      if (cabPatron > 40) {
        dolCab = "false";
      } else {
        dolCab = "true";
        enf += 0.5;
        chatInfo.chat_dolCab = msgCab2;
      }
    }

    // Picik de enfermedades
    if (enfermedadPatron <= 0.33) {
      //pick rubeola
      rub = 1;

      enfermedad = sintomasData.enfermedad.rubeola;
      cong = Phaser.Math.RND.pick(sintomasData.enfermedad.rubeola.congestion);
      inf = Phaser.Math.RND.pick(sintomasData.enfermedad.rubeola.inflamacion);
      gang = Phaser.Math.RND.pick(sintomasData.enfermedad.rubeola.ganglios);
      erup = Phaser.Math.RND.pick(sintomasData.enfermedad.rubeola.erupcion);
      art = Phaser.Math.RND.pick(
        sintomasData.enfermedad.rubeola.articulaciones
      );
      far = Phaser.Math.RND.pick(sintomasData.enfermedad.rubeola.faringitis);
      var sintPickeados = { dolCab, fiebre, cong, inf, gang, erup, art, far };
      if (cong == "true") {
        enf++;
        chatInfo.chat_cong = msgCong;
      }
      if (inf == "true") {
        enf++;
      }
      if (gang == "true") {
        enf++;
      }
      if (erup == "true") {
        enf++;
        chatInfo.chat_erup = msgErup;
      }
      if (art == "true") {
        enf++;
        chatInfo.chat_art = msgArt;
      }
      if (far == "true") {
        enf++;
      }
      if (enf >= 4) {
        rubEnf = 1;
      } else {
        rubEnf = 0;
      }
    } else if (enfermedadPatron <= 0.66) {
      //Pick paperas
      pap = 1;

      enfermedad = sintomasData.enfermedad.paperas;
      gang = Phaser.Math.RND.pick(sintomasData.enfermedad.paperas.ganglios);
      dolMast = Phaser.Math.RND.pick(sintomasData.enfermedad.paperas.dolorMast);
      dolMusc = Phaser.Math.RND.pick(sintomasData.enfermedad.paperas.dolorMusc);
      fatiga = Phaser.Math.RND.pick(sintomasData.enfermedad.paperas.fatiga);
      perApet = Phaser.Math.RND.pick(
        sintomasData.enfermedad.paperas.perdidaApet
      );
      var sintPickeados = {
        dolCab,
        fiebre,
        gang,
        dolMast,
        dolMusc,
        fatiga,
        perApet,
      };
      if (gang == "true") {
        enf++;
      }
      if (dolMast == "true") {
        enf++;
        chatInfo.chat_dolMast = msgDolMast;
      }
      if (dolMusc == "true") {
        enf++;
        chatInfo.chat_dolMusc = msgDolMusc;
      }
      if (fatiga == "true") {
        enf++;
        chatInfo.chat_fatiga = msgFat;
      }
      if (perApet == "true") {
        enf++;
        chatInfo.chat_perApet = msgApet;
      }
      if (enf >= 3) {
        papEnf = 1;
      } else {
        papEnf = 0;
      }
    } else if (enfermedadPatron <= 1) {
      //Pick varicela
      vari = 1;

      enfermedad = sintomasData.enfermedad.varicela;
      perApet = Phaser.Math.RND.pick(
        sintomasData.enfermedad.varicela.perdidaApet
      );
      cans = Phaser.Math.RND.pick(sintomasData.enfermedad.varicela.cansancio);
      var sintPickeados = { dolCab, fiebre, perApet, cans };
      if (perApet == "true") {
        enf++;
        chatInfo.chat_perApet = msgApet;
      }
      if (cans == "true") {
        enf++;
        chatInfo.chat_cans = msgCans;
      }
      if (enf >= 2) {
        variEnf = 1;
      } else {
        variEnf = 0;
      }
    }
    ChatTuto = Phaser.Math.RND.pick(Idioma.juego.mensajes.msgSaludos);
    var msgPaciente = Phaser.Math.RND.pick(Idioma.juego.mensajes.msgPaciente);

    ChatTuto +=
      msgPaciente +
      chatInfo.chat_dolCab +
      chatInfo.chat_cong +
      chatInfo.chat_erup +
      chatInfo.chat_art +
      chatInfo.chat_dolMast +
      chatInfo.chat_dolMusc +
      chatInfo.chat_fatiga +
      chatInfo.chat_perApet +
      chatInfo.chat_cans;

    this.scene.start("juego3");
    this.scene.run("clock");

    music2.stop();
    creado = 0;

    if (musicaS === 1) {
      music3.stop();
    }
  }
}
