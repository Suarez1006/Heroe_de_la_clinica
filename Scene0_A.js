var carga;

class Scene0_A extends Phaser.Scene {
  constructor() {
    super("preload");
  }

  preload() {
    var progressBar = this.add.graphics();
    var progressBox = this.add.graphics();
    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect(391, 285, 320, 50);
    var width = 1102;
    var height = 620;
    var loadingText = this.make.text({
      x: width / 2,
      y: height / 2 - 50,
      text: "Loading...",
      style: {
        font: "20px monospace",
        fill: "#ffffff",
      },
    });
    loadingText.setOrigin(0.5, 0.5);
    var percentText = this.make.text({
      x: width / 2,
      y: height / 2,
      text: "0%",
      style: {
        font: "18px monospace",
        fill: "#ffffff",
      },
    });
    percentText.setOrigin(0.5, 0.5);
    var assetText = this.make.text({
      x: width / 2,
      y: height / 2 + 50,
      text: "",
      style: {
        font: "18px monospace",
        fill: "#ffffff",
      },
    });
    assetText.setOrigin(0.5, 0.5);

    this.load.image("negro", "assets/negro.png");
    this.load.image("blanco", "assets/blanco.png");
    this.load.image("consultorio", "assets/consultorio.png");
    this.load.image("camilla", "assets/camilla.jpg");

    this.load.image("play", "assets/play.png");
    this.load.image("inicio", "assets/inicio.png");
    this.load.image("credits", "assets/creditos.png");
    this.load.image("ayuda", "assets/ayuda.png");
    this.load.image("saltar", "assets/skip.png");
    this.load.image("saltar_s", "assets/skip_s.png");

    this.load.image("ayuda_pag1", "assets/ayuda_pag1.png");
    this.load.image("cartelAyuda", "assets/cartelAyuda.png");

    this.load.image("scoreE", "assets/scoreE.png");
    this.load.image("scoreF", "assets/scoreF.png");
    this.load.image("final", "assets/final.png");

    this.load.image("libreta", "assets/libreta.png");
    this.load.image("flechaP", "assets/flechaP.png");

    this.load.image("ficha", "assets/ficha.png");
    this.load.image("ficha2", "assets/ficha_02.png");
    this.load.image("ficha2a", "assets/ficha_02a.png");
    this.load.image("ficha2b", "assets/ficha_02b.png");
    this.load.image("ficha3", "assets/ficha_03.png");
    this.load.image("ficha3a", "assets/ficha_03a.png");
    this.load.image("ficha3b", "assets/ficha_03b.png");

    this.load.image("guantes", "assets/guantes.png");
    this.load.image("guantes_s", "assets/guantes_s.png");
    this.load.image("reloj", "assets/reloj.png");
    this.load.image("arena", "assets/arena.png");
    this.load.image("arena2", "assets/arena2.png");
    this.load.image("linterna", "assets/linterna.png");
    this.load.image("linterna_s", "assets/linterna_s.png");
    this.load.image("estetoscopio", "assets/estetoscopio.png");
    this.load.image("estetoscopio_s", "assets/estetoscopio_s.png");
    this.load.image("termometro", "assets/termometro.png");
    this.load.image("termometro_s", "assets/termometro_s.png");
    this.load.image("bowl", "assets/bowl.png");
    this.load.image("chupetin", "assets/chupetin.png");

    this.load.image("puerta", "assets/Puerta.png");
    this.load.image("tilde", "assets/tilde.png");
    this.load.image("reload", "assets/retry.png");
    this.load.image("muñeco", "assets/muñeco.png");
    this.load.spritesheet("muñeco_r", "assets/muñeco_ready.png", {
      frameWidth: 72,
      frameHeight: 84,
    });

    this.load.image("menug1", "assets/menug1.png");
    this.load.image("menug2", "assets/menug2.png");
    this.load.image("menug3", "assets/menug3.png");

    this.load.image("selloA", "assets/selloA.png");
    this.load.image("selloA_s", "assets/selloA_s.png");
    this.load.image("selloD", "assets/selloD.png");
    this.load.image("selloD_s", "assets/selloD_s.png");
    this.load.image("sano", "assets/sano.png");
    this.load.image("enfermo", "assets/enfermo.png");
    this.load.image("siP", "assets/si.png");
    this.load.image("noP", "assets/no.png");
    this.load.image("circuloP", "assets/circulo.png");

    this.load.image("paciente_01", "assets/paciente_01.png");
    this.load.image("paciente_01a", "assets/paciente_01a.png");
    this.load.image("paciente_01a_s", "assets/paciente_01a_s.png");

    this.load.image("paciente_02", "assets/paciente_02.png");
    this.load.image("paciente_02a", "assets/paciente_02a.png");
    this.load.image("paciente_02a_s", "assets/paciente_02a_s.png");

    this.load.image("paciente_03", "assets/paciente_03.png");
    this.load.image("paciente_03a", "assets/paciente_03a.png");
    this.load.image("paciente_03a_s", "assets/paciente_03a_s.png");

    this.load.image("hitbox", "assets/hitbox.png");
    this.load.image("hitbox2", "assets/hitbox2.png");

    this.load.image("libreta_s", "assets/libreta_s.png");
    this.load.image("ficha_s", "assets/ficha_s.png");
    this.load.image("infoB", "assets/info.png");
    this.load.image("poster", "assets/poster.png");

    this.load.image("E", "assets/E.png");
    this.load.image("B", "assets/B.png");
    this.load.image("MB", "assets/MB.png");
    this.load.image("S", "assets/S.png");
    this.load.image("NS", "assets/NS.png");
    this.load.image("0", "assets/0.png");
    this.load.image("1", "assets/1.png");
    this.load.image("2", "assets/2.png");

    this.load.image("excelente", "assets/excelente.png");
    this.load.image("muyBueno", "assets/muyBueno.png");
    this.load.image("bueno", "assets/bueno.png");
    this.load.image("satisfactorio", "assets/satisfactorio.png");
    this.load.image("noSatisfactorio", "assets/noSatisfactorio.png");

    this.load.json("sintomas", "assets/data/sintomas.json");

    this.load.on("progress", function (value) {
      progressBar.clear();
      progressBar.fillStyle(0xffffff, 1);
      progressBar.fillRect(401, 295, 300 * value, 30);
      percentText.setText(parseInt(value * 100) + "%");
    });

    this.load.on("fileprogress", function (file) {
      assetText.setText("Loading asset: " + file.key);
    });

    this.load.on("complete", function () {
      carga = 1;
    });
  }
  update() {
    if (carga == 1) {
      this.scene.start("Menu");
      this.scene.sleep();
    }
  }
}
