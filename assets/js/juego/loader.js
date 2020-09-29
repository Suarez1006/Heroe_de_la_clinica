var carga;

class loader extends Phaser.Scene {
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

    this.load.image("negro", "assets/imagenes/fondos/negro.png");
    this.load.image("blanco", "assets/imagenes/complementos/blanco.png");
    this.load.image("consultorio", "assets/imagenes/fondos/consultorio.png");
    this.load.image("camilla", "assets/imagenes/fondos/camilla.jpg");

    this.load.image("play", "assets/imagenes/botones/play.png");
    this.load.image("inicio", "assets/imagenes/fondos/inicio.png");
    this.load.image("credits", "assets/imagenes/botones/creditos.png");
    this.load.image("ayuda", "assets/imagenes/botones/ayuda.png");
    this.load.image("saltar", "assets/imagenes/botones/skip.png");
    this.load.image("saltar_s", "assets/imagenes/botones/skip_s.png");

    this.load.image("ayuda_pag1", "assets/imagenes/flotantes/ayuda_pag1.png");
    this.load.image("cartelAyuda", "assets/imagenes/flotantes/cartelAyuda.png");

    this.load.image("scoreE", "assets/imagenes/flotantes/scoreE.png");
    this.load.image("scoreF", "assets/imagenes/flotantes/scoreF.png");
    this.load.image("final", "assets/imagenes/fondos/final.png");

    this.load.image("libreta", "assets/imagenes/flotantes/libreta.png");
    this.load.image("flechaP", "assets/imagenes/botones/flechaP.png");

    this.load.image("ficha", "assets/imagenes/personajes/ficha.png");
    this.load.image("ficha2", "assets/imagenes/personajes/ficha_02.png");
    this.load.image("ficha2a", "assets/imagenes/personajes/ficha_02a.png");
    this.load.image("ficha2b", "assets/imagenes/personajes/ficha_02b.png");
    this.load.image("ficha3", "assets/imagenes/personajes/ficha_03.png");
    this.load.image("ficha3a", "assets/imagenes/personajes/ficha_03a.png");
    this.load.image("ficha3b", "assets/imagenes/personajes/ficha_03b.png");

    this.load.image("guantes", "assets/imagenes/elementos/guantes.png");
    this.load.image("guantes_s", "assets/imagenes/elementos/guantes_s.png");
    this.load.image("reloj", "assets/imagenes/complementos/reloj.png");
    this.load.image("arena", "assets/imagenes/complementos/arena.png");
    this.load.image("arena2", "assets/imagenes/complementos/arena2.png");
    this.load.image("linterna", "assets/imagenes/elementos/linterna.png");
    this.load.image("linterna_s", "assets/imagenes/elementos/linterna_s.png");
    this.load.image(
      "estetoscopio",
      "assets/imagenes/elementos/estetoscopio.png"
    );
    this.load.image(
      "estetoscopio_s",
      "assets/imagenes/elementos/estetoscopio_s.png"
    );
    this.load.image("termometro", "assets/imagenes/elementos/termometro.png");
    this.load.image(
      "termometro_s",
      "assets/imagenes/elementos/termometro_s.png"
    );
    this.load.image("bowl", "assets/imagenes/elementos/bowl.png");
    this.load.image("chupetin", "assets/imagenes/elementos/chupetin.png");

    this.load.image("puerta", "assets/imagenes/elementos/Puerta.png");
    this.load.image("tilde", "assets/imagenes/botones/tilde.png");
    this.load.image("reload", "assets/imagenes/botones/retry.png");
    this.load.image("muñeco", "assets/imagenes/complementos/muñeco.png");
    this.load.spritesheet(
      "muñeco_r",
      "assets/imagenes/complementos/muñeco_ready.png",
      {
        frameWidth: 72,
        frameHeight: 84,
      }
    );

    this.load.image("menug1", "assets/imagenes/complementos/menug1.png");
    this.load.image("menug2", "assets/imagenes/complementos/menug2.png");
    this.load.image("menug3", "assets/imagenes/complementos/menug3.png");

