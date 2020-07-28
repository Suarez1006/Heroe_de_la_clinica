class SceneS extends Phaser.Scene {
  constructor() {
    super("sintomasPick");
  }
  create() {
    var sintomasData = this.game.cache.json.get("sintomas");
    charla = 1;

    var enfermedadPatron = Phaser.Math.FloatBetween(0, 1);
    temperatura = Phaser.Math.FloatBetween(36, 40);
    let enfermedad;
    var enf = 0;
    if (temperatura <= 37.9) {
      fiebre = "false";
    } else {
      fiebre = "true";
      enf += 0.5;
    }
    var cabPatron = Phaser.Math.FloatBetween(0, 1);
    if (fiebre == true) {
      if (cabPatron > 70) {
        dolCab = "false";
      } else {
        dolCab = "true";
        enf += 0.5;
        chatInfo.chat_dolCab =
          "Me medi alta temperatura anoche y hoy me levanté con dolor de cabeza.\n";
      }
    } else {
      if (cabPatron > 40) {
        dolCab = "false";
      } else {
        dolCab = "true";
        enf += 0.5;
        chatInfo.chat_dolCab = "Me siento con dolor de cabeza. ";
      }
    }

    // Picik de enfermedades
    if (enfermedadPatron <= 0.33) {
      //pick rubeola
      rub = 1;
      console.log("Rubeola");
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
        chatInfo.chat_cong = "Me siento algo congestionado ultimamente.\n";
      }
      if (inf == "true") {
        enf++;
      }
      if (gang == "true") {
        enf++;
      }
      if (erup == "true") {
        enf++;
        chatInfo.chat_erup = "Tengo un sarpullido leve en todo el cuerpo.\n";
      }
      if (art == "true") {
        enf++;
        chatInfo.chat_art =
          "Las articulaciones me duelen constantemente al moverme.\n";
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
      console.log("Paperas");
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
        chatInfo.chat_dolMast = "Al masticar me duele la garganta.\n";
      }
      if (dolMusc == "true") {
        enf++;
        chatInfo.chat_dolMusc = "Siento una molestia en los musculos.\n";
      }
      if (fatiga == "true") {
        enf++;
        chatInfo.chat_fatiga =
          "Estoy fatigado ultimamente, no tengo ganas de hacer nada.\n";
      }
      if (perApet == "true") {
        enf++;
        chatInfo.chat_perApet = "Ando sin ganas de comer hace algunos días.\n";
      }
      if (enf >= 3) {
        papEnf = 1;
      } else {
        papEnf = 0;
      }
    } else if (enfermedadPatron <= 1) {
      //Pick varicela
      vari = 1;
      console.log("Varicela");
      enfermedad = sintomasData.enfermedad.varicela;
      perApet = Phaser.Math.RND.pick(
        sintomasData.enfermedad.varicela.perdidaApet
      );
      cans = Phaser.Math.RND.pick(sintomasData.enfermedad.varicela.cansancio);
      var sintPickeados = { dolCab, fiebre, perApet, cans };
      if (perApet == "true") {
        enf++;
        chatInfo.chat_perApet =
          "Vengo porque hace días que no siento apetito.\n";
      }
      if (cans == "true") {
        enf++;
        chatInfo.chat_cans = "Estoy cansado y me cuesta salir de la cama.\n";
      }
      if (enf >= 2) {
        variEnf = 1;
      } else {
        variEnf = 0;
      }
    }

    console.log(temperatura);
    console.log(sintPickeados);
    console.log("enf= " + enf);
    if (rubEnf == 1) {
      console.log("enfermo de rubeola");
    } else if (papEnf == 1) {
      console.log("enfermo de paperas");
    } else if (variEnf == 1) {
      console.log("enfermo de varicela");
    } else {
      console.log("sano");
    }

    var chatPatron = Phaser.Math.FloatBetween(0, 1);
    if (chatPatron <= 0.25) {
      content = "Doctor: Hola, buenas tardes ¿Qué te anda sucediendo?\n\n";
    } else if (chatPatron <= 0.5) {
      content = "Doctor: Mucho gusto, ¿Qué tal se encuentra?\n\n";
    } else if (chatPatron <= 0.75) {
      content = "Doctor: Buen día, cuénteme ¿Qué le sucede?\n\n";
    } else {
      content = "Doctor: Un gusto, ¿Cuál es el motivo de su visita?\n\n";
    }

    content +=
      "Paciente: Buenas. " +
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
    this.scene.run("clock2");
  }
}