    this.load.image("selloA", "assets/imagenes/elementos/selloA.png");
    this.load.image("selloA_s", "assets/imagenes/elementos/selloA_s.png");
    this.load.image("selloD", "assets/imagenes/elementos/selloD.png");
    this.load.image("selloD_s", "assets/imagenes/elementos/selloD_s.png");
    this.load.image("sano", "assets/imagenes/complementos/sano.png");
    this.load.image("enfermo", "assets/imagenes/complementos/enfermo.png");
    this.load.image("siP", "assets/imagenes/botones/si.png");
    this.load.image("noP", "assets/imagenes/botones/no.png");
    this.load.image("circuloP", "assets/imagenes/complementos/circulo.png");

    this.load.image("fichaFoto", "assets/imagenes/personajes/hugo.png");

    this.load.image(
      "fichaFotoTuto",
      "assets/imagenes/personajes/paciente_01a_ficha.png"
    );

    this.load.image(
      "fichaFoto2",
      "assets/imagenes/personajes/paciente_02a_ficha.png"
    );
    this.load.image(
      "fichaFoto3",
      "assets/imagenes/personajes/paciente_03a_ficha.png"
    );

    this.load.image(
      "paciente_01",
      "assets/imagenes/personajes/paciente_01.png"
    );
    this.load.image(
      "paciente_01a",
      "assets/imagenes/personajes/paciente_01a.png"
    );
    this.load.image(
      "paciente_01a_s",
      "assets/imagenes/personajes/paciente_01a_s.png"
    );

    this.load.image(
      "paciente_02",
      "assets/imagenes/personajes/paciente_02.png"
    );
    this.load.image(
      "paciente_02a",
      "assets/imagenes/personajes/paciente_02a.png"
    );
    this.load.image(
      "paciente_02a_s",
      "assets/imagenes/personajes/paciente_02a_s.png"
    );

    this.load.image(
      "paciente_03",
      "assets/imagenes/personajes/paciente_03.png"
    );
    this.load.image(
      "paciente_03a",
      "assets/imagenes/personajes/paciente_03a.png"
    );
    this.load.image(
      "paciente_03a_s",
      "assets/imagenes/personajes/paciente_03a_s.png"
    );

    this.load.image("hitbox", "assets/imagenes/complementos/hitbox.png");
    this.load.image("hitbox2", "assets/imagenes/complementos/hitbox2.png");

    this.load.image("libreta_s", "assets/imagenes/elementos/libreta_s.png");
    this.load.image("ficha_s", "assets/imagenes/elementos/ficha_s.png");
    this.load.image("infoB", "assets/imagenes/complementos/info.png");
    this.load.image("poster", "assets/imagenes/flotantes/poster.png");

    this.load.image("E", "assets/imagenes/calificaciones/E.png");
    this.load.image("B", "assets/imagenes/calificaciones/B.png");
    this.load.image("MB", "assets/imagenes/calificaciones/MB.png");
    this.load.image("S", "assets/imagenes/calificaciones/S.png");
    this.load.image("NS", "assets/imagenes/calificaciones/NS.png");
    this.load.image("0", "assets/imagenes/calificaciones/0.png");
    this.load.image("1", "assets/imagenes/calificaciones/1.png");
    this.load.image("2", "assets/imagenes/calificaciones/2.png");

    this.load.image(
      "excelente",
      "assets/imagenes/calificaciones/excelente.png"
    );
    this.load.image("muyBueno", "assets/imagenes/calificaciones/muyBueno.png");
    this.load.image("bueno", "assets/imagenes/calificaciones/bueno.png");
    this.load.image(
      "satisfactorio",
      "assets/imagenes/calificaciones/satisfactorio.png"
    );
    this.load.image(
      "noSatisfactorio",
      "assets/imagenes/calificaciones/noSatisfactorio.png"
    );

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
